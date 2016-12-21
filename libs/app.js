$( function() {
    $( "#element" ).draggable({ containment: "#canvas" });
    $( "#canvas" ).resizable();
  } );

function changeWidth(){
    $("#canvas").width($("#tw").val());
}

function changeHeight(){
    $("#canvas").height($("#th").val());
}