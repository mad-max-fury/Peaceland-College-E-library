

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Declearing slideIndex to be 1
var slideIndex = 1;

function showSlides() {

  // Increamenting the slideIndex by 1/adding 1 to the already existing slideIndex
  slideIndex++;
  var i;

  // collecting all the images for slide
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");

  // checking to to see if the slideIndex/currentSlide 
  // is greater than the total length of the slides and 
  // seeting it back to 1 only if it is greater than the total slide legnth
  if (slideIndex > slides.length) {slideIndex = 1}

  // checking to to see if the slideIndex/currentSlide 
  // is less than the total length of the slides and 
  // seeting it back to the length
  if (slideIndex < 1) {slideIndex = slides.length}

  // Setting the whole collected slides to display hidden
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // setting the particular slide to display block
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";  
  setTimeout(showSlides, 3000)
}

showSlides(slideIndex);