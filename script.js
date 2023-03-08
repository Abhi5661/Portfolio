/* Variables*/
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

for (let i = 0; i < filterEls.length; i++) {
  filterEls[i].addEventListener("click", function (e) {
    document.querySelector("#filters li.active").classList.remove("active");
    filterEls[i].classList.add("active");
    let tag = e.target.id;
    renderProjects(tag);
  });
}

yearEl.innerHTML = new Date().getFullYear();

/* Projects */

const projects = [
  {
    name: "Fan",
    img: "fan.PNG",
    codeUrl: "https://github.com/Abhi5661/fan",
    liveUrl: "https://abhi5661.github.io/fan/",
    tags: ["css", "js"],
  },
  {
    name: "To-do-list",
    img: "to-do-list.PNG",
    codeUrl: "https://github.com/Abhi5661/my-to-do-list",
    liveUrl: "https://abhi5661.github.io/my-to-do-list/",
    tags: ["js"],
  },
  {
    name: "Favourite food app",
    img: "favourite-food.PNG",
    codeUrl: "https://github.com/Abhi5661/food-web-app",
    liveUrl: "https://abhi5661.github.io/food-web-app/",
    tags: ["html", "css"],
  },
  {
    name: "Edyoda Stories",
    img: "edyoda-stories.PNG",
    codeUrl: "https://github.com/Abhi5661/assignment-2-edyoda_stories",
    liveUrl: "https://abhi5661.github.io/assignment-2-edyoda_stories/",
    tags: ["html", "css"],
  },
];

function renderProjects(tag) {
  let output = "";

  for (let i = 0; i < projects.length; i++) {
    if (tag == "all" || projects[i].tags.includes(tag)) {
      output += `<div class="project">
    <img src="images/projects/${projects[i].img}" alt="" />
    <div class="content flex">
      <p>${projects[i].name}</p>
      <p class="flex">
        <a href="${projects[i].codeUrl}" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="${projects[i].liveUrl}" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
      </p>
    </div>
  </div>`;
    }
  }

  projectsEl.innerHTML = output;
}

renderProjects("all");
