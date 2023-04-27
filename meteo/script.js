import { meteoCardGen, qS } from "./utils.js";
const section = qS('section');
const searchForm = qS('#searchForm');
const input = qS('.myInput');
const citta = ["Roma,it,ISO+3166", "Palermo", "Potenza", "Venezia", "Aosta", "Perugia", "Trento", "Firenze", "Cagliari", "Bari", "Torino", "Campobasso", "Ancona", "Genova", "Milano", "Trieste", "Bologna", "Napoli", "Catanzaro", "Aquila"];
citta.sort();
let fetchCitta = [];
let searchedValue = "";
Promise.all(
  citta.map(item => fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&lang=en&units=metric&appid=f3a68efaccb877c2e30750fefdd7d0f7`).then(res => res.json()))
).then(data => {
  fetchCitta = data;
  data.map(item => section.appendChild(meteoCardGen(item)));

  input.addEventListener("keyup", () => {
    if (input.value.length >= 3) {
      searchForm.querySelector('.myButton').style.display = "";
    } else {
      searchForm.querySelector('.myButton').style.display = "none";
    }
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    onPostsDelete();
    searchedValue = input.value;
    const newArrey = fetchCitta.filter((item, index) => citta[index].split(',')[0].toLowerCase() === searchedValue.toLowerCase());
    newArrey.map(item => section.appendChild(meteoCardGen(item)));
  });

  const Select = qS("#mySelect");

  fetchCitta.forEach(item => {
    const option = document.createElement("option");
    option.text = item.name;
    Select.add(option);
  });

  Select.addEventListener("change", () => {
    const selectedArrayName = Select.value;
    const postsEls = document.querySelectorAll('.Container');
    postsEls.forEach((card) => {
      if (card.textContent.includes(selectedArrayName)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

});

const onPostsDelete = () => {
  const postsEls = document.querySelectorAll('.Container');
  postsEls.forEach((post) => post.remove());
}