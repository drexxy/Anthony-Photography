$(document).ready(function() {
//Drop-down Menu
    $('.drop-down-button').hover(function(){
    	if ($(this).hasClass('active')){
    		$(this).removeClass('active');
    	}
    	else {
    		$(this).addClass('active');
    	}
    })

//Contact Page Carousel
var contactIndex = 0;
if($('body').is('.contact-page')){
    carousel();
}

 function carousel() {
    var j;
    var y = document.getElementsByClassName("carousel-img");
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }
    contactIndex++;
    if (contactIndex > y.length) {contactIndex = 1}
    y[contactIndex-1].style.display="block";
    setTimeout(carousel, 3000);    
 };

//Album Calculator for album page

 if($('body').is('.album-page')){
albumCalculator();
    $('.album-calculator').click(function(){
        albumCalculator();
    })
}

 function albumCalculator() {
    var albumPick = $('input[name=size]:checked').val();
    var albumCost = parseInt(albumPick);

    var albumCover = $('input[name=cover]:checked').val();

    if (albumCost === 260.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 80;
        break;
        case "metal":
        var coverCost = 120;
        break;
        case "canvas":
        var coverCost = 80;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 198.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 60;
        break;
        case "metal":
        var coverCost = 90;
        break;
        case "canvas":
        var coverCost = 60;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 163.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 50;
        break;
        case "metal":
        var coverCost = 80;
        break;
        case "canvas":
        var coverCost = 50;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 200.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 60;
        break;
        case "metal":
        var coverCost = 90;
        break;
        case "canvas":
        var coverCost = 60;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 166.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 50;
        break;
        case "metal":
        var coverCost = 80;
        break;
        case "canvas":
        var coverCost = 50;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 126.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 40;
        break;
        case "metal":
        var coverCost = 70;
        break;
        case "canvas":
        var coverCost = 40;
        break;
        default:
        var coverCost = 0;
      }
    }
    else if (albumCost === 107.00){
      switch (albumCover) {
        case "leather":
        var coverCost = 0;
        break;
        case "acrylic":
        var coverCost = 40;
        break;
        case "metal":
        var coverCost = 70;
        break;
        case "canvas":
        var coverCost = 40;
        break;
        default:
        var coverCost = 0;
      }
    }

    var total = (coverCost + albumCost + 50);
    document.getElementById("total").innerHTML = "£" + total;
    }
})

//Slide-Gallery

var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




