/**
 * Barriers & Access – Web App
 * Deploy as: Execute as Me, Who has access: Anyone
 */
function doPost(e) {
  var SPREADSHEET_ID = '1Kx8JjcqB58foo661h1u-gAyoSK4HnOSb10oLIjGlc3o';
  var sheetName = 'DataCollectionPage1';

  if (!e || !e.parameter) {
    return ContentService.createTextOutput('Error: No form data.');
  }

  var p = e.parameter;
  var university = p.University != null ? String(p.University) : '';
  var response = p.Response != null ? String(p.Response) : '';
  var returnUrl = (p.ReturnUrl && String(p.ReturnUrl).indexOf('http') === 0) ? String(p.ReturnUrl) : '';

  if (Array.isArray(university)) university = university[0] || '';
  if (Array.isArray(response)) response = response[0] || '';

  try {
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput('Error: Sheet "' + sheetName + '" not found.');
    }

    sheet.appendRow([university, response, new Date()]);

    if (returnUrl) {
      var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="2;url=' + returnUrl + '"></head><body style="font-family:sans-serif;margin:2rem auto;max-width:480px;padding:1rem;"><p>Thank you. Your response has been recorded.</p><p>Redirecting you back…</p><p><a href="' + returnUrl + '">Return to survey</a></p></body></html>';
      return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
    }

    return ContentService.createTextOutput('Form submission was successful. Thank you. We will get back to you within 24 hours.');
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + (err.message || String(err)));
  }
}

function doGet() {
  return ContentService.createTextOutput('Use the survey page to submit. This URL is for form POST only.');
}
