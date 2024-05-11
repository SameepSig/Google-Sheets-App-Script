// Written by Sameep Sigdel at 11th May, 2024
function onEdit(e) {
  var sheetName = 'Sameep Sigdel';
  var ss = SpreadsheetApp.getActiveSheet();
  var r = ss.getActiveCell();
  // Here 'Sameep Sigdel' is the sheet name
  if (r.getColumn() == 3 && ss.getName()== sheetName) { 
    // If the edit is done in column 'C' and sheet name is Sameep Sigdel then:
    var prevcelladdress ='C'+ r.getRowIndex();
    var prevcellValue = ss.getRange(prevcelladdress).getValue();
    // We are checking whether the value is true or not because we are using check boxes in colum C. So, if the check box is ticked, it returns true. If we dont want checkboxes, we can compare whether the cell is empty or not by using "" and modifying conditions.
    if (prevcellValue== true) {
      var celladdress ='D'+ r.getRowIndex();
      ss.getRange(celladdress).setValue(new Date()).setNumberFormat("hh:mm:ss AM/PM");
    }
    else {
      var celladdress ='D'+ r.getRowIndex()
      ss.getRange(celladdress).setValue("");
    }
  }
  // Same thing is done in different column
  if (r.getColumn() == 5 && ss.getName()== sheetName) {
    var prevcelladdress ='E'+ r.getRowIndex();
    var prevcellValue = ss.getRange(prevcelladdress).getValue();
    if (prevcellValue== true) {
      var celladdress ='F'+ r.getRowIndex();
      ss.getRange(celladdress).setValue(new Date()).setNumberFormat("hh:mm:ss AM/PM");
    }
    else {
      var celladdress ='F'+ r.getRowIndex()
      ss.getRange(celladdress).setValue("");
    }
  }
};
