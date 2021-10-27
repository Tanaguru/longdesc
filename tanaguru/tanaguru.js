var url = window.location.href;
var popup = window.open();
var data = [["Image", "Src", "Alt", "Title", "Role", "Aria-label", "Aria-describedby", "Aria-labelledby"]] //headers  
var imageTable = makeTable($(popup.document.body), data);


 $( "img" ).each(function() {
  var dataImg = [];
  var src = $( this ).attr( "src")
  dataImg.push($.parseHTML( "<img src="+url+src+">"));
  dataImg.push($( this ).outerHTML);
  dataImg.push($( this ).attr( "alt"));
  dataImg.push($( this ).attr( "title"));
  dataImg.push($( this ).attr( "role"));
  dataImg.push($( this ).attr( "Aria-label"));
  dataImg.push($( this ).attr( "Aria-describedby"));
  dataImg.push($( this ).attr( "Aria-labelledby"));
  appendTableColumn(imageTable, dataImg);
});

function theImage(table) {
	var cell = $(this).rows[1].cells[1];
	alert(cell);
	alert("toto");
}
 
function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableTanaguru');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);

}

function appendTableColumn(table, rowData) {
  var lastRow = $('<tr/>').appendTo(table.find('table:last'));
  $.each(rowData, function(colIndex, c) {
	  if (colIndex == 0) {
		lastRow.append($('<td/>').html(c));
	  }
	  else {
      lastRow.append($('<td/>').text(c));
	  }
  });
  return lastRow;
}
 
$(popup.document).ready(function() {
	$(popup.document.head).append("<link rel='stylesheet' href='http://longdesc.fr/tanaguru/tanaguru.css'>");
	theImage(imageTable);
});



