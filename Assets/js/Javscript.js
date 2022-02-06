const landerButton = document.getElementById("landerBtn");
const contactButton = document.getElementById("contactBtn");
const projectButton = document.getElementById("projectsBtn");
const lander = document.getElementById("lander");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");

displayLander ();

landerButton.addEventListener ("click", function(){
    displayLander();
});

contactButton.addEventListener ("click", function(){
    displayContact();
});

projectButton.addEventListener ("click", function(){
    displayProjects();
});

function displayLander (){
    lander.setAttribute("style", "display: inherit");
    contact.setAttribute("style", "display: none");
    projects.setAttribute("style", "display: none");
};

function displayProjects (){
    lander.setAttribute("style", "display: none");
    contact.setAttribute("style", "display: none");
    projects.setAttribute("style", "display: inherit");
};

function displayContact (){
    lander.setAttribute("style", "display: none");
    contact.setAttribute("style", "display: block");
    projects.setAttribute("style", "display: none");
};
