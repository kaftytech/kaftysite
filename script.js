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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz7CRL3o6XS7rRQ11CHbSoHlhii6DxnRDH4zTMoqeluzGQ1XtlfHJ18h1hbzdaf4bpS/exec";
const form = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(
      (response) => form.reset(),
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
