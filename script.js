const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");

if (hamburger && navRight) {
    hamburger.addEventListener("click", () => {
        navRight.classList.toggle("active");
    });
}

    