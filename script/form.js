//Animation
const contact = document.getElementById("contact");
const glass = document.getElementById("glass");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const label_fullname = document.getElementById("label_fullname");
const label_email = document.getElementById("label_email");
const radio_text = document.getElementById("radio_text");
const radio_text_2 = document.getElementById("radio_text_2");
const radio_hand = document.getElementById("radio_hand");
const radio_hand_2 = document.getElementById("radio_hand_2");
const famale_radio = document.getElementById("female");
function glass_animation() {
    glass.style.animation = "swing 1s ease";
    glass.style.backgroundColor = "white"
    setTimeout(() => {
        glass.style.animation = "none";
    }, 1000)
    if (fullname.innerHTML == "") {
        glass.style.animation = "swing .9s ease";
    }
    if (fullname.innerHTML = !"") {
        label_fullname.style.top = "-1rem";
        label_fullname.style.bottom = "4rem";
        label_fullname.style.fontSize = "1.1rem";
        label_fullname.style.padding = "0 1rem";
        label_fullname.style.backgroundColor = "white";
        label_fullname.style.webkitBorderBottomRightRadius = "20rem";
        label_fullname.style.webkitBorderBottomLeftRadius = "20rem";
        
    }
    if (email.innerHTML = !"") {
        label_email.style.top = "-1rem";
        label_email.style.bottom = "4rem";
        label_email.style.fontSize = "1.1rem";
        label_email.style.padding = "0 1rem";
        label_email.style.backgroundColor = "white";
        label_email.style.webkitBorderBottomRightRadius = "20rem";
        label_email.style.webkitBorderBottomLeftRadius = "20rem";
    }
}
 function male_radio() {
     radio_text.style.right="20rem";
     radio_hand.style.animation="wave-hand 2.6s .3s";
    glass.style.animation= "none";
    setTimeout(() => {
        radio_text.style.right="60rem";
    }, 2000)
    if(radio_text_2.style.right=="20rem"){
        radio_text.style.display="none";
        setTimeout(() => {
            radio_text.style.display="block";
            radio_text.style.right="20rem";
            return male_radio()
        }, 2000)
    }
 }
  function fmale_radio() {
     radio_text_2.style.right="20rem";
     radio_hand_2.style.animation="wave-hand 2.6s .3s";
    glass.style.animation= "none";
    setTimeout(() => {
        radio_text_2.style.right="60rem";
    }, 2000)
    if(radio_text.style.right=="20rem"){
        radio_text_2.style.display="none";
        setTimeout(() => {
            radio_text_2.style.display="block";
            radio_text_2.style.right="20rem";
            return fmale_radio()
        }, 2000)
    }
 }
//Etebar sangi form
