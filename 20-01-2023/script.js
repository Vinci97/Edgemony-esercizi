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
  titleElement.textContent = item.title.slice(0, 10);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = item.description.slice(0, 30);

  const indexContainer = document.createElement("p");
  indexContainer.textContent = "$ " + item.price;

  const addBtn = document.createElement("button")
  addBtn.textContent = 'Aggiungi al carrello';

  const imgEl = document.createElement("img");
  imgEl.setAttribute('src',item.category.image);
  imgEl.setAttribute('alt','#');

  addBtn.addEventListener("click", () => {
    cartPopulator(item);
  }); 
        

  divCard.append(imgEl, titleElement,descriptionEl, indexContainer,addBtn);

  productsElement.appendChild(divCard);
  loaderEl.style.display = "none";
        
  });
};

const cartCreation = () => {
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className ='box'
    cartEl.innerHTML = `<p>Q.ty: ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>`;
    const deleteEl = document.createElement("div");
    deleteEl.className = 'delete'
    deleteEl.textContent = 'x';
    deleteEl.addEventListener("click", () => {
    cartEl.remove();
    cart.splice(index, 1)
    });
    cartEl.append(deleteEl)
    tendina.appendChild(cartEl);
  });
};

const cartPopulator = item => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter(element => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};


fetch("https://api.escuelajs.co/api/v1/products")
  .then(res=>res.json())
  .then(data => {
    const newData = data.filter(item =>item.category.id === 1)
    newData.forEach(element =>{
      cartCreation(element);
      console.log(element);
    
    })
  })