const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}




/* Code to test when a element is halfway down the page.  NOT WORKING
window.addEventListener("scroll", function() {
  var engagementPic = document.getElementById("engagementPic");
  var isTriggered = false;
  var centerLine = window.innerHeight;

  var picStart = engagementPic.offsetTop;
  var picEnd = picStart + engagementPic.offsetHeight;
  console.log("picStart:" + picStart + " < " + "centerLine:" + centerLine + 
  " && " + "picEnd:" + picEnd + " > " + "centerLine:" + centerLine);
  if( picStart < centerLine && picEnd > centerLine && isTriggered == false){
    console.log("pastBoolean");
    console.log("if triggered");
    console.log(isTriggered);
    
    engagementPic.classList.remove("timeline_image");
    isTriggered = true;
  } else {
    console.log("else triggered");
    engagementPic.classList.add("timeline_image")
    isTriggered = false;
  }
});
*/

/************************************* Quote Calculator page JS *///////////////////////////////////
