
const skills = [
    { name: "HTML / CSS", level: "Fort", percentage: 90 },
    { name: "JavaScript", level: "Intermédiaire", percentage: 65 },
    { name: "PHP", level: "Fort", percentage: 90 },
    { name: "Python", level: "Intermédiaire", percentage: 65 },
    { name: "React", level: "Intermédiaire", percentage: 65 },
    { name: "Java", level: "Bases", percentage: 35 },
    { name: "MySQL", level: "Fort", percentage: 90 },
    { name: "WinDev", level: "Fort", percentage: 90 },
    { name: "Odoo", level: "Bases", percentage: 35 },
    { name: "Intelligence artificielle", level: "Avancé", percentage: 90 }
];

const projects = [
    {
        number: "01",
        name: "Gestion de garage",
        description: "Application de gestion des activités d'un garage automobile.",
        technologies: "PHP • Laravel • MySQL"
    },
    {
        number: "02",
        name: "Site Picard",
        description: "Création d'un site web avec une interface moderne et responsive.",
        technologies: "HTML • Sass"
    },
    {
        number: "03",
        name: "Gestion d'hôtel",
        description: "Application de gestion des chambres, clients, réservations et paiements.",
        technologies: "Django • React"
    },
    {
        number: "04",
        name: "Gestion de stock",
        description: "Application de gestion des produits et du suivi des stocks.",
        technologies: "PHP"
    }
];

const skillsGrid = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");

skillsGrid.innerHTML = skills.map(skill => `
    <div class="skill-card reveal">
        <h3>${skill.name}</h3>
        <span class="skill-level">${skill.level}</span>
        <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.percentage}%"></div>
        </div>
    </div>
`).join("");

projectsGrid.innerHTML = projects.map(project => `
    <article class="project-card reveal">
        <span class="project-number">PROJECT ${project.number}</span>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <span class="project-tech">${project.technologies}</span>
    </article>
`).join("");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            const progress = entry.target.querySelector(".skill-progress");

            if (progress) {
                progress.style.width = progress.dataset.width;
            }

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
