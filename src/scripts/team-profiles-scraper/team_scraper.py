import subprocess
import time
import os

def run_script(script_name):
    """Führt ein Python-Script aus und wartet auf dessen Beendigung"""
    script_path = os.path.join('components', script_name)
    print(f"\n🚀 Starting {script_name}...")
    try:
        subprocess.run(['python', script_path], check=True)
        print(f"✅ Successfully completed {script_name}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error running {script_name}: {e}")
        return False

def main():
    # Startzeit für Gesamtdauer
    start_time = time.time()
    
    # Erstelle Verzeichnisse falls sie nicht existieren
    os.makedirs('temporary-storage', exist_ok=True)
    os.makedirs('final-output', exist_ok=True)
    
    # Liste der auszuführenden Scripts in der richtigen Reihenfolge
    scripts = [
        # Team Profile Scraper
        'scraper_profiles_de.py',
        'scraper_profiles_en.py',
        
        # Projekt Scraper
        'scraper_projects_de.py',
        'scraper_projects_en.py',
        
        # Join Tables
        'join_tables_de.py',
        'join_tables_en.py'
    ]
    
    # Überprüfe, ob alle Dateien existieren
    missing_files = [script for script in scripts if not os.path.exists(os.path.join('components', script))]
    if missing_files:
        print("❌ Error: Following script files are missing:")
        for file in missing_files:
            print(f"  - {file}")
        return
    
    # Führe Scripts nacheinander aus
    for script in scripts:
        if not run_script(script):
            print(f"\n❌ Process stopped due to error in {script}")
            return
        # Kleine Pause zwischen den Scripts
        time.sleep(1)
    
    # Überprüfe die Ausgabedateien
    expected_files = [
        os.path.join('final-output', 'team_profiles_with_projects_de.json'),
        os.path.join('final-output', 'team_profiles_with_projects_en.json')
    ]
    
    missing_output = [file for file in expected_files if not os.path.exists(file)]
    if missing_output:
        print("\n⚠️ Warning: Some output files are missing:")
        for file in missing_output:
            print(f"  - {file}")
    else:
        print("\n✨ All output files were created successfully!")
    
    # Gesamtdauer berechnen
    duration = time.time() - start_time
    print(f"\n⏱️ Total execution time: {duration:.2f} seconds")

if __name__ == "__main__":
    print("🤖 Starting Team Profiles Scraper Manager")
    main()