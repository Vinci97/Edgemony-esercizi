
// fetch('https://api.escuelajs.co/api/v1/products')
//   .then(res=>res.json())
//   .then(data => dataManipulation(data));

//   const dataManipulation = data =>{
//     data.forEach((item) => {
//         console.log(item.category.name)
//         console.log(item.description)
//         console.log("-------------")
//     });
//   }
//Secondo esercizio
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".hamburger")
const loaderEl = document.querySelector(".loading")
const productsElement = document.querySelector(".productsList");
const tendina = document.querySelector(".tendina"); 



const cart = [];

buttonEl.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then(res => res.json())
  .then(data => {
    dataManipulation(data);
        
  })
  .catch(error => {
    loaderEl.textContent = "c'è stato un errore";
    console.log("MIO ERRORE: ", error);
  });
const dataManipulation = data =>{
data.forEach((item) => {    
  const divCard = document.createElement("div");
  divCard.className = "card"

  const titleElement = document.createElement("h3");
  titleElement.textContent = item.title.slice(10);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = item.description.slice(30);

  const indexContainer = document.createElement("p");
  indexContainer.textContent = item.price;

  const addBtn = document.createElement("button")
  addBtn.textContent = 'Aggiungi al carrello';

  const imgEl = document.createElement("img");
  imgEl.setAttribute('src',item.category.image);
  imgEl.setAttribute('alt','#');

  addBtn.addEventListener("click", () => {
    cart.push(item);
    alert("Hai aggiunto un elemento al carrello")
    cartCreation();
    console.log(cart) }); 
        

  divCard.append(imgEl, titleElement,descriptionEl, indexContainer,addBtn);

  productsElement.appendChild(divCard);
  loaderEl.style.display = "none";
        
  });
};
const cartCreation = () => {
  tendina.innerHTML = "";
  cart.forEach(item => {
    const cartEl = document.createElement("div");
    cartEl.innerHTML = `<p class="pippo">${item.title}</p><p>${item.price}</p>`;
    const deleteEl = document.createElement("div");
    deleteEl.className = 'delete'
    deleteEl.textContent = 'x';
    const box = document.createElement("div")
    box.className= 'box';

    deleteEl.addEventListener("click", () => {
      box.parentNode.removeChild(box);
    });
    box.append(cartEl,deleteEl )
    tendina.appendChild(box);
  });
};


