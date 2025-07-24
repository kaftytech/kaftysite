const navLinks = document.getElementsByClassName("closing");
const sideNav = document.getElementsByClassName("sideNav")[0];
const menu = document.getElementsByClassName("menu")[0];
const closeNav = document.getElementsByClassName("sideNavClose")[0];
const card=document.getElementsByClassName("card");
const topParent=document.getElementsByClassName("topParent")[0];
const modelContainer=document.getElementsByClassName("modelContainer")[0];
let rndm;
rndm=Math.floor(Math.random()*19)

const dubCards = [];
for (let i = 0; i < card.length; i++) {
  const cloned = card[i].cloneNode(true); 
  dubCards.push(cloned);
}
console.log(dubCards.length);
topParent.appendChild(dubCards[rndm]);
topParent.appendChild(dubCards[rndm1()]);
topParent.appendChild(dubCards[rndm2()]);
topParent.appendChild(dubCards[rndm2()+4]);
topParent.appendChild(dubCards[rndm2()+2]);
function rndm1(){
  

  if (rndm>=19) {
    return rndm-19;
  }
  return rndm+4

}
function rndm2(){
  

  if (rndm>=19) {
    return rndm-19;
  }
  return rndm+1

}
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
var search = document.getElementById("search");
search.addEventListener('focusout',()=>{

  modelContainer.style.display="none";
})

const newDubCards=[];
for (let i = 0; i < dubCards.length; i++) {
  const cloned = dubCards[i].cloneNode(true); 
  newDubCards.push(cloned);
}

for (let index = 0; index < newDubCards.length; index++) {
  modelContainer.appendChild(newDubCards[index])
  
}

search.addEventListener('focus',()=>{

 
  modelContainer.style.display="flex";
    



search.addEventListener("keyup", function () {
  var enterdValue = search.value.toUpperCase();
  for (count = 0; count < newDubCards.length; count++) {
    var productName = newDubCards[count].querySelector("h3").textContent;
    var productName1 = newDubCards[count].querySelector("p").textContent;
    var productName2 = newDubCards[count].querySelector(".searchContent").textContent;
  
    
    if (productName.toLocaleUpperCase().indexOf(enterdValue) < 0 && productName1.toLocaleUpperCase().indexOf(enterdValue)<0  && productName2.toLocaleUpperCase().indexOf(enterdValue)<0 ) {
      modelContainer.getElementsByClassName('card')[count].style.display="none"
      
    }
     else {
      modelContainer.getElementsByClassName('card')[count].style.display="flex"
    }

  }
});
})










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










