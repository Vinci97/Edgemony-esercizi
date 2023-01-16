//Primo esercizio
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
const buttonEl = document.querySelector(".btn")
const loaderEl = document.querySelector(".loading")
const productsElement = document.querySelector(".productsList");

buttonEl.addEventListener("click", () => {
    buttonEl.style = "display: none;"
    loaderEl.textContent = "loading..."
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dataManipulation(data);
      })
      .catch(error => {
        loaderEl.textContent = "c'è stato un errore";
        console.log("MIO ERRORE: ", error);
      });
  });
const dataManipulation = data =>{
    loaderEl.textContent = ""

    data.forEach((item) => {    
        const divCard = document.createElement("div");
        divCard.className = "card"

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;
        const indexContainer = document.createElement("p");
        indexContainer.textContent = item.price;
        const imgEl = document.createElement("img");
        imgEl.setAttribute = (item.images[2]);

        divCard.append(imgEl, titleElement, indexContainer);

        productsElement.appendChild(divCard);
        
    });
  }