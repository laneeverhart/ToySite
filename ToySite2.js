function zoomIn(event) {
  var element = document.getElementById("overlay");
  element.style.display = "inline-block";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  element.style.backgroundPosition=(-posX*2)+"px "+(-posY*2)+"px";

}

function zoomOut() {
  var element = document.getElementById("overlay");
  element.style.display = "none";
}


function changeImage(event) {
  event = event
  var targetElement = event.target || event.srcElement;

  if (targetElement.className == "thumb") {}
  
  document.getElementById("imgZoom").src = targetElement.getAttribute("src");
  }

  function changeToAnakinBox(){

   document.getElementById("overlay").style.backgroundImage = "url(AnakinBox.jpg)";
  } 

  function changeToDarthVader(){

   document.getElementById("overlay").style.backgroundImage = "url(DarthVader.jpg)";
  } 
  function changeToAnakinSet(){

   document.getElementById("overlay").style.backgroundImage = "url(AnakinSet.jpg)";
  } 
