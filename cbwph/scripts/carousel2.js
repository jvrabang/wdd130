const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const carousel2 = document.querySelector(".carousel-container2");
const track2 = document.querySelector(".track2");
let width2 = carousel2.offsetWidth;
let index2 = 0;

window.addEventListener("resize", function () {
width2 = carousel2.offsetWidth;
});

next2.addEventListener("click", function (e) {
e.preventDefault();
index2 = index2 + 1;
prev2.classList.add("show");
track2.style.transform = "translateX(" + index2 * -width2 + "px)";
if (track2.offsetWidth - index2 * width2 < index2 * width2) {
    next2.classList.add("hide");
}
});

prev2.addEventListener("click", function () {
index2 = index2 - 1;
next2.classList.remove("hide");
if (index2 === 0) {
    prev2.classList.remove("show");
}
track2.style.transform = "translateX(" + index2 * -width2 + "px)";
});