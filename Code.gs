function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 

function getData(){
  var spreadSheetId = "1Dab-MhUdU0ZXvMOJiD9sNBoj52sU8OQ2LNi4BEyYzMs";    //REPLACE WITH YOUR ID
  var dataRange     = "Data!B2:E";
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values  = range.values;
 
  return values;
}
