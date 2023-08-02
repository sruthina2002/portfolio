// navigation bar effects//
window.addEventListener("scroll",function(){
   const header = document.querySelector("header")
   header.classList.toggle("sticky",window.scrollY > 0);
});

const imgCards = document.querySelectorAll(".img-card");
const portfolioModals = document.querySelectorAll(".portfolio-modal");

const openModal = function(index) {
  portfolioModals[index].classList.add("active");
};

const closeModal = function() {
  portfolioModals.forEach((modal) => {
    modal.classList.remove("active");
  });
};

imgCards.forEach((imgCard, index) => {
  imgCard.addEventListener("click", () => {
    openModal(index);
  });
});

portfolioModals.forEach((modal) => {
  const closeBtn = modal.querySelector(".portfolio-close-btn");
  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

//scrollbtn//
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active",window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// const menuBtn = document.querySelector(".nav-menu-btn");
// const closeBtn = document.querySelector(".nav-close-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//   navigation.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//   navigation.classList.remove("active");
  
// });
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});





const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  { text: "Sruthi", typingDelay: 100, erasingDelay: 40 },
  { text: "a Front-end Dev.", typingDelay: 80, erasingDelay: 40 },
  { text: "an IOT Dev.", typingDelay: 80, erasingDelay: 40 }
];
const newTextDelay = 3000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].text.length) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent += textArray[textArrayIndex].text.charAt(charIndex);
    charIndex++;
    setTimeout(type, textArray[textArrayIndex].typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent = textArray[textArrayIndex].text.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, textArray[textArrayIndex].erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    charIndex = 0; // Reset charIndex to start typing the next text from the beginning
    setTimeout(type, textArray[textArrayIndex].typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});

ScrollReveal({
  // reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100
 });

 ScrollReveal().reveal('.home .home-info p, .section h1', {delay: 500, origin: 'left'});
 ScrollReveal().reveal('.home .home-description p, .about-info, .about-info btn',{delay: 1500, origin: 'right'});
 ScrollReveal().reveal('.home .home-description .btn, .about-img', {delay: 900, origin: 'bottom'});

 ScrollReveal().reveal('.home .home-info p', {delay: 500, origin: 'left'});
 ScrollReveal().reveal('.skills-description, .service-swiper,.contact-left,.contact-list', {delay: 500, origin: 'left',interval: 200});
 ScrollReveal().reveal('.education, .portfolio .img-card, .view-more-btn', {delay: 500, origin: 'bottom',interval: 200});
 
 document.addEventListener("DOMContentLoaded", function () {
  const customButton = document.getElementById("custom-button");

  function handleButtonClick() {
    // Add the "clicked" class on button click
    customButton.classList.add("clicked");

    // Remove the "clicked" class after 2 seconds
    setTimeout(function () {
      customButton.classList.remove("clicked");
    }, 2000);
  }

  customButton.addEventListener("click", handleButtonClick);
});