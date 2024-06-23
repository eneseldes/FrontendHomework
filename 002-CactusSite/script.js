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

/* =============== ADD BLUR HEADER =============== */
const blurHeader = () =>{
    const header = document.querySelector("header");
    this.scrollY >= 50 ? header.classList.add("blurHeader")
                       : header.classList.remove("blurHeader");
}
window.addEventListener("scroll", blurHeader);

/* =============== SHOW SCROLL UP =============== */
const scrollUp = () =>{
    const scrollUpButton = document.querySelector(".scrollUp");
    this.scrollY >= 350 ? scrollUpButton.classList.add("showScroll")
                        : scrollUpButton.classList.remove("showScroll");
}
window.addEventListener("scroll", scrollUp);

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.homeImg, .newData, .sectionTitle, .careImg, .contactContent, footer, header`);
sr.reveal(`.homeData, .careList, .contactImg`, {delay: 500});
sr.reveal(`.newCard`, {delay: 500, interval: 100});
sr.reveal(`.shopCard`, {interval: 100});