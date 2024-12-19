import requests
from bs4 import BeautifulSoup
import csv

# Basis-URL
base_url = "https://www.museumfuernaturkunde.berlin"

# URL der Teamseite
team_url = base_url + "/de/ueber-uns/team"

# HTTP-Request an die Teamseite
response = requests.get(team_url)
soup = BeautifulSoup(response.content, 'html.parser')

# CSV-Datei erstellen
with open('team_profiles_de.csv', mode='w', newline='', encoding='utf-8') as file:
    # Verwende Semikolon als Separator
    writer = csv.writer(file, delimiter=';')
    
    # Feste Spaltenüberschriften mit URL
    writer.writerow(['Titel', 'Email', 'Telefon', 'Rolle', 'Projekte', 'URL'])
    
    # Das Element .staff--listing finden
    staff_listing = soup.select_one('.staff--listing')
    
    # Alle <a>-Tags innerhalb von .staff--listing sammeln
    if staff_listing:
        profiles = staff_listing.find_all('a')
    else:
        print("Element '.staff--listing' nicht gefunden.")
        profiles = []

    # Keywords für die Kategorien "Rolle" und "Projekte"
    rolle_keywords = ['Aufgaben', 'Aufgabengebiete', 'Aufgabenbereiche', 'Main responsibilities', 'Aufgbengebiete', 
                      'Areas of responsibility', 'Aufgabenbereiche:', 'Aufgabenbereich', 'Aufgabengebiet', 'Tasks']
    projekte_keywords = ['Forschung', 'Projects', 'Forschungsschwerpunkte', 'Projekte', 'Abgeschlossene Projekte', 'Projekt', 
                         'Projekte (Auswahl)', 'Aktuelle Forschungsthemen', 'Forschungsinteresse', 'Angeschlossene Projekte', 
                         'Arbeitsgruppe', 'Research', 'Task', 'Forschungsfelder', 'Forschungsinteressen', 'Aktuelle Projekte', 'Forschungsprojekte']
    
    for profile in profiles:
        profile_url = base_url + profile['href']
        
        print(f"Scraping Profil: {profile_url}")  # Debugging-Ausgabe
        
        # HTTP-Request an das Profil
        profile_response = requests.get(profile_url)
        profile_soup = BeautifulSoup(profile_response.content, 'html.parser')
        
        # Titel extrahieren
        title_element = profile_soup.select_one('#block-mfn-page-title')
        title = title_element.text.strip() if title_element else 'Kein Titel'
        
        # E-Mail extrahieren
        email_element = profile_soup.select_one('.staff-details__mail .staff-details__value a')
        email = email_element.text.strip() if email_element else ''
        
        # Telefon extrahieren
        phone_element = profile_soup.select_one('.staff-details__telefon .staff-details__value a')
        phone = phone_element.text.strip() if phone_element else ''
        
        # "Rolle" und "Projekte" Inhalte sammeln
        rolle = []
        projekte = []

        # Alle h2 und h3-Tags innerhalb des Profils finden
        for headline in profile_soup.find_all(['h2', 'h3']):
            headline_text = headline.text.strip()
            content = []

            sibling = headline.find_next_sibling()
            
            while sibling and sibling.name not in ['h2', 'h3']:
                if sibling.text.strip():
                    # Absatzzeichen und Semikolons entfernen
                    cleaned_text = sibling.text.replace('\n', ' ').replace(';', ',').strip()
                    content.append(cleaned_text)
                sibling = sibling.find_next_sibling()

            # Zuordnung zu "Rolle" oder "Projekte" basierend auf den Schlüsselwörtern
            if any(keyword in headline_text for keyword in rolle_keywords):
                rolle.append(' '.join(content))
            elif any(keyword in headline_text for keyword in projekte_keywords):
                projekte.append(' '.join(content))
        
        # Die gesammelten Daten als Zeile speichern, jetzt mit URL
        profile_data = [title, email, phone, '; '.join(rolle), '; '.join(projekte), profile_url]
        writer.writerow(profile_data)