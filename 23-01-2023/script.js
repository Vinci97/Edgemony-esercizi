const createEL = (type) => document.createElement(type);
const queryS = (element)=> document.querySelector(element);
const BASE_URL = "https://dummyjson.com/";
const BASE_URL2 = "https://dummyjson.com/quotes";
const bodyEl = queryS("body");

const cardEl = (data)=>{

    const divCard = createEL("div");
    divCard.className = "card";
    const opacity = createEL("div");
    opacity.className = ("opacity");

    const authorEl = createEL("h3");
    authorEl.textContent = data.author; 
    const line = createEL("div")
    line.className = "line";
    const quoteEl = createEL("p")
    quoteEl.textContent= data.quote;
    opacity.append(authorEl,line,quoteEl);
    divCard.appendChild(opacity);
    
    return divCard;
}


const GET = async (endpoint) => {
    const prod = await fetch(BASE_URL + endpoint);
    const data = await prod.json();
    return data;
}

GET("quotes/7").then((data)=>
 bodyEl.appendChild(cardEl(data)))





