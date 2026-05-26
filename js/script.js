// =========================
// MOBILE MENU
// =========================

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// =========================
// SCROLL REVEAL
// =========================

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      section.classList.add("active");

    }

  });

}

revealSections();

// =========================
// FAQ ACCORDION
// =========================

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const faqItem =
    question.parentElement;

    faqItem.classList.toggle("active");

  });

});

// =========================
// NAVBAR SHADOW
// =========================

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.3)";

  }

  else{

    header.style.boxShadow = "none";

  }

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop - 150;

    if(window.scrollY >= sectionTop){

      current =
      section.getAttribute("id");

    }

  });

  navItems.forEach((link) => {

    link.classList.remove("active-link");

    if(link.getAttribute("href")
      === `#${current}`){

      link.classList.add("active-link");

    }

  });

});
// =========================
// SCROLL PROGRESS BAR
// =========================

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const scrollTop =
  document.documentElement.scrollTop;

  const scrollHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  const progress =
  (scrollTop / scrollHeight) * 100;

  progressBar.style.width =
  progress + "%";

});
// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    topBtn.style.display = "block";

  }

  else{

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});