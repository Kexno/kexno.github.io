function AddSquare() {

}

$(function() {
  var bg = $("#background");

  var row = 30;
  var col = 20;
  
  for ( var i = 0; i < row; ++i ) {
    var rowid = "row-" + i;
    bg.append("<div id=" + rowid + ">");
    var rowdiv = $("#" + rowid);
    for (var j = 0 ; j < col; ++j) {
      rowdiv.append("<div class='square'> </div>");
    }
  }
});