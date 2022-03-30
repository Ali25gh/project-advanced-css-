
let stars_css = document.getElementById("a");
let stars_flex = document.getElementById("b");
let stars_sass = document.getElementById("c");
let star_number = document.getElementById("star_number");
let course_star1 = document.getElementById("course_star1");
const defaul = 0
// css course
function star1() {
    stars_css.style.display = "none";
    stars_css.style.display = "block";
    stars_css.style.color = "#5fc1ea";
    stars_css.style.transition = "all 1.5s cubic-bezier(0, 2, 0, 1.54)";
    course_star1.style.right = "25.5rem";
    course_star1.style.color = "#5fc1ea";
    star_number.style.color = "#5fc1ea";
    course_star1.style.transition = "all 1s cubic-bezier(0.07, 0.94, 0.95, 0.05)";
    star_number.style.transition = "all 1s cubic-bezier(0, 2, 0, 1.54)";
    stars_css.innerHTML = "ممنون از نظرتون";
}
function star_a1() {
    star_number.innerHTML = "(" + (defaul + 1) + ")"
}
function star_a2() {
    star_number.innerHTML = "(" + (defaul + 2) + ")"
}
function star_a3() {
    star_number.innerHTML = "(" + (defaul + 3) + ")"
}
function star_a4() {
    star_number.innerHTML = "(" + (defaul + 4) + ")"
}
function star_a5() {
    star_number.innerHTML = "(" + (defaul + 5) + ")"
}
// flex course
let star_number1 = document.getElementById("star_number1");
let course_star2 = document.getElementById("course_star2");
function star2() {
    stars_flex.style.display = "none";
    stars_flex.style.display = "block";
    stars_flex.style.color = "#7b4d95";
    stars_flex.style.transition = "all 1.5s cubic-bezier(0, 2, 0, 1.54)";
    course_star2.style.right = "25.5rem";
    course_star2.style.color = "#7b4d95";
    star_number1.style.color = "#7b4d95";
    course_star2.style.transition = "all 1s cubic-bezier(0.07, 0.94, 0.95, 0.05)";
    star_number1.style.transition = "all 1s cubic-bezier(0, 2, 0, 1.54)";
    stars_flex.innerHTML = "ممنون از نظرتون";
}
function star_b1() {
    star_number1.innerHTML = "(" + (defaul + 1) + ")"
}
function star_b2() {
    star_number1.innerHTML = "(" + (defaul + 2) + ")"
}
function star_b3() {
    star_number1.innerHTML = "(" + (defaul + 3) + ")"
}
function star_b4() {
    star_number1.innerHTML = "(" + (defaul + 4) + ")"
}
function star_b5() {
    star_number1.innerHTML = "(" + (defaul + 5) + ")"
}
// sass course
let star_number2 = document.getElementById("star_number2");
let course_star3 = document.getElementById("course_star3");
function star3() {
    stars_sass.style.display = "none";
    stars_sass.style.display = "block";
    stars_sass.style.color = "#ce79a3";
    stars_sass.style.transition = "all 1.5s cubic-bezier(0, 2, 0, 1.54)";
    course_star3.style.right = "25.5rem";
    course_star3.style.color = "#ce79a3";
    star_number2.style.color = "#ce79a3";
    course_star3.style.transition = "all 1s cubic-bezier(0.07, 0.94, 0.95, 0.05)";
    star_number2.style.transition = "all 1s cubic-bezier(0, 2, 0, 1.54)";
    stars_sass.innerHTML = "ممنون از نظرتون";
}
function star_c1() {
    star_number2.innerHTML = "(" + (defaul + 1) + ")"
}
function star_c2() {
    star_number2.innerHTML = "(" + (defaul + 2) + ")"
}
function star_c3() {
    star_number2.innerHTML = "(" + (defaul + 3) + ")"
}
function star_c4() {
    star_number2.innerHTML = "(" + (defaul + 4) + ")"
}
function star_c5() {
    star_number2.innerHTML = "(" + (defaul + 5) + ")"
}