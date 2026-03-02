/**
 * Barriers & Access – Web App
 * Deploy as: Execute as Me, Who has access: Anyone
 */
function doPost(e) {
  var SPREADSHEET_ID = '1Kx8JjcqB58foo661h1u-gAyoSK4HnOSb10oLIjGlc3o';
  var DATA_SHEET_NAME = 'DataCollectionPage1';
  var FREQ_SHEET_NAME = 'FrequencyData';
  var LOC_SHEET_NAME = 'LocationData';

  if (!e || !e.parameter) {
    return ContentService.createTextOutput('Error: No form data.');
  }

  var p = e.parameter;

  // Common fields
  var university = p.University != null ? String(p.University) : '';
  var response = p.Response != null ? String(p.Response) : '';
  var returnUrl = (p.ReturnUrl && String(p.ReturnUrl).indexOf('http') === 0) ? String(p.ReturnUrl) : '';
  var collection = p.Collection || 'DataCollection'; // DataCollection, FrequencyCollection, LocationCollection

  // Backwards/defensive routing: if Collection is missing but Type/fields indicate
  // a specific admin flow, override the default.
  if (!p.Collection) {
    if (p.Type === 'barriers-frequency' || typeof p.Frequency !== 'undefined') {
      collection = 'FrequencyCollection';
    } else if (typeof p.Location !== 'undefined') {
      collection = 'LocationCollection';
    }
  }

  if (Array.isArray(university)) university = university[0] || '';
  if (Array.isArray(response)) response = response[0] || '';

  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

    // 1) MAIN PARTICIPANT DATA (existing behavior)
    if (collection === 'DataCollection') {
      var dataSheet = spreadsheet.getSheetByName(DATA_SHEET_NAME);
      if (!dataSheet) {
        return ContentService.createTextOutput('Error: Sheet "' + DATA_SHEET_NAME + '" not found.');
      }

      dataSheet.appendRow([university, response, new Date()]);

      if (returnUrl) {
        var html =
          '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
          '<meta http-equiv="refresh" content="2;url=' + returnUrl + '"></head>' +
          '<body style="font-family:sans-serif;margin:2rem auto;max-width:480px;padding:1rem;">' +
          '<p>Thank you. Your response has been recorded.</p>' +
          '<p>Redirecting you back…</p>' +
          '<p><a href="' + returnUrl + '">Return to survey</a></p>' +
          '</body></html>';
        return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
      }

      return ContentService.createTextOutput(
        'Form submission was successful. Thank you. We will get back to you within 24 hours.'
      );
    }

    // 2) ADMIN FREQUENCY COLLECTION
    if (collection === 'FrequencyCollection') {
      // Allow either Institution or University to be used for the first column
      var institution = p.Institution != null ? String(p.Institution) : university;
      var freq = p.Frequency != null ? String(p.Frequency) : '';

      if (Array.isArray(institution)) institution = institution[0] || '';
      if (Array.isArray(freq)) freq = freq[0] || '';

      var freqSheet = spreadsheet.getSheetByName(FREQ_SHEET_NAME);
      if (!freqSheet) {
        freqSheet = spreadsheet.insertSheet(FREQ_SHEET_NAME);
        freqSheet.appendRow(['Institution', 'Response', 'Frequency', 'Date']);
      }

      freqSheet.appendRow([institution, response, freq, new Date()]);
      return ContentService.createTextOutput('Saved frequency.');
    }

    // 3) ADMIN LOCATION COLLECTION
    if (collection === 'LocationCollection') {
      var location = p.Location != null ? String(p.Location) : '';
      var notes = p.Notes != null ? String(p.Notes) : '';

      if (Array.isArray(location)) location = location[0] || '';
      if (Array.isArray(notes)) notes = notes[0] || '';

      var locSheet = spreadsheet.getSheetByName(LOC_SHEET_NAME);
      if (!locSheet) {
        locSheet = spreadsheet.insertSheet(LOC_SHEET_NAME);
        locSheet.appendRow(['Location', 'Notes', 'Date']);
      }

      locSheet.appendRow([location, notes, new Date()]);
      return ContentService.createTextOutput('Saved location.');
    }

    // Fallback: if Collection is unknown, treat as main data collection for compatibility
    var fallbackSheet = spreadsheet.getSheetByName(DATA_SHEET_NAME);
    if (!fallbackSheet) {
      return ContentService.createTextOutput('Error: Sheet "' + DATA_SHEET_NAME + '" not found.');
    }
    fallbackSheet.appendRow([university, response, new Date()]);
    return ContentService.createTextOutput('Saved (default collection).');
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + (err.message || String(err)));
  }
}

function doGet() {
  return ContentService.createTextOutput('Use the survey page to submit. This URL is for form POST only.');
}