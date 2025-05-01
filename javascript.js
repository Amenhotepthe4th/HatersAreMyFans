// Theme Switcher (Light/Dark Mode)
const themeSwitcher = document.createElement("button");
themeSwitcher.innerHTML = "Switch Theme";
themeSwitcher.style.position = "fixed";
themeSwitcher.style.top = "10px";
themeSwitcher.style.right = "10px";
themeSwitcher.style.padding = "0.5rem 1rem";
document.body.appendChild(themeSwitcher);

themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Effect for "About Me" Section
const aboutText = document.querySelector("#about p");
const textArray = "Hello! I’m a developer passionate about creating innovative apps and websites.".split("");
let index = 0;

function typeEffect() {
    if (index < textArray.length) {
        aboutText.innerHTML += textArray[index];
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Contact Form Validation
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name && email && message) {
        alert("Thank you for your message!");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});

// Dark Mode Styles (Add this to your CSS for full effect)
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: #f4f4f9;
    }

    .dark-mode a {
        color: #1e90ff;
    }

    .dark-mode header, .dark-mode footer {
        background-color: #222;
    }
`;
document.head.appendChild(styleSheet);
