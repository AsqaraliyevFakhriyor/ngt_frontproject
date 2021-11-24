
// burger menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__items");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
});

// Scroll behavior
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight -  revealPoint) {
            reveals[i].classList.add("showing");
        } else {
            reveals[i].classList.remove("showing")
        }
    }
}


