$( function() {
    $( "#element" ).draggable({ containment: "#canvas" });
    $( "#canvas" ).resizable();
    $('#canvas').bind('resize', function(){
            updateSize();
    });
  } );

function changeWidth(){
    $("#canvas").width($("#tw").val());
}

function changeHeight(){
    $("#canvas").height($("#th").val());
}

function updateSize(){
    $("#tw").val($("#canvas").width());
    $("#th").val($("#canvas").height());
}