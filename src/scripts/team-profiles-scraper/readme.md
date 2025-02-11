# Team Profiles Scraper

This script collects information about team members and their projects from the MfN website.

## Directory Structure

team-profiles-scraper/
├── components/                    # Individual scraper components
│   ├── scraper_profiles_de.py    # Scraper for German team profiles
│   ├── scraper_profiles_en.py    # Scraper for English team profiles
│   ├── scraper_projects_de.py    # Scraper for German projects
│   ├── scraper_projects_en.py    # Scraper for English projects
│   ├── join_tables_de.py         # Links German profiles with projects
│   └── join_tables_en.py         # Links English profiles with projects
├── temporary-storage/            # Temporary CSV files
├── final-output/                # Final JSON files
├── team_scraper.py             # Main script
└── README.md                   # This file

## How it Works

The script performs the following steps:

1. Creates necessary directories (`temporary-storage/` and `final-output/`)
2. Collects team profiles (DE/EN)
3. Collects project data (DE/EN)
4. Links the data and creates JSON files

## Usage

Run the main script:

    `python team_scraper.py`

Copy the resulting json files from `/output` to `/src/data` to implement them.

## Output

The script creates:

1. Temporary CSV files in `temporary-storage/`:

   - `team_profiles_de.csv`
   - `team_profiles_en.csv`
   - `navigator_data2_de.csv`
   - `navigator_data_en.csv`
2. Final JSON files in `final-output/`:

   - `team_profiles_with_projects_de.json`
   - `team_profiles_with_projects_en.json`

## Error Handling

- The script checks for all necessary components before execution
- If an error occurs in any component, the process stops
- Error messages are displayed in the terminal

## Debugging

Each component outputs status messages:

- Which profiles/projects are currently being scraped
- Found team members
- Page changes during pagination

## Maintenance

When the website structure changes, the following elements may need to be adjusted:

- CSS selectors in the scraper components
- Keywords for roles and projects
- URL structures

## Dependencies

- Python 3.x
- requests
- beautifulsoup4
- pandas

## Installing Dependencies

```
    pip install requests beautifulsoup4 pandas
```
