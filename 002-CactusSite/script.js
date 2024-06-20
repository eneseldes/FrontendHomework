/* =============== HEADER =============== */
const navMenu = document.querySelector(".navMenu"),
      navToggle = document.querySelector(".navToggle"),
      navClose = document.querySelector(".navClose");

// Show menu
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("showMenu");
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("showMenu");
    })
}

// Hide menu when an item is clicked
const navLink = document.querySelectorAll(".navLink");

const linkAction = () =>{
    const navMenu = document.querySelector(".navMenu");
    navMenu.classList.remove("showMenu");
}

navLink.forEach(i => i.addEventListener("click", linkAction))