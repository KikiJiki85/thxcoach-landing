import { slideUp, slideDown } from "./animation.js";

function init() {
  const landingBody = document.querySelector(".landing__body");
  const landingHeader = document.querySelector(".landing-header");
  const languageSwitch = document.querySelector(".landing-header__language");
  const linkSecond = document.querySelector(".landing-header__link-second");
  const arrow = document.querySelector(".landing-header__arrow");
  const overlay = document.querySelector(".overlay");
  const signUpBtn = document.querySelector(".landing-header__sign-up");
  const signUpModal = document.querySelector(".sign-up");
  const signUpCloseBtn = document.querySelector(".sign-up__close");
  const signUpContinueBtn = document.querySelector(".sign-up__continue");
  const signUpModal2 = document.querySelector(".sign-up-2");
  const signUpBackBtn = document.querySelector(".sign-up-2__back");

  const signUp2CountryBtn = document.querySelector(".sign-up-2__country");
  const signUpCountry = document.querySelector(".sign-up-country");
  const signUpCountryBackBtn = document.querySelector(".sign-up-country__back");
  const signUpCountryContinueBtn = document.querySelector(".sign-up-country__continue");

  let pickedCountry = null;

  languageSwitch.addEventListener("click", () => {
    linkSecond.classList.toggle("landing-header__link-second--active");
    languageSwitch.classList.toggle("landing-header__language--active");
    arrow.classList.toggle("landing-header__arrow--rotate");
  });

  signUpBtn.addEventListener("click", () => {
    signUpModal.classList.add("sign-up--show");
    overlay.classList.add("overlay--show");
    landingBody.classList.add("no-scroll");
  });

  signUpCloseBtn.addEventListener("click", () => {
    signUpModal.classList.remove("sign-up--show");
    overlay.classList.remove("overlay--show");
    landingBody.classList.remove("no-scroll");
  });

  signUpContinueBtn.addEventListener("click", () => {
    signUpModal2.classList.add("sign-up-2--show");
  });

  signUpBackBtn.addEventListener("click", () => {
    signUpModal2.classList.remove("sign-up-2--show");
  });

  signUp2CountryBtn.addEventListener("click", () => {
    signUpCountry.classList.add("sign-up-country--show");
  });

  signUpCountryBackBtn.addEventListener("click", () => {
    signUpCountry.classList.remove("sign-up-country--show");
  });

  signUpCountryContinueBtn.addEventListener("click", () => {
    const countryCheckboxes = document.querySelectorAll(".sign-up-country__checkbox");
    for (let radio of countryCheckboxes) {
      if (radio.checked) {
        pickedCountry = radio.id.charAt(0).toUpperCase() + radio.id.slice(1);
        break;
      }
    }
    const countryLabel = document.querySelector(".sign-up-2__country");
    countryLabel.textContent = pickedCountry;
    countryLabel.classList.add("sign-up-2__label--picked");
    signUpCountry.classList.remove("sign-up-country--show");
  });

  const items = document.querySelectorAll(".faq__item");
  const triggers = document.querySelectorAll(".faq__trigger");
  const content = document.querySelectorAll(".faq__content");

  triggers.forEach((trigger, idx) => {
    if (trigger.parentNode.classList.contains("faq__item--active")) slideDown(content[idx]);

    trigger.addEventListener("click", () => {
      const parent = trigger.parentNode;
      parent.classList.toggle("faq__item--active");

      if (parent.classList.contains("faq__item--active")) {
        slideDown(content[idx]);
        items.forEach((item, i) => {
          if (i !== idx) {
            slideUp(content[i]);
            item.classList.remove("faq__item--active");
          }
        });
      } else {
        slideUp(content[idx]);
      }
    });
  });

  const forAthletesBtn = document.querySelector(".how-it-works__athletes");
  const forCoachesBtn = document.querySelector(".how-it-works__coaches");
  const athletesBlock = document.querySelector(".how-it-works__athletes-block");
  const coachesBlock = document.querySelector(".how-it-works__coaches-block");

  forAthletesBtn.addEventListener("click", () => {
    forCoachesBtn.classList.remove("how-it-works__coaches--active");
    forAthletesBtn.classList.add("how-it-works__athletes--active");
    coachesBlock.classList.remove("how-it-works__coaches-block--show");
    athletesBlock.classList.add("how-it-works__athletes-block--show");
  });

  forCoachesBtn.addEventListener("click", () => {
    forAthletesBtn.classList.remove("how-it-works__athletes--active");
    forCoachesBtn.classList.add("how-it-works__coaches--active");
    coachesBlock.classList.add("how-it-works__coaches-block--show");
    athletesBlock.classList.remove("how-it-works__athletes-block--show");
  });

  const themeSwitcher = document.querySelector(".landing-header__label--checkbox");

  themeSwitcher.addEventListener("click", () => {
    landingBody.classList.toggle("theme-light");
    landingBody.classList.toggle("theme-dark");

    const images = document.querySelectorAll(".integration-image");

    for (let i = 0; i < images.length; i++) {
      if (images[i].src.endsWith("light-theme.svg")) {
        images[i].src = images[i].src.replace("light-theme.svg", "dark-theme.svg");
      } else if (images[i].src.endsWith("dark-theme.svg")) {
        images[i].src = images[i].src.replace("dark-theme.svg", "light-theme.svg");
      }
    }

    const signUpCheckboxes = document.querySelectorAll(".sign-up__trigger");
    const signUp2Checkboxes = document.querySelectorAll(".sign-up-2__trigger");

    for (let i = 0; i < signUpCheckboxes.length; i++) {
      signUpCheckboxes[i].classList.toggle("sign-up__trigger--light");
      signUpCheckboxes[i].classList.toggle("sign-up__trigger--dark");
      signUp2Checkboxes[i].classList.toggle("sign-up-2__trigger--light");
      signUp2Checkboxes[i].classList.toggle("sign-up-2__trigger--dark");
    }

    const signUpCountriesCheckboxes = document.querySelectorAll(".sign-up-country__trigger");

    for (let i = 0; i < signUpCountriesCheckboxes.length; i++) {
      signUpCountriesCheckboxes[i].classList.toggle("sign-up-country__trigger--light");
      signUpCountriesCheckboxes[i].classList.toggle("sign-up-country__trigger--dark");
    }

    const closeBtn = document.querySelector(".sign-up__close-img");
    if (closeBtn.src.endsWith("light-theme.svg")) {
      closeBtn.src = closeBtn.src.replace("light-theme.svg", "dark-theme.svg");
    } else if (closeBtn.src.endsWith("dark-theme.svg")) {
      closeBtn.src = closeBtn.src.replace("dark-theme.svg", "light-theme.svg");
    }

    const backBtn2 = document.querySelector(".sign-up-2__back-img");
    if (backBtn2.src.endsWith("light-theme.svg")) {
      backBtn2.src = backBtn2.src.replace("light-theme.svg", "dark-theme.svg");
    } else if (backBtn2.src.endsWith("dark-theme.svg")) {
      backBtn2.src = backBtn2.src.replace("dark-theme.svg", "light-theme.svg");
    }

    const backCountryBtn = document.querySelector(".sign-up-country__back-img");
    if (backCountryBtn.src.endsWith("light-theme.svg")) {
      backCountryBtn.src = backCountryBtn.src.replace("light-theme.svg", "dark-theme.svg");
    } else if (backCountryBtn.src.endsWith("dark-theme.svg")) {
      backCountryBtn.src = backCountryBtn.src.replace("dark-theme.svg", "light-theme.svg");
    }
  });

  const burgerMobile = document.querySelector(".landing-header__burger-mobile");
  const subMenu = document.querySelector(".landing-header__sub-menu");
  const subMenuFaq = document.querySelector(".landing-header__sub-menu-faq");
  const subMenuHow = document.querySelector(".landing-header__sub-menu-how");
  const faqAnchor = document.getElementById("faq");
  const howAnchor = document.getElementById("how-it-works");
  const offset = 100;

  burgerMobile.addEventListener("click", () => {
    subMenu.classList.toggle("landing-header__sub-menu--show");
    landingHeader.classList.toggle("menu-toggle");
  });
  subMenuFaq.addEventListener("click", () => {
    subMenu.classList.remove("landing-header__sub-menu--show");
    landingHeader.classList.remove("menu-toggle");
    const rect = faqAnchor.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth",
    });
  });
  subMenuHow.addEventListener("click", () => {
    subMenu.classList.remove("landing-header__sub-menu--show");
    landingHeader.classList.remove("menu-toggle");
    const rect = howAnchor.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
