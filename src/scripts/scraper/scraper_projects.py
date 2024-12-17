import requests
from bs4 import BeautifulSoup
import csv
from urllib.parse import urljoin  # Zum Auflösen der relativen URLs

# Basis-URL für die Navigation
base_url = "https://www.museumfuernaturkunde.berlin/de/wissenschaft/navigator"
start_url = base_url + "?query=&f%5B0%5D=&f%5B0%5D=&f%5B0%5D="

# CSV-Datei erstellen
with open('navigator_data2.csv', mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter=';')
    # CSV-Header schreiben
    writer.writerow(['Title', 'Excerpt','Tags', 'Team', 'Projekt-URL'])

 # Funktion zum Extrahieren der Team-Namen von der Team-Seite
    def get_team_names():
        team_url = "https://www.museumfuernaturkunde.berlin/de/ueber-uns/team"
        response = requests.get(team_url)
        soup = BeautifulSoup(response.content, 'html.parser')
        print(f"we have team names {soup}")
        # Alle Personennamen von der Team-Seite extrahieren
        team_names = [name.get_text(strip=True) for name in soup.select('.staff-listing__name')]
        print(f"we have team names {team_names}")
        return team_names

    # Funktion zum Überprüfen und Hinzufügen von Team-Mitgliedern
    def add_team_members(detail_soup, team_names, team_members):
        # Text aus der Sidebar extrahieren
        sidebar_element = detail_soup.select_one('.mfn-field__sidebar')
    
        if sidebar_element:
            sidebar_text = sidebar_element.get_text(strip=True)
            
            # Vergleich der Team-Namen mit dem Text in der Sidebar
            for name in team_names:
                print(f" we check {name}")
                if name in sidebar_text and name not in team_members:
                    print(f" we append {name}")
                    team_members.append(name)
        else:
            print("Keine Sidebar gefunden, weiter zur nächsten Seite")  # Debugging-Ausgabe

    # Team-Namen von der Team-Seite abrufen
    team_names = get_team_names()

    # Pagination und Daten-Scraping
    current_url = start_url

    while current_url:
        print(f"Scraping: {current_url}")  # Debugging-Ausgabe zur Überprüfung der aktuellen URL
        response = requests.get(current_url)
        soup = BeautifulSoup(response.content, 'html.parser')

        # Alle .teaser Elemente in .item-list finden
        teaser_elements = soup.select('.item-list .teaser')

        for teaser in teaser_elements:
            # Tags aus .teaser__date, kommasepariert
            tags = ', '.join([tag.text.strip() for tag in teaser.select('.teaser__date span')])
            
            # Title aus .teaser__title
            title_element = teaser.select_one('.teaser__title')
            title = title_element.text.strip() if title_element else ''

            print(f"{title}")
            
            # Excerpt aus .teaser__text
            excerpt_element = teaser.select_one('.teaser__text')
            excerpt = excerpt_element.text.strip() if excerpt_element else ''

            # Öffnen des Detailbereichs und Team-Namen sammeln
            detail_link = teaser.select_one('a')['href']
            detail_url = urljoin(base_url, detail_link)  # Absolute URL erstellen
            detail_response = requests.get(detail_url)
            detail_soup = BeautifulSoup(detail_response.content, 'html.parser')
            
            # Team-Namen, die mit Links auf die Teamseite verweisen, kommasepariert
            team_members = []

            for team_link in detail_soup.select('a[href^="https://www.museumfuernaturkunde.berlin/en/about/team/"], a[href^="https://www.museumfuernaturkunde.berlin/de/ueber-uns/team/"], a[href^="/de/ueber-uns/team/"],  a[href^="/en/about/team/"]'):
                team_members.append(team_link.text.strip())

            add_team_members(detail_soup, team_names, team_members)

            team = ', '.join(team_members)

            # Daten in die CSV schreiben, inklusive der Projekt-URL
            writer.writerow([title, excerpt, tags, team, detail_url])

        # Pagination überprüfen und zur nächsten Seite wechseln
        next_page_link = soup.select_one('.pager__item.pager__item--next a')
        if next_page_link and 'href' in next_page_link.attrs:
            print(f"Next page found: {next_page_link['href']}")  # Debugging-Ausgabe zur Überprüfung des gefundenen Links
            current_url = urljoin(base_url, next_page_link['href'])  # Relative URL in absolute URL umwandeln
        else:
            print("No more pages found.")
            current_url = None  # Stoppt die Schleife, wenn keine weitere Seite vorhanden ist