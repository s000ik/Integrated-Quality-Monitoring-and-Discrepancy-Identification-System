import gspread
from oauth2client.service_account import ServiceAccountCredentials
import csv

def upload_to_google_sheets(csv_file, sheet_name):
    # Define the scope
    scope = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']

    # Add your JSON key file
    creds = ServiceAccountCredentials.from_json_keyfile_name('sihmadastra-d0f14c3087c1.json', scope)

    # Authorize with gspread
    client = gspread.authorize(creds)

    # Open the sheet, if it doesn't exist, create one
    try:
        sheet = client.open(sheet_name).sheet1
    except gspread.SpreadsheetNotFound:
        sheet = client.create(sheet_name).sheet1

    # Clear existing data in the sheet
    sheet.clear()

    # Read CSV file
    with open(csv_file, 'r') as file_obj:
        reader = csv.reader(file_obj)
        data = list(reader)

    # Update sheet with new data
    sheet.update('A1', data)

    # New code to read back the values and verify
    updated_data = sheet.get_all_values()
    if updated_data == data:
        print("Update successful")
    else:
        print("Update failed")

# Example usage
upload_to_google_sheets(r'/Users/mohitverma/Desktop/projects/SIH23/MLmodel/Data for Power BI updated.csv', 'lookerstudio')