const landerButton = document.getElementById("landerBtn");
const contactButton = document.getElementById("contactBtn");
const projectButton = document.getElementById("projectsBtn");
const landerButton2 = document.getElementById("landerBtn2");
const contactButton2 = document.getElementById("contactBtn2");
const projectButton2 = document.getElementById("projectsBtn2");
const lander = document.getElementById("lander");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");
const burgerButton = document.getElementById("burgerIcon");
const closeButton = document.getElementById("closeIcon");
const mobileMenu = document.getElementById("mobileMenu");
const bigMenu = document.getElementById("bigMenu");

displayLander();

landerButton.addEventListener("click", function () {
  displayLander();
});

burgerButton.addEventListener("click", function () {
  showMobileMenu();
});

closeButton.addEventListener("click", function () {
  hideMobileMenu();
});

contactButton.addEventListener("click", function () {
  displayContact();
});

projectButton.addEventListener("click", function () {
  displayProjects();
});

landerButton2.addEventListener("click", function () {
  displayLander();
});

contactButton2.addEventListener("click", function () {
  displayContact();
});

projectButton2.addEventListener("click", function () {
  displayProjects();
});

function hideAll() {
  var width = window.innerWidth;
  if (width > 1000) {
    hideMobileMenu();
    burgerButton.setAttribute("style", "display: none");
  }
  if (width < 1000) {
    hideMobileMenu();
  }
}

function displayLander() {
  lander.setAttribute("style", "display: inherit");
  contact.setAttribute("style", "display: none");
  projects.setAttribute("style", "display: none");
  bigMenu.classList.add("borderBottom");
  var width = window.innerWidth;
  if (width < 1000) {
    hideMobileMenu();
  }
}

function displayProjects() {
  lander.setAttribute("style", "display: none");
  contact.setAttribute("style", "display: none");
  projects.setAttribute("style", "display: inherit");
  var width = window.innerWidth;
  if (width < 1000) {
    hideMobileMenu();
  }
}

function displayContact() {
  lander.setAttribute("style", "display: none");
  contact.setAttribute("style", "display: block");
  projects.setAttribute("style", "display: none");
  var width = window.innerWidth;
  if (width < 1000) {
    hideMobileMenu();
  }
}

function showMobileMenu() {
  burgerButton.setAttribute("style", "display: none");
  closeButton.setAttribute("style", "display: block");
  mobileMenu.setAttribute("style", "display: block");
  bigMenu.classList.remove("borderBottom");
}

function hideMobileMenu() {
  burgerButton.setAttribute("style", "display: block");
  closeButton.setAttribute("style", "display: none");
  mobileMenu.setAttribute("style", "display: none");
  bigMenu.classList.add("borderBottom");
}

window.addEventListener("resize", function () {
  hideAll();
});

var canvas = document.getElementById("responsive-canvas");
var ctx = canvas.getContext("2d");
var stgw = window.innerWidth;
var stgh = window.innerHeight;
var count = 100;
var lcount = 5;
var layer = [];
var layery = [];
ctx.fillStyle = "rgba(255,255,255, 0.5)";
for (var l = 0; l < lcount; l++) {
  ctx.clearRect(0, 0, stgw, stgh);
  for (var i = 0; i < (count * (lcount - l)) / 1.5; i++) {
    var myx = Math.floor(Math.random() * stgw);
    var myy = Math.floor(Math.random() * stgh);
    var myh = l * 2;
    var myw = myh / 10;
    ctx.beginPath();
    ctx.moveTo(myx, myy);
    ctx.lineTo(myx + myw, myy + myh);
    ctx.arc(myx, myy + myh, myw, 0, 1 * Math.PI);
    ctx.lineTo(myx - myw, myy + myh);
    ctx.closePath();
    ctx.fill();
  }
  layer[l] = new Image();
  layer[l].src = canvas.toDataURL("image/png");
  layery[l] = 0;
}

function animate() {
  ctx.clearRect(0, 0, stgw, stgh);
  for (var l = 0; l < lcount; l++) {
    layery[l] += l * 0.5;
    if (layery[l] > stgh) {
      layery[l] = layery[l] - stgh;
    }
    ctx.drawImage(layer[l], 0, layery[l]);
    ctx.drawImage(layer[l], 0, layery[l] - stgh);
  }
  window.requestAnimationFrame(animate);
}

animate();
