const menuList = document.querySelector(".menu-list");
const dropDownMenus = document.querySelectorAll(".dropdown-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector("nav .left .links");
const dropDownLinks = document.querySelectorAll(".dropdown-link");

openMenu.addEventListener("click", () => {
  menu.style.width = "60%";
});

closeMenu.addEventListener("click", () => {
  menu.style.width = "0";
});

dropDownLinks.forEach(function (dropDownLink) {
  dropDownLink.addEventListener("click", function () {
    const className = this.getAttribute("data-dropdown");
    navLinks.classList.toggle(className);
  });
});

dropDownMenus.forEach(function (dropDownMenu) {
  dropDownMenu.addEventListener("click", function () {
    const className = this.getAttribute("data-dropdown");
    menuList.classList.toggle(className);
  });
});
