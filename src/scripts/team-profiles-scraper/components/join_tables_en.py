import pandas as pd
import json
import os

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
    """Cleans a single project"""
    clean_proj = {
        "title": clean_text(project['Title']),
        "url": clean_text(project['Project-URL']),
        "excerpt": clean_text(project['Excerpt']),
        "tags": clean_tags(project['Tags'])
    }
    # Remove None values
    return {k: v for k, v in clean_proj.items() if v is not None}

def clean_team_member(member_data):
    """Cleans a single team member entry"""
    clean_member = {
        "email": clean_text(member_data['Email']),
        "phone": clean_text(member_data['Phone']),
        "role": clean_text(member_data['Role']),
        "profile_projects": clean_text(member_data['Projects']),
        "url": clean_text(member_data['URL']),
        "navigator_projects": []
    }
    # Remove None values but keep empty arrays
    return {k: v for k, v in clean_member.items() if v is not None or k == 'navigator_projects'}

def main():
    script_dir = os.path.dirname(os.path.dirname(__file__))
    
    # Read files
    team_profiles_df = pd.read_csv(os.path.join(script_dir, 'temporary-storage', 'team_profiles_en.csv'), delimiter=';')
    navigator_data_df = pd.read_csv(os.path.join(script_dir, 'temporary-storage', 'navigator_data_en.csv'), delimiter=';')

    # Create dictionary for JSON structure
    team_data = {}

    # For each entry in team_profiles_df find matching projects from navigator_data_df
    for index, row in team_profiles_df.iterrows():
        name = clean_text(row['Title'])
        if not name:  # Skip entries without name
            continue
        
        # Create cleaned team entry
        team_data[name] = clean_team_member(row)
        
        # Find and clean matching projects
        matching_projects = navigator_data_df[navigator_data_df['Team'].str.contains(name, na=False, case=False)]
        projects = []
        
        for _, project in matching_projects.iterrows():
            clean_proj = clean_project(project)
            # Only add projects with title and URL
            if 'title' in clean_proj and 'url' in clean_proj:
                projects.append(clean_proj)
        
        team_data[name]['navigator_projects'] = projects

    # Validate the structure
    for name, member in team_data.items():
        # Ensure navigator_projects is always an array
        if not isinstance(member.get('navigator_projects'), list):
            member['navigator_projects'] = []
        
        # Ensure each project has valid tags
        for project in member['navigator_projects']:
            if not isinstance(project.get('tags'), list):
                project['tags'] = []

    # Save as JSON
    output_file = os.path.join(script_dir, 'final-output', 'team_profiles_with_projects_en.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(team_data, f, ensure_ascii=False, indent=2)
    
    print(f"File '{output_file}' has been created and cleaned successfully.")

if __name__ == "__main__":
    main()