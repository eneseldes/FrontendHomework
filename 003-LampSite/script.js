/*=============== SHOW-HIDE MENU ===============*/
const navMenu = document.querySelector(".navMenu"),
  navToggle = document.querySelector(".navToggle"),
  navClose = document.querySelector(".navClose");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}

/* remove mobile menu when a link is clicked */
const navLink = document.querySelectorAll(".navLink");

const linkAction = () => {
  const navMenu = document.querySelector(".navMenu");
  navMenu.classList.remove("showMenu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.querySelector("header");
  //When the scroll is greater than 50 vh, change background header
  this.scrollY >= 50
    ? header.classList.add("bgHeader")
    : header.classList.remove("bgHeader");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
// xxxxxxxxxxxxxxxxxxxxxxx

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll(".chooseFaqItem");

// Select each item
faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".chooseFaqHeader");

  // Select each button click
  faqHeader.addEventListener("click", () => {
    // Select the current faq-open class
    const openItem = document.querySelector(".faqOpen");

    toggleItem(item);

    //Remove the faq-open class from other items
    if(openItem && openItem != item){
        toggleItem(openItem);
    }
  });
});

// Function to display content
const toggleItem = (item) => {
  // Select each faq content
  const faqContent = item.querySelector(".chooseFaqContent");

  // If the same item contains the faq-open class, remove
  if (item.classList.contains("faqOpen")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faqOpen");
  } else {
    // Add max-height to the content and add the faq-open class
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faqOpen");
  }
};

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollup = document.querySelector(".scrollup");

    // When the scroll is higher than 350 viewport height, show scroll up
    this.scrollY >= 350 ? scrollup.classList.add("showScroll")
                        : scrollup.classList.remove("showScroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector("#themeButton");
const darkTheme = "darkTheme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selectedTheme");
const selectedIcon = localStorage.getItem("selectedIcon");

// Obtain the current theme that the interface has by validating the darkTheme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

// Activate /deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    console.log("aaaa");
    //Add or remove dark/icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the theme and the current icon that the user chose
    localStorage.setItem("selectedTheme", getCurrentTheme);
    localStorage.setItem("selectedIcon", getCurrentIcon);
})