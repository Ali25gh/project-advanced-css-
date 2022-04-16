//Animation
let contact=document.getElementById("contact");
let glass=document.getElementById("glass");
function glass_animation() {
glass.style.animation="swing 1s ease";
setTimeout(() => {
    glass.style.animation="none";
}, 1000)
}
