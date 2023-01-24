const createEL = (type) => document.createElement(type);
const queryS = (element)=> document.querySelector(element);
const bodyEl = queryS("body");

const cardEl = (data)=>{
    const divCard = createEL("div");
    divCard.className = "card";
    const imgCnt = createEL("div");
    imgCnt.className = "img-container";
    const cont = createEL("div");
    cont.className = "cont";

    const gender = createEL("p");
    gender.textContent = "gender: "+data.gender; 
    const birthDate = createEL("p");
    birthDate.textContent ="birthDate: "+ data.birthDate; 
    const name =createEL("p");
    name.textContent=data.firstName+" "+data.lastName;

    const email = createEL("p");
    email.textContent = data.email; 
    const phone = createEL("p");
    phone.textContent = data.phone; 

    const image = createEL("img");
    image.setAttribute('src',data.image);
    image.setAttribute('alt','#');

    const line = createEL("div");
    line.className = "line";

    const line2 = createEL("div");
    line2.className = "line2";

   

   imgCnt.append(image,name,email,phone);
   cont.append(gender,birthDate)
   divCard.append(imgCnt,line,cont);
    return divCard;
}

const GET = async () => {
    const prod = await fetch("https://dummyjson.com/users");
    const data = await prod.json();
    return data;
};

GET().then((data) => data.users.map(item=> bodyEl.appendChild(cardEl(item))));

