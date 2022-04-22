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
const male = document.getElementById("male");
const error = document.getElementById("err");
let btn = document.getElementById("btn_form")
let div_disable = document.getElementById("div_diasabler")
function glass_animation() {
    glass.style.animation = "swing 1s ease";
    glass.style.backgroundColor = "white"
    btn.classList.add = "disable";
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
    if ((email.innerHTML = !"") && (fullname.innerHTML = ! "")) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        btn.disabled = false;
    }
}
function male_radio() {
    famale_radio.value = ""
    male.value = ""
    radio_text.style.right = "20rem";
    radio_hand.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text.style.right = "70rem";
    }, 2000)
    if (radio_text_2.style.right == "20rem") {
        radio_text.style.display = "none";
        setTimeout(() => {
            radio_text.style.opacity = "0";
            radio_text.style.animation = "fade-in .76s ease";
            radio_text.style.display = "block";
            radio_text.style.right = "20rem";
            setTimeout(() => {
                radio_text.style.opacity = "1";
            }, 500)
            return male_radio()
        }, 2000)
    }
}
function fmale_radio() {
    famale_radio.value = ""
    male.value = ""
    radio_text_2.style.right = "20rem";
    radio_hand_2.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text_2.style.right = "70rem";
    }, 2000)
    if (radio_text.style.right == "20rem") {
        radio_text_2.style.display = "none";
        setTimeout(() => {
            radio_text_2.style.opacity = "0";
            radio_text_2.style.animation = "fade-in .76s ease";
            radio_text_2.style.display = "block";
            radio_text_2.style.right = "20rem";
            setTimeout(() => {
                radio_text_2.style.opacity = "1";
            }, 500)
            return fmale_radio()
        }, 2000)
    }
}
//Etebar sangi form

document.addEventListener("DOMContentLoaded", function () {
    btn.style.opacity = ".5";
    btn.style.pointerEvents = "none";
    btn.disabled = true;
})

btn.addEventListener("click", function () {
    if ((email.value == "") || (fullname.value == "")) {
        error.style.right = "19.9rem"
        error.innerHTML = "فیلد ها را پر کنید"
    }
    else if (famale_radio.value == "not_selected" && (male.value == "not_selected")) {
        error.style.right = "13.9rem"
        error.style.top = "49.9rem"
        setTimeout(() => {
            error.innerHTML = "لطفا جنسیت خود را انتخاب کنید" + " " + "🙍‍♀️🙎‍♂️";
            error.style.top = "30.9rem"
        }, 700)
    }
    else {
        error.style.top = "30.9rem"
        error.style.right = "17.9rem"
        error.innerHTML = "فرم ارسال شد" + '<i class="fas fa-check" style="color: green;padding-right: 0.5rem;animation: wave-hand 2.6s .3s;"></i>'
    }

})