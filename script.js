var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Tombol di klik");
  alert("Apakah anda yakin?");
});

var btnNav = document.getElementById("btn-nav");
var navbar = document.getElementById("navbar");
var navigation = document.getElementById("navigation");
var btnCloseNav = document.getElementById("btn-close-nav");
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
