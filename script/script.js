const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navRight.classList.toggle("active")
})