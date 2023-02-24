import { meteoCardGen,qS } from "./utils.js";
const section = qS('section');
const Button = qS('.myButton')
const input = qS('.myImput')
const citta = ["Roma,it,ISO+3166","Palermo","Potenza","Venezia","Aosta","Perugia","Trento","Firenze","Cagliari","Bari","Torino","Campobasso","Ancona","Genova","Milano","Trieste","Bologna","Napoli","Catanzaro","Aquila"];
citta.sort();
let fetchCitta = [];
let searchedValue = "";
Promise.all(
    citta.map(item =>fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&lang=en&units=metric&appid=f3a68efaccb877c2e30750fefdd7d0f7`).then(res => res.json()
))).then(data=>{
    fetchCitta = data;
    data.map(item => section.appendChild(meteoCardGen(item)));
    input.addEventListener("keyup", ()=> {
        if (input.value.length >= 3) {
            Button.style.display = "";
        } else {
            Button.style.display = "none";
        }
      });

    input.addEventListener('input',(event)=>{
        onPostsDelete()
        searchedValue = event.target.value;
        fetchCitta.filter((item) => 
        {
            if(item.name.toLowerCase().includes(searchedValue.toLowerCase())){
                    section.appendChild(meteoCardGen(item));
            }
        })
    })
    // Button.addEventListener('click',()=>{
    //     const filterText = input.value.toLowerCase();
    //     const postsEls = document.querySelectorAll('.Container');
        
    //     postsEls.forEach((card)=> {
    //       const cityName = card.qS('.name').textContent.toLowerCase();
    //       if (cityName.includes(filterText)) {
    //         card.style.display = "";
    //       } else {
    //         card.style.display = "none";
    //       }
    //     });
       
    // })
    const Select = qS("#mySelect");

fetchCitta.forEach(item => {
  const option = document.createElement("option");
  option.text = item.name;
  Select.add(option);
});

Select.addEventListener("change", ()=> {
  const selectedArrayName = Select.value;
  const postsEls = document.querySelectorAll('.Container');
  postsEls.forEach((card)=> {
    if (card.textContent.includes(selectedArrayName)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

})


const onPostsDelete = ()=>{
    const postsEls = document.querySelectorAll('.Container');
    postsEls.forEach((post)=> post.remove())

}

