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
