import os
import re
import requests
import shutil
from datetime import datetime, timedelta
from dotenv import load_dotenv

# Load credentials
load_dotenv()
API_KEY = os.getenv("TRELLO_API_KEY")
TOKEN = os.getenv("TRELLO_TOKEN")
LIST_ID = os.getenv("TRELLO_LIST_ID")

# --- CUSTOM SORTING CONFIGURATION ---
# Lower number = Higher priority.
PART_ORDER = {
    "main": 1,
    "jdr": 2,
    "zzz": 3,
}

TYPE_ORDER = {
    "FEATURE": 1,
    "IMPROVEMENT": 2,
    "BUG": 3
}

# Paths
PUBLIC_DIR = "public/patchnotes"
PREVIOUS_DIR = "public/patchnotes/previous"

def get_closest_friday():
    today = datetime.now()
    days_to_friday = (4 - today.weekday())
    if today.weekday() > 4:
        closest_friday = today - timedelta(days=(today.weekday() - 4))
    else:
        closest_friday = today + timedelta(days=days_to_friday)
    return closest_friday.strftime("%Y%m%d")

def fetch_cards():
    url = f"https://api.trello.com/1/lists/{LIST_ID}/cards"
    query = {'key': API_KEY, 'token': TOKEN}
    return requests.get(url, params=query).json()

def to_past_tense(text):
    # Dictionary of common dev verbs
    # Format: "Current": "Past"
    lexicon = {
        "Add": "Added",
        "Change": "Changed",
        "Fix": "Fixed",
        "Remove": "Removed",
        "Update": "Updated",
        "Lock": "Locked",
        "Make": "Made",
        "Clear": "Cleared",
        "Improve": "Improved",
        "Optimize": "Optimized",
        "Create": "Created",
        "Refactor": "Refactored",
        "Adjust": "Adjusted"
    }
    
    words = text.split()
    if not words:
        return text
    
    first_word = words[0]
    # Check for exact match (case-insensitive)
    for current, past in lexicon.items():
        if first_word.lower() == current.lower():
            # Preserves the rest of the sentence
            return past + " " + " ".join(words[1:])
            
    return text

def generate_markdown_block(sections):
    block = ""
    # Sort Parts based on PART_ORDER
    sorted_parts = sorted(sections.keys(), key=lambda x: PART_ORDER.get(x.lower(), 99))
    
    for part in sorted_parts:
        block += f"## {part.capitalize()}\n"
        
        # Sort Types based on TYPE_ORDER
        types_in_part = sections[part]
        sorted_types = sorted(types_in_part.keys(), key=lambda x: TYPE_ORDER.get(x.upper(), 99))
        
        for ntype in sorted_types:
            block += f"### {ntype.capitalize()}s:\n"
            for item in types_in_part[ntype]:
                block += f"{item}\n"
        block += "\n"
    return block

def run():
    # Folder Creation
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(PREVIOUS_DIR, exist_ok=True)

    cards = fetch_cards()
    if not cards:
        print("No cards found.")
        return

    release_date = get_closest_friday()
    file_path = os.path.join(PUBLIC_DIR, f"{release_date}.md")
    
    # Nested Grouping: Part -> Type -> List of strings
    data = {}
    for card in cards:
        match = re.match(r"\[(.*?)\]\s-\s(\w+)\s(.*)", card['name'])
        if match:
            part, ntype, raw_name = match.groups()
        
            name = to_past_tense(raw_name)
        
            ntype = ntype.upper()
            
            if part not in data: data[part] = {}
            if ntype not in data[part]: data[part][ntype] = []
            
            entry = f"* {name}"
            if card['desc']:
                entry += f"\n  > {card['desc']}"
            data[part][ntype].append(entry)

    new_content = generate_markdown_block(data)

    if os.path.exists(file_path):
        print("Appending hotfix...")
        with open(file_path, "a", encoding="utf-8") as f:
            f.write(f"\n---\n## 🛠 Hotfix Update ({datetime.now().strftime('%H:%M')})\n" + new_content)
    else:
        print("Creating fresh note...")
        # Move old notes
        for f_name in os.listdir(PUBLIC_DIR):
            if f_name.endswith(".md"):
                shutil.move(os.path.join(PUBLIC_DIR, f_name), os.path.join(PREVIOUS_DIR, f_name))
        
        header = f"# 🗒 Patch Notes: {release_date}\n\n"
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(header + new_content)

    print("Success!")

if __name__ == "__main__":
    run()