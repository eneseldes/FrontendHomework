/*=============== SHOW-HIDE MENU ===============*/
const navMenu = document.querySelector(".navMenu"), 
    navToggle = document.querySelector(".navToggle"),
    navClose = document.querySelector(".navClose");

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("showMenu");
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("showMenu");
    })
}

/* remove mobile menu when a link is clicked */
const navLink = document.querySelectorAll(".navLink");

const linkAction = () =>{
    const navMenu = document.querySelector(".navMenu");
    navMenu.classList.remove("showMenu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.querySelector("header");
    //When the scroll is greater than 50 vh, change background header
    this.scrollY >= 50 ? header.classList.add("bgHeader")
        : header.classList.remove("bgHeader");
}

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
