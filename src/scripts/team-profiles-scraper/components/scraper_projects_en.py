import requests
from bs4 import BeautifulSoup
import csv
import os
from urllib.parse import urljoin  # For resolving relative URLs

# Base URL for navigation
base_url = "https://www.museumfuernaturkunde.berlin/en/science/navigator"
start_url = base_url + "?query=&f%5B0%5D=&f%5B0%5D=&f%5B0%5D="

# Path to CSV file relative to script directory
output_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'temporary-storage', 'navigator_data_en.csv')

# Create CSV file
with open(output_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter=';')
    # Write CSV header
    writer.writerow(['Title', 'Excerpt', 'Tags', 'Team', 'Project-URL'])

    # Function to extract team names from team page
    def get_team_names():
        team_url = "https://www.museumfuernaturkunde.berlin/en/about/team"
        response = requests.get(team_url)
        soup = BeautifulSoup(response.content, 'html.parser')
        print(f"Getting team names from {team_url}")
        # Extract all person names from team page
        team_names = [name.get_text(strip=True) for name in soup.select('.staff-listing__name')]
        print(f"Found {len(team_names)} team members")
        return team_names

    # Function to check and add team members
    def add_team_members(detail_soup, team_names, team_members):
        # Extract text from sidebar
        sidebar_element = detail_soup.select_one('.mfn-field__sidebar')
    
        if sidebar_element:
            sidebar_text = sidebar_element.get_text(strip=True)
            
            # Compare team names with sidebar text
            for name in team_names:
                print(f"Checking for team member: {name}")
                if name in sidebar_text and name not in team_members:
                    print(f"Found team member: {name}")
                    team_members.append(name)
        else:
            print("No sidebar found, continuing to next page")

    # Get team names from team page
    team_names = get_team_names()

    # Pagination and data scraping
    current_url = start_url

    while current_url:
        print(f"Scraping: {current_url}")
        response = requests.get(current_url)
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find all .teaser elements in .item-list
        teaser_elements = soup.select('.item-list .teaser')

        for teaser in teaser_elements:
            # Tags from .teaser__date, comma-separated
            tags = ', '.join([tag.text.strip() for tag in teaser.select('.teaser__date span')])
            
            # Title from .teaser__title
            title_element = teaser.select_one('.teaser__title')
            title = title_element.text.strip() if title_element else ''

            print(f"Processing project: {title}")
            
            # Excerpt from .teaser__text
            excerpt_element = teaser.select_one('.teaser__text')
            excerpt = excerpt_element.text.strip() if excerpt_element else ''

            # Open detail area and collect team names
            detail_link = teaser.select_one('a')['href']
            detail_url = urljoin(base_url, detail_link)
            detail_response = requests.get(detail_url)
            detail_soup = BeautifulSoup(detail_response.content, 'html.parser')
            
            # Team names with links to team page, comma-separated
            team_members = []

            for team_link in detail_soup.select('a[href^="https://www.museumfuernaturkunde.berlin/en/about/team/"], a[href^="https://www.museumfuernaturkunde.berlin/de/ueber-uns/team/"], a[href^="/de/ueber-uns/team/"], a[href^="/en/about/team/"]'):
                team_members.append(team_link.text.strip())

            add_team_members(detail_soup, team_names, team_members)

            team = ', '.join(team_members)

            # Write data to CSV, including project URL
            writer.writerow([title, excerpt, tags, team, detail_url])

        # Check pagination and move to next page
        next_page_link = soup.select_one('.pager__item.pager__item--next a')
        if next_page_link and 'href' in next_page_link.attrs:
            print(f"Next page found: {next_page_link['href']}")
            current_url = urljoin(base_url, next_page_link['href'])
        else:
            print("No more pages found.")
            current_url = None