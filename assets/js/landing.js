function init() {
  const languageSwitch = document.querySelector(".landing-header__right-side");
  const linkSecond = document.querySelector(".landing-header__link-second");
  const arrow = document.querySelector(".landing-header__arrow");
  languageSwitch.addEventListener("click", () => {
    linkSecond.classList.toggle("landing-header__link-second--active");
    languageSwitch.classList.toggle("landing-header__right-side--active");
    arrow.classList.toggle("landing-header__arrow--rotate");
  });
}

document.addEventListener("DOMContentLoaded", init);
