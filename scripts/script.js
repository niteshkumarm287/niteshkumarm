// Add Scroll Button
const scrollButton = document.createElement("button");
scrollButton.classList.add("scroll-btn");
scrollButton.innerHTML = `<i>&#9650;</i>`; // Up Arrow Icon
document.body.appendChild(scrollButton);

// Scroll Behavior
scrollButton.addEventListener("click", () => {
    if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});

// Change Icon on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollButton.innerHTML = `<i>&#9650;</i>`; // Up Arrow
    } else {
        scrollButton.innerHTML = `<i>&#9660;</i>`; // Down Arrow
    }
});
