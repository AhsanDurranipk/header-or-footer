// JavaScript to handle the dark mode toggle, search toggle, and responsive menu

const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
}

// Dark mode toggle
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
});

// Search box toggle
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// Responsive sidebar toggle
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", (e) => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});
