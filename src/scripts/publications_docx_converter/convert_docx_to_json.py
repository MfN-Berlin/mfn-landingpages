import os
from pathlib import Path
import json
from docx import Document
from bs4 import BeautifulSoup
import mammoth
import logging
from datetime import datetime

# Logging konfigurieren
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

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
            
            # Datei-Metadaten speichern
            file_info = {
                "filename": docx_path.name,
                "processed_at": datetime.now().isoformat()
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
                        
                    # Absatz-Datensatz erstellen
                    paragraph_entry = {
                        "id": f"{docx_path.stem}_{idx}",
                        "source_file": docx_path.name,
                        "source_index": idx,
                        "type": p.name,  # p, h1, ul, etc.
                        "content": str(p),  # Original HTML
                        "text_content": p.get_text(),  # Nur Text für Suche
                        "has_links": bool(p.find_all('a')),
                        "has_emphasis": bool(p.find_all(['em', 'strong', 'i', 'b'])),
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