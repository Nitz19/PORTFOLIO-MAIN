// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["Front-End Web Developer", "GAMER"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});

//NightShift
var icon = document.getElementById("moon");
var image = document.getElementById("stars");
icon.onclick = function () {
  document.body.classList.toggle("night-theme");
  if (document.body.classList.contains("night-theme")) {
    icon.src = "assets/dark theme icon/sun.png";
    image.src = "assets/NIGHT/stars.png";
  } else {
    icon.src = "assets/dark theme icon/moon.png";
    image.src = "assets/NIGHT/sky.png";
  }
};
//parallax
let starts = document.getElementById("stars");
let mountains_behind = document.getElementById("mountains_behind");
let nitz = document.getElementById("nitz");
let scrolldown = document.getElementById("scrolldown");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  starts.style.left = value + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  //nitz.style.marginRight = value * 4 + 'px';
  nitz.style.marginTop = value * 1.5 + "px";
  scrolldown.style.marginTop = value * 1.5 + "px";
});

// auto hide navbar click
$(".click-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// automatic transparent navbar
const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

// loadmore button
const loadmore = document.querySelector(".loadmore-btn");

let currentItems = 3;
loadmore.addEventListener("click", () => {
  const elementList = [
    ...document.querySelectorAll(".certification .content .box"),
  ];

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].classList.add("d-block");
    }
  }
  currentItems += 3;

  if (currentItems >= elementList.length) {
    loadmore.classList.add("d-none");
  }
});

// animate on scroll (AOS)
AOS.init();

/* disable inspect element or dev mode
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}); */

document.onkeydown = function (e) {
  if (event) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
};

// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});

// scroll reveal animation content
const srtop = ScrollReveal({
  origin: "top",
  distance: "90px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content .intro h3", { delay: 300 });
srtop.reveal(".home .content .intro p", { delay: 300 });
srtop.reveal(".home .content .intro a", { delay: 400 });

srtop.reveal(".home .image", { delay: 600 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });

srtop.reveal(".about .cv-btn", { delay: 200 });
