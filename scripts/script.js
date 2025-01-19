const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    if (document.body.dataset.theme === "dark") {
        document.body.dataset.theme = "light";
    } else {
        document.body.dataset.theme = "dark";
    }
});
