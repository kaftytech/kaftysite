const navLinks = document.getElementsByClassName("closing");
const sideNav = document.getElementsByClassName("sideNav")[0];
const menu = document.getElementsByClassName("menu")[0];
const closeNav = document.getElementsByClassName("sideNavClose")[0];
const card=document.getElementsByClassName("card");
const topParent=document.getElementsByClassName("topParent")[0];
const modelContainer=document.getElementsByClassName("modelContainer")[0];
let rndm;

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

rndm=Math.floor(Math.random()*19)

const dubCards = [];
for (let i = 0; i < card.length; i++) {
  const cloned = card[i].cloneNode(true); 
  dubCards.push(cloned);
}


function rndm1(){
  
  let a=rndm+5
  if (rndm>=19) {
    return rndm-19;
  }
   return a;

}
function rndm2(){
  

  var a= rndm+1
  if (rndm>=19) {
    return rndm-19;
  }
  return a

}


topParent.appendChild(dubCards[rndm]);
topParent.appendChild(dubCards[rndm1()]);
topParent.appendChild(dubCards[rndm2()]);
topParent.appendChild(dubCards[rndm2()+1]);
topParent.appendChild(dubCards[rndm2()-1]);
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
  if (newDubCards[index]) {
    
  modelContainer.append(newDubCards[index])
  }
  
}

search.addEventListener('focus',()=>{

 
  modelContainer.style.display="flex";
    
console


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





















