"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log("current scroll ( X/Y", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // OPTION 1
  //   Sccrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // OPTION2
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// EVENT DELEGATION ------ SMOOTH SCROLLING WAY 2
/*
1. Add event listener to common parent element
2. Determine what element originated the event
*/
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/* SMOOTH SCROOLING WAY 1
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
*/

// TABBED COMPONENET
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // GUARD CLAUSE
  if (!clicked) {
    tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
    return;
  }

  //REMOVE ACTIVE TABS
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // ADD ACTIVE TABS
  clicked.classList.add("operations__tab--active");

  // ACTIVE CONTENT AREA
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// MENU FADE ANIMATION
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// STICKY NAVIGATION
// const initialCoords = section1.getBoundingClientRect();

// STICK NAV WAY 1
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// STICKY WAY 2
// INTERSECTION OBSERVER API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// REVEAL SECTION
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.observe(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// LAZY LOADING IMAGES
const imgTarget = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // REPLACE SRC WITH DATA.SRC
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTarget.forEach((img) => imgObserver.observe(img));

// THE SLIDER COMPONENT
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = "scale(0.5) translateX(-800px)";
// slider.style.overflow = "visible";

// slides.forEach((slide, i) => {
//   slide.style.transform = `translate(${100 * i}%)`;
// });

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translate(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

// next slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);

  // currentSlide = 1: -100%, 0%, 100%, 200%
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide;
  e.key === "ArrowRight" && nextSlide();
});

// const h1 = document.querySelector("h1");

// // GOING DOWNWARD: CHILD
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // GOING UPWARD: PARENTS
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest(".header").style.background = "var(--gradient-secondary)";
// // h1.closest("h1").style.background = "var(--gradient-primary)";

// // GOING SIDEWAYS: SIBLINGS
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// Using the direct Parent to get the children
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

//             PRACTISE
// //////////////////////////////////////////////

// To select the entire HTML document
console.log(document.documentElement);
// To select the head
console.log(document.head);
// To select the body
console.log(document.body);

const allButton = document.getElementsByTagName("button");
console.log(document.getElementsByClassName("btn"));

// Creating and inserting HTML elements
// insertAdjacentHTML
const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML = `We use cookies for improved functionalities and analytics.
//   <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message); /*<---- Adds as the first child */
// header.append(message); /*<---- Adds as the last child */
// header.append(
//   message.cloneNode(true)
// ); /* <--- Adds elements two places at a time */
// header.before(message);
// header.after(message);

// 2 remove element
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// USING STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "100%";

// to get the styles in the console
// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// ATTRIBUTES
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);

// Setting the attributs
logo.alt = "What a logo!";

// Getting Non-Standard Attributes
console.log(logo.getAttribute("src"));
// console.log(logo.setAttribute("")); /*<--- To set ATTRIBUTE */

// Data Attribute
// To use the data attribute it has to start with 'data'
// console.log(logo.dataset.versionNumber)
/*<---- the versionNumber is like the className that is added 
after the data word */

// ClASSES
/*.add()
.remove()
.toggle()
.contains() 
Multiple classes can be addded 
*/

// const h1 = document.querySelector("h1");
// const h1F = function (e) {
//   alert("click here!");
// };
// h1.addEventListener("mouseenter", h1F);

// // To remove
// // h1.removeEventListener("mouseenter");

// // USING TIMEOUT
// setTimeout(() => h1.removeEventListener("mouseenter", h1F), 2000);

// OR
// h1.onmouseenter = function (e) {
//   alert("click here!");
// };

// rgb(255, 255, 255);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rbg(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.background = randomColor();
//   // e.currentTarget.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);
//   // console.log(randomColor(), e.target);

//   // TO STOP PROPAGATION
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.background = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.background = randomColor();
// });
