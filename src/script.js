const navLinks = document.getElementsByClassName("closing");
const sideNav = document.getElementsByClassName("sideNav")[0];
const menu = document.getElementsByClassName("menu")[0];
const closeNav = document.getElementsByClassName("sideNavClose")[0];


menu.addEventListener("click", () => {
  sideNav.style.display = "block";
});
closeNav.addEventListener("click", () => {
  sideNav.style.display = "none";
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    sideNav.style.display = "none";
  });
}























