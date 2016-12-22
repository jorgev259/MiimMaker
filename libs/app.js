var textCount = 0;
var imgCount = 0;

$( function() {
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
//
function addText(){
    $("#canvas").append("<div class='text' contenteditable id='t" + textCount +"'>Sample Text</div>");
    $("#controls").append("TextBox" + textCount + " <input type='color' id='c" + textCount + "' onchange='fontColor(" + textCount + ",this)'><br>")
    element("t" + textCount);
    textCount++;
}

function readIMG(event){
         var getImagePath = URL.createObjectURL(event.target.files[0]);
         $("#canvas").append("<div class='image' id='image" + imgCount +"'></div>");
         $('#image' + imgCount).css('background-image', 'url(' + getImagePath + ')');
        element("image" + imgCount);
        imgCount++;
}

function fontColor(number,value){
    var color = document.getElementById(value.id).value;
    $("#t" + number).css({"color":color});
}

function element(id){
    $("#" + id).draggable({ containment: "#canvas" });
    $("#" + id).resizable();
}

function render(){
            $("div.ui-icon-gripsmall-diagonal-se").remove();
        $("#canvas").css({"border-style":"hidden"});
   /* html2canvas($("#canvas"), {
  onrendered: function(canvas) {
    window.open(canvas.toDataURL(),"toolbar=no");
  }
});*/
    
    var algo= GrabzIt("ZjQ0MTllZWY0ZDRmNDg5ZTg2Y2JmNTEzZjgzZjJkOGQ=").ConvertHTML("<html><body><h1>Hello World!</h1></body></html>").DataURI();
    console.log(algo);
}