import os
from pathlib import Path
import json
from docx import Document
from bs4 import BeautifulSoup
import mammoth
import logging
from datetime import datetime
import re

# Logging konfigurieren
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def convert_text_urls_to_links(html_content):
    """
    Konvertiert Text-URLs in HTML-Links.
    Erkennt verschiedene URL-Formate und wandelt sie in <a> Tags um.
    """
    # URL Pattern für verschiedene Formate
    url_pattern = r'(?<!href=")(?<!src=")((?:https?:\/\/|www\.)[^\s<>"]+(?:\.[^\s<>"]+)+)'
    
    def replace_url(match):
        url = match.group(1)
        full_url = url if url.startswith(('http://', 'https://')) else f'https://{url}'
        return f'<a href="{full_url}" target="_blank" rel="noopener noreferrer" class="underline text-Green-500 hover:text-Green-600">{url}</a>'
    
    # URLs ersetzen, aber nur wenn sie nicht bereits in einem Link sind
    return re.sub(url_pattern, replace_url, html_content)

def extract_year_from_filename(filename):
    """
    Extrahiert Jahreszahlen aus dem Dateinamen.
    Sucht nach 4-stelligen Zahlen zwischen 1900 und 2100.
    """
    try:
        # Suche nach 4-stelligen Zahlen
        years = re.findall(r'(?:19|20)\d{2}', filename)
        
        if not years:
            return None
            
        # Wenn mehrere Jahre gefunden wurden, prüfe ob sie sich widersprechen
        if len(years) > 1:
            years = [int(y) for y in years]
            # Wenn die Jahre zu weit auseinander liegen, geben wir None zurück
            if max(years) - min(years) > 1:
                logging.warning(f"Mehrere widersprüchliche Jahre im Dateinamen gefunden: {filename}")
                return None
            return max(years)  # Nehme das spätere Jahr
            
        return int(years[0])
    except Exception as e:
        logging.error(f"Fehler beim Extrahieren des Jahres aus {filename}: {str(e)}")
        return None

def convert_docx_to_json_db():
    # Pfade definieren
    script_dir = Path(__file__).parent
    source_dir = script_dir / 'sources'
    output_dir = script_dir / 'output'
    
    # Output-Verzeichnis erstellen
    output_dir.mkdir(parents=True, exist_ok=True)

    # Datenbank-Struktur initialisieren
    database = {
        "metadata": {
            "created": datetime.now().isoformat(),
            "source_files": [],
            "total_paragraphs": 0
        },
        "paragraphs": []
    }

    # Alle .docx Dateien im source_dir finden
    docx_files = list(source_dir.glob('*.docx'))
    
    if not docx_files:
        logging.warning(f"Keine .docx Dateien in {source_dir} gefunden")
        return

    for docx_path in docx_files:
        try:
            logging.info(f"Verarbeite {docx_path.name}...")
            
            # Extrahiere Jahr aus Dateinamen
            publication_year = extract_year_from_filename(docx_path.stem)
            if publication_year:
                logging.info(f"Jahr {publication_year} aus Dateinamen extrahiert")
            
            # Datei-Metadaten speichern
            file_info = {
                "filename": docx_path.name,
                "processed_at": datetime.now().isoformat(),
                "extracted_year": publication_year
            }

            # DOCX zu HTML konvertieren mit Formatierung
            with open(docx_path, 'rb') as docx_file:
                result = mammoth.convert_to_html(docx_file)
                html = result.value
                
                # HTML parsen
                soup = BeautifulSoup(html, 'html.parser')
                paragraphs = soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol'])
                
                # Jeden Absatz verarbeiten
                for idx, p in enumerate(paragraphs, 1):
                    # Leere Absätze überspringen
                    if not p.get_text().strip():
                        continue
                    
                    # Text-URLs in Links umwandeln
                    content_with_links = convert_text_urls_to_links(str(p))
                        
                    # Absatz-Datensatz erstellen
                    paragraph_entry = {
                        "id": f"{docx_path.stem}_{idx}",
                        "source_file": docx_path.name,
                        "source_index": idx,
                        "type": p.name,  # p, h1, ul, etc.
                        "content": content_with_links,  # HTML mit konvertierten Links
                        "text_content": p.get_text(),  # Nur Text für Suche
                        "has_links": bool(p.find_all('a')) or bool(re.search(r'https?:\/\/|www\.', str(p))),
                        "has_emphasis": bool(p.find_all(['em', 'strong', 'i', 'b'])),
                        "publication_year": publication_year
                    }
                    
                    database["paragraphs"].append(paragraph_entry)

            database["metadata"]["source_files"].append(file_info)
            database["metadata"]["total_paragraphs"] = len(database["paragraphs"])
            
            logging.info(f"Erfolgreich verarbeitet: {len(paragraphs)} Absätze in {docx_path.name}")

        except Exception as e:
            logging.error(f"Fehler bei der Verarbeitung von {docx_path.name}: {str(e)}")

    # JSON-Datei speichern
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = output_dir / f'publications_database_{timestamp}.json'
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(database, f, ensure_ascii=False, indent=2)
        logging.info(f"Datenbank erfolgreich gespeichert: {output_file}")
        return output_file
    
    except Exception as e:
        logging.error(f"Fehler beim Speichern der Datenbank: {str(e)}")
        return None

if __name__ == "__main__":
    convert_docx_to_json_db()