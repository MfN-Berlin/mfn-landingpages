import requests
from bs4 import BeautifulSoup
import csv
import os

# Base URL
base_url = "https://www.museumfuernaturkunde.berlin"

# Team page URL
team_url = base_url + "/en/about/team"

# HTTP request to team page
response = requests.get(team_url)
soup = BeautifulSoup(response.content, 'html.parser')

# Path to CSV file relative to script directory
output_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'temporary-storage', 'team_profiles_en.csv')

# Create CSV file
with open(output_file, mode='w', newline='', encoding='utf-8') as file:
    # Use semicolon as separator
    writer = csv.writer(file, delimiter=';')
    
    # Fixed column headers with URL
    writer.writerow(['Title', 'Email', 'Phone', 'Role', 'Projects', 'URL'])
    
    # Find the .staff--listing element
    staff_listing = soup.select_one('.staff--listing')
    
    # Collect all <a> tags within .staff--listing
    if staff_listing:
        profiles = staff_listing.find_all('a')
    else:
        print("Element '.staff--listing' not found.")
        profiles = []

    # Keywords for "Role" and "Projects" categories
    role_keywords = ['Tasks', 'Main responsibilities', 'Areas of responsibility', 'Role', 'Roles', 
                    'Responsibilities', 'Area of responsibility', 'Task areas', 'Main tasks', 'task', 'role', 'roles']
    project_keywords = ['Research', 'Projects', 'Current projects', 'Research focus', 'Research interests', 
                       'Research areas', 'Research fields', 'Research topics', 'Research projects', 
                       'Current research topics', 'Project', 'Working group']
    
    for profile in profiles:
        profile_url = base_url + profile['href']
        
        print(f"Scraping profile: {profile_url}")  # Debug output
        
        # HTTP request to profile
        profile_response = requests.get(profile_url)
        profile_soup = BeautifulSoup(profile_response.content, 'html.parser')
        
        # Extract title
        title_element = profile_soup.select_one('#block-mfn-page-title')
        title = title_element.text.strip() if title_element else 'No title'
        
        # Extract email
        email_element = profile_soup.select_one('.staff-details__mail .staff-details__value a')
        email = email_element.text.strip() if email_element else ''
        
        # Extract phone
        phone_element = profile_soup.select_one('.staff-details__telefon .staff-details__value a')
        phone = phone_element.text.strip() if phone_element else ''
        
        # Collect "Role" and "Projects" content
        role = []
        projects = []

        # Find all h2 and h3 tags within the profile
        for headline in profile_soup.find_all(['h2', 'h3']):
            headline_text = headline.text.strip()
            content = []

            sibling = headline.find_next_sibling()
            
            while sibling and sibling.name not in ['h2', 'h3']:
                if sibling.text.strip():
                    # Handle lists
                    if sibling.name == 'ul':
                        # Collect all list items and join them with commas
                        list_items = [li.text.strip() for li in sibling.find_all('li')]
                        content.append(', '.join(list_items))
                    else:
                        # Remove paragraph marks and semicolons
                        cleaned_text = sibling.text.replace('\n', ' ').replace(';', ',').strip()
                        content.append(cleaned_text)
                sibling = sibling.find_next_sibling()

            # Assignment to "Role" or "Projects" based on keywords
            if any(keyword.lower() in headline_text.lower() for keyword in role_keywords):
                role.append(' '.join(content))
            elif any(keyword.lower() in headline_text.lower() for keyword in project_keywords):
                projects.append(' '.join(content))
        
        # Save the collected data as a row, now with URL
        profile_data = [title, email, phone, '; '.join(role), '; '.join(projects), profile_url]
        writer.writerow(profile_data)