// ================== Data ================== //
const skills = [
  "C", "C++", "Java", "Python", "HTML",
  "MS Word", "MS Excel", "Data Analytics", "Analytical Skills"
];

const projects = [
  {
    title: "My Portfolio Website",
    desc: "This is my very first project — a responsive personal portfolio showcasing my skills, education, and certifications.",
    link: "#"
  }
];

const certifications = [
  "Deloitte Data Analyst",
  "Tata GenAI Data Analytics",
  "Accenture Software Engineering",
  "Amazon Solutions Architecture",
  "IBM Web Development Fundamentals",
  "Intel AI for All",
  "TCS NQT Soft Skills"
];

// ================== Populate Skills ================== //
const skillsList = document.getElementById("skillsList");
if (skillsList) {
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// ================== Populate Projects ================== //
const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <a href="${proj.link}" target="_blank" class="btn">View</a>
    `;
    projectsGrid.appendChild(div);
  });
}

// ================== Populate Certifications ================== //
const certList = document.getElementById("certList");
if (certList) {
  certifications.forEach(cert => {
    const li = document.createElement("li");
    li.textContent = cert;
    certList.appendChild(li);
  });
}

// ================== Mobile Menu Toggle ================== //
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ================== Scroll Animations ================== //
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load

// ================== Dynamic Year ================== //
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
