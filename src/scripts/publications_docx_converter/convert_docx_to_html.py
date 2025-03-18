import os
from pathlib import Path
from mammoth import convert_to_html
import logging
from datetime import datetime

# Logging konfigurieren
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def convert_docx_to_html():
    # Pfade relativ zum Skriptverzeichnis definieren
    script_dir = Path(__file__).parent
    source_dir = script_dir / 'sources'
    output_dir = script_dir / 'html'
    
    # Output-Verzeichnis erstellen, falls es nicht existiert
    output_dir.mkdir(parents=True, exist_ok=True)

    # Alle .docx Dateien im source_dir finden
    docx_files = list(source_dir.glob('*.docx'))
    
    if not docx_files:
        logging.warning(f"Keine .docx Dateien in {source_dir} gefunden")
        return

    converted_files = []  # Liste für erfolgreich konvertierte Dateien

    for docx_path in docx_files:
        try:
            # HTML-Ausgabepfad erstellen
            html_path = output_dir / f"{docx_path.stem}.html"
            
            logging.info(f"Konvertiere {docx_path.name} zu HTML...")
            
            # Dokument öffnen und konvertieren
            with open(docx_path, 'rb') as docx_file:
                result = convert_to_html(docx_file)
                html = result.value

            # HTML-Datei speichern
            with open(html_path, 'w', encoding='utf-8') as html_file:
                html_file.write(html)

            converted_files.append(html_path)
            logging.info(f"Erfolgreich konvertiert: {html_path}")

        except Exception as e:
            logging.error(f"Fehler bei der Konvertierung von {docx_path.name}: {str(e)}")

    return converted_files

def merge_html_files(html_files):
    if not html_files:
        logging.warning("Keine HTML-Dateien zum Zusammenführen gefunden")
        return

    # Sortiere die Dateien alphabetisch nach ihrem Namen
    html_files = sorted(html_files, key=lambda x: x.stem.lower())

    script_dir = Path(__file__).parent
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    merged_file = script_dir / f'merged_publications_{timestamp}.html'

    try:
        with open(merged_file, 'w', encoding='utf-8') as outfile:
            # HTML-Header schreiben
            outfile.write('''<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zusammengeführte Publikationen</title>
    <style>
        body { max-width: 800px; margin: 0 auto; padding: 20px; }
        .publication { margin-bottom: 40px; border-bottom: 1px solid #ccc; padding-bottom: 20px; }
        h1 { color: #333; }
    </style>
</head>
<body>
<h1>Zusammengeführte Publikationen</h1>
''')

            # Jede HTML-Datei einlesen und zum Gesamtdokument hinzufügen
            for html_file in html_files:
                with open(html_file, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    # Den Inhalt in einen eigenen Container packen
                    outfile.write(f'<div class="publication">\n')
                    outfile.write(f'<h2>{html_file.stem}</h2>\n')
                    outfile.write(f'{content}\n')
                    outfile.write('</div>\n')

            # HTML-Footer schreiben
            outfile.write('''</body>
</html>''')

        logging.info(f"Dateien erfolgreich zusammengeführt in: {merged_file}")
        return merged_file

    except Exception as e:
        logging.error(f"Fehler beim Zusammenführen der Dateien: {str(e)}")
        return None

def main():
    # Erst alle Dateien konvertieren
    converted_files = convert_docx_to_html()
    
    if converted_files:
        # Dann die konvertierten Dateien zusammenführen
        merged_file = merge_html_files(converted_files)
        if merged_file:
            logging.info("Prozess erfolgreich abgeschlossen!")
        else:
            logging.error("Fehler beim Zusammenführen der Dateien")
    else:
        logging.error("Keine Dateien wurden konvertiert")

if __name__ == "__main__":
    main()