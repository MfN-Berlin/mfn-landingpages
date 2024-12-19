import pandas as pd
import json

def clean_text(text):
    if pd.isna(text):
        return None
    return str(text).strip()

def clean_tags(tags):
    if pd.isna(tags):
        return []
    if isinstance(tags, str):
        return [tag.strip() for tag in tags.split(',') if tag.strip()]
    return []

def clean_project(project):
    """Bereinigt ein einzelnes Projekt"""
    clean_proj = {
        "title": clean_text(project['Title']),
        "url": clean_text(project['Projekt-URL']),
        "excerpt": clean_text(project['Excerpt']),
        "tags": clean_tags(project['Tags'])
    }
    # Entferne None-Werte
    return {k: v for k, v in clean_proj.items() if v is not None}

def clean_team_member(member_data):
    """Bereinigt einen einzelnen Team-Eintrag"""
    clean_member = {
        "email": clean_text(member_data['Email']),
        "phone": clean_text(member_data['Telefon']),
        "role": clean_text(member_data['Rolle']),
        "profile_projects": clean_text(member_data['Projekte']),
        "url": clean_text(member_data['URL']),
        "navigator_projects": []
    }
    # Entferne None-Werte, aber behalte leere Arrays
    return {k: v for k, v in clean_member.items() if v is not None or k == 'navigator_projects'}

def main():
    # Dateien einlesen
    team_profiles_df = pd.read_csv('team_profiles_de.csv', delimiter=';')
    navigator_data_df = pd.read_csv('navigator_data2_de.csv', delimiter=';')

    # Dictionary für die JSON-Struktur erstellen
    team_data = {}

    # Für jeden Eintrag in team_profiles_df die passenden Projekte aus navigator_data_df finden
    for index, row in team_profiles_df.iterrows():
        name = clean_text(row['Titel'])
        if not name:  # Überspringe Einträge ohne Namen
            continue
        
        # Erstelle bereinigten Team-Eintrag
        team_data[name] = clean_team_member(row)
        
        # Finde und bereinige zugehörige Projekte
        matching_projects = navigator_data_df[navigator_data_df['Team'].str.contains(name, na=False, case=False)]
        projects = []
        
        for _, project in matching_projects.iterrows():
            clean_proj = clean_project(project)
            # Nur Projekte mit Titel und URL hinzufügen
            if 'title' in clean_proj and 'url' in clean_proj:
                projects.append(clean_proj)
        
        team_data[name]['navigator_projects'] = projects

    # Validiere die Struktur
    for name, member in team_data.items():
        # Stelle sicher, dass navigator_projects immer ein Array ist
        if not isinstance(member.get('navigator_projects'), list):
            member['navigator_projects'] = []
        
        # Stelle sicher, dass jedes Projekt valide Tags hat
        for project in member['navigator_projects']:
            if not isinstance(project.get('tags'), list):
                project['tags'] = []

    # Als JSON speichern
    output_file = 'team_profiles_with_projects_de.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(team_data, f, ensure_ascii=False, indent=2)
    
    print(f"Datei '{output_file}' wurde erfolgreich erstellt und bereinigt.")

if __name__ == "__main__":
    main()