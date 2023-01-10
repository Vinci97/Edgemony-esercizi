const bodyEl = document.body;
const heroEl = document.createElement('div');
const imgEl = document.createElement('img');
const titleEl = document.createElement('h1');
const paragraph = document.createElement('h3');

const products = [
    {
      id: 1,
      title: 'primo prodotto',
      description: 'descrizione del primo prodotto',
      img: 'https://picsum.photos/200/200?1'
    },
    {
      id: 2,
      title: 'secondo prodotto',
      description: 'descrizione del secondo prodotto',
      img: 'https://picsum.photos/200/200?2'
    },
    {
      id: 3,
      title: 'terzo prodotto',
      description: 'descrizione del terzo prodotto',
      img: 'https://picsum.photos/200/200?3'
    }
  ];

 

const sectionEl = document.createElement('section')
const createCard = (title, img, description) => {
    
const cardEl = document.createElement('div');
const img2El = document.createElement('img');
const title2El = document.createElement('h2');
const descriptionEl = document.createElement('p');
cardEl.className = 'card';
cardEl.setAttribute('id', 'card1');
img2El.className = 'card__img';
img2El.setAttribute('src', img);
img2El.setAttribute('alt', title);

title2El.className = 'cardTitle';
title2El.textContent = title;

descriptionEl.className = 'card__description';
descriptionEl.textContent = description;
cardEl.append(imgEl, titleEl, descriptionEl);
sectionEl.appendChild(img2El, title2El, descriptionEl)
}
for (let product of products) {
    createCard(product.title, product.img, product.description);
  }


heroEl.className = 'hero';
imgEl.setAttribute ('src','./img/jefferson-santos-9SoCnyQmkzI-unsplash.jpg' )
imgEl.setAttribute ('alt','lorem picsum')
imgEl.className = 'imgHero'
titleEl.textContent = 'Benvenuti';
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos!'

heroEl.append(titleEl,paragraph,imgEl)
bodyEl.append(heroEl,sectionEl);