const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navreg = document.querySelector(".nav-regular");
const navscrolled = document.querySelector(".nav-scrolled");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navreg.classList.toggle("menu-on");
    navscrolled.classList.toggle("menu-on");
    document.body.classList.add("hide");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navreg.classList.remove("menu-on");
        navscrolled.classList.remove("menu-on");
        document.body.classList.remove("hide");
    }))
