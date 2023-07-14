const nav = document.querySelector("#nav");
const nav_toggle = document.querySelector("#nav-toggle")

nav_toggle.addEventListener("click", () => {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
    }
    else {
        nav.classList.add("hidden");
    }
})