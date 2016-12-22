var textCount = 0;

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

function addText(){
    $("#canvas").append("<div contenteditable id='t" + textCount +"'></textarea>");
    $("#controls").append("TextBox" + textCount + " <input type='color' id='c" + textCount + "' onchange='fontColor(" + textCount + ",this)'><br>")
    element("t" + textCount);
    textCount++;
}

function fontColor(number,value){
    var color = document.getElementById(value.id).value;
    $("#t" + number).css({"color":color});
}

function element(id){
    $("#" + id).draggable({ containment: "#canvas" });
    $("#" + id).text("Sample Text");
    $("#" + id).resizable();
}