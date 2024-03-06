let menu = document.querySelector("nav.navbar .menu");
let closeBtn = document.querySelector("nav.navbar .menu button.close");
let openBtn = document.querySelector("nav.navbar .navbar__menu__btn");
let contactLink = document.querySelector("nav.navbar .menu .contact a");
let links = [
  ...Array.from(document.querySelectorAll("nav.navbar .menu .links")),
  contactLink,
];

openBtn.addEventListener("click", function () {
  if (menu.classList.contains("disabled")) {
    menu.classList.remove("disabled");
  }
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("disabled");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeBtn.click();
  });
});
