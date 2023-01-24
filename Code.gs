function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function getData() {
  var spreadSheetId = "1Dab-MhUdU0ZXvMOJiD9sNBoj52sU8OQ2LNi4BEyYzMs"; //CHANGE
  var dataRange = "TADABBUR2!B2:E"; //CHANGE

  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;

  return values;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
