function init() {
  const languageSwitch = document.querySelector(".landing-header__right-side");
  const languageFi = document.querySelector(".landing-header__link-fi");
  const languageEn = document.querySelector(".landing-header__link-en");
  languageSwitch.addEventListener("click", () => {
    languageFi.classList.toggle("landing-header__link-fi--active");
    languageEn.classList.toggle("landing-header__link-en--active");
    languageSwitch.classList.toggle("landing-header__right-side--active");
  });
}

document.addEventListener("DOMContentLoaded", init);
