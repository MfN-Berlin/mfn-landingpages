# MfN Web Scraper

Dieses Projekt enthält Skripte zum Scrapen und Verarbeiten von Daten von der Website des Museums für Naturkunde Berlin. Es besteht aus drei Hauptkomponenten, die nacheinander ausgeführt werden, um Mitarbeiterprofile mit ihren zugehörigen Projekten zu verknüpfen.

## Workflow

1. **Scrapen der Mitarbeiterprofile** (`scraper_profiles.py`)
   - Scrapet alle Profile von der Teamseite
   - Speichert die Daten in `team_profiles.csv`
   - Extrahierte Informationen pro Profil:
     - Titel (Name)
     - Email
     - Telefon
     - Rolle/Aufgaben
     - Projekte (aus den Profilen)

2. **Scrapen der Projektdaten** (`scraper_projects.py`)
   - Scrapet alle Projekte aus dem Wissenschafts-Navigator
   - Speichert die Daten in `navigator_data2.csv`
   - Extrahierte Informationen pro Projekt:
     - Titel
     - Excerpt (Kurzbeschreibung)
     - Tags
     - Team (beteiligte Personen)
     - Projekt-URL

3. **Verknüpfung der Daten** (`join_tables.py`)
   - Verbindet die Informationen aus beiden CSV-Dateien
   - Fügt jedem Mitarbeiterprofil die zugehörigen Projekte hinzu
   - Erstellt `team_profiles_with_projects.json` mit allen verknüpften Daten
   - Strukturierte JSON-Ausgabe mit detaillierten Projekt-Informationen

## Ausführung

Führen Sie die Skripte in dieser Reihenfolge aus:

bash
python scraper_profiles.py
python scraper_projects.py
python join_tables.py


## Dateien im Workflow

### Input
- Keine initialen Dateien erforderlich

### Zwischendateien
- `team_profiles.csv`: Enthält die Mitarbeiterprofile
- `navigator_data2.csv`: Enthält die Projektdaten

### Output
- `team_profiles_with_projects.json`: Finales Dokument mit allen verknüpften Informationen

## Datenstruktur

### team_profiles.csv
- Delimiter: `;`
- Spalten: 
  - Titel (Name der Person)
  - Email
  - Telefon
  - Rolle
  - Projekte (aus den Profilen)

### navigator_data2.csv
- Delimiter: `;`
- Spalten:
  - Title (Projektname)
  - Excerpt
  - Tags
  - Team
  - Projekt-URL

### team_profiles_with_projects.json
- Enthält alle Spalten aus team_profiles.csv
- Zusätzliche Spalte "scraped projects" mit verlinkten Projekten im Format:
  `"Projektname 1" [URL1], "Projektname 2" [URL2], ...`

## Abhängigkeiten
