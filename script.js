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
    name: "Nuuk App",
    img: "nuuk-app.PNG",
    codeUrl: "https://github.com/Abhi5661/html-css-final-assignment",
    liveUrl: "https://abhi5661.github.io/html-css-final-assignment/",
    tags: ["html"],
  },
  {
    name: "Stunning Page",
    img: "stunning-page.PNG",
    codeUrl: "https://github.com/Abhi5661/stunning-landing-page",
    liveUrl: "https://abhi5661.github.io/stunning-landing-page/",
    tags: ["html"],
  },
  {
    name: "Calender",
    img: "calender.PNG",
    codeUrl: "https://github.com/Abhi5661/calender",
    liveUrl: "https://abhi5661.github.io/calender/",
    tags: ["js"],
  },
  {
    name: "Fan",
    img: "fan.PNG",
    codeUrl: "https://github.com/Abhi5661/fan",
    liveUrl: "https://abhi5661.github.io/fan/",
    tags: ["js"],
  },
  {
    name: "Temperature converter",
    img: "temp-converter.PNG",
    codeUrl: "https://github.com/Abhi5661/temperature-converter",
    liveUrl: "https://abhi5661.github.io/temperature-converter/",
    tags: ["js"],
  },
  {
    name: "Calorie Counter",
    img: "calorie-counter.PNG",
    codeUrl: "https://github.com/Abhi5661/Calorie-Counter",
    liveUrl: "https://abhi5661.github.io/Calorie-Counter/",
    tags: ["js"],
  },
  {
    name: "Favourite food app",
    img: "favourite-food.PNG",
    codeUrl: "https://github.com/Abhi5661/food-web-app",
    liveUrl: "https://abhi5661.github.io/food-web-app/",
    tags: ["html"],
  },
  {
    name: "Edyoda Stories",
    img: "edyoda-stories.PNG",
    codeUrl: "https://github.com/Abhi5661/assignment-2-edyoda_stories",
    liveUrl: "https://abhi5661.github.io/assignment-2-edyoda_stories/",
    tags: ["html"],
  },
  {
    name: "To-do-list",
    img: "to-do-list.PNG",
    codeUrl: "https://github.com/Abhi5661/my-to-do-list",
    liveUrl: "https://abhi5661.github.io/my-to-do-list/",
    tags: ["js"],
  },
  {
    name: "Quiz-app",
    img: "quiz-app.PNG",
    codeUrl: "https://github.com/Abhi5661/quiz-page",
    liveUrl: "https://abhi5661.github.io/quiz-page/",
    tags: ["js"],
  },
  {
    name: "Theme-change",
    img: "theme-change.PNG",
    codeUrl: "https://github.com/Abhi5661/js-assignment-01-change-theme",
    liveUrl: "https://abhi5661.github.io/js-assignment-01-change-theme/",
    tags: ["js"],
  },
  {
    name: "Reaction-Timer",
    img: "Reaction-timer.PNG",
    codeUrl: "https://github.com/Abhi5661/Reaction-Timer",
    liveUrl: "https://abhi5661.github.io/Reaction-Timer/",
    tags: ["js"],
  },
  {
    name: "Form-Validation",
    img: "form-validation.PNG",
    codeUrl: "https://github.com/Abhi5661/Form-Validation",
    liveUrl: "https://abhi5661.github.io/Form-Validation/",
    tags: ["js"],
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
