function clickCard() {
  textEl.style.color = 'red';
}
function clickBtn () {
  cardEl.remove()
}

const btnEl = document.querySelector('.btn')
const cardEl = document.querySelector('.card')
const textEl = document.querySelector('.text')


cardEl.addEventListener('click',clickCard)
btnEl.addEventListener('click',clickBtn)


