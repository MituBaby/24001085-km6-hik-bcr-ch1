var btnNav = document.getElementById("btn-nav");
var navbar = document.getElementById("navbar");
var navigation = document.getElementById("navigation");
var btnCloseNav = document.getElementById("btn-close-nav");
var BCR = document.getElementById("BCR");
var ourService = document.getElementById("OurService");
var whyUs = document.getElementById("WhyUs");
var Testi = document.getElementById("Testi");
var faq = document.getElementById("FAQQ");
var bgNav = document.getElementById("bg-nav");

btnNav.addEventListener("click", function () {
  navbar.classList.add("active");
  btnCloseNav.classList.add("active");
});

btnCloseNav.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});

BCR.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});
ourService.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});
whyUs.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});
Testi.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});
faq.addEventListener("click", function () {
  navbar.classList.remove("active");
  btnCloseNav.classList.remove("active");
  var bgNav = document.getElementById("bg-nav");
  bgNav.remove();
});

btnNav.addEventListener("click", function () {
  var newBg = document.createElement("div");

  newBg.id = "bg-nav";

  navigation.appendChild(newBg);
});

// start testi
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// end testi
