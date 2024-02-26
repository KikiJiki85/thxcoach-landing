function init() {
  const landingBody = document.querySelector(".landing__body");
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
}

document.addEventListener("DOMContentLoaded", init);
