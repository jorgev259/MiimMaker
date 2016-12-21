$( function() {
    $( "#draggable" ).draggable();
  } );

function changeWidth(){
    $("#draggable").width($("#tw").val());
}

function changeHeight(){
    $("#draggable").height($("#th").val());
}