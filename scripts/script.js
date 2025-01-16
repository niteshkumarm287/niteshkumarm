// Smooth scrolling effect for visibility animations
const sections = document.querySelectorAll("section");
const scrollDownBtn = document.createElement("button");
const scrollUpBtn = document.createElement("button");

// Add scroll buttons dynamically
scrollDownBtn.className = "scroll-icon down";
scrollUpBtn.className = "scroll-icon up";
scrollDownBtn.innerHTML = "↓";
scrollUpBtn.innerHTML = "↑";

document.body.appendChild(scrollDownBtn);
document.body.appendChild(scrollUpBtn);

// Add scroll-based animations
function animateSections() {
    const scrollY = window.scrollY + window.innerHeight / 1.5;
    sections.forEach(section => {
        if (section.offsetTop < scrollY) {
            section.classList.add("visible");
        }
    });
}

// Scroll behavior for buttons
scrollDownBtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/hide buttons based on scroll position
function toggleScrollIcons() {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

// Event listeners
window.addEventListener("scroll", () => {
    animateSections();
    toggleScrollIcons();
});

// Initial animations
document.addEventListener("DOMContentLoaded", () => {
    animateSections();
});
