
let slideno = 1;
showSlides(slideno);

function plusSlides(n) {
  showSlides(slideno += n);
}

function currentSlide(n) {
  showSlides(slideno = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideno = 1}    
  if (n < 1) {slideno = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideno-1].style.display = "block";  
  dots[slideno-1].className += " active";
}


