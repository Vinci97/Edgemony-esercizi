
const img4 = document.querySelector(".img4")

const imagesContain = document.querySelector(".img-contain") 

const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const btn3El = document.querySelector(".btn3");


const btnAll = document.querySelectorAll(".btn");

const images = [
  "https://picsum.photos/500/500?1",
  "https://picsum.photos/500/500?2",
  "https://picsum.photos/500/500?3",
    
]

btn1El.addEventListener("click",() => {
        btn1El.style.backgroundColor = 'black';btn2El.style.backgroundColor = 'white';
        btn3El.style.backgroundColor = 'white';
        img4.setAttribute("src", images[0]);

})
btn2El.addEventListener("click",() => {
        btn1El.style.backgroundColor = 'white';
        btn2El.style.backgroundColor = 'black';
        btn3El.style.backgroundColor = 'white';
        
        img4.setAttribute("src", images[1])

})
btn3El.addEventListener("click",() => {
    btn1El.style.backgroundColor = 'white';
    btn2El.style.backgroundColor = 'white';
    btn3El.style.backgroundColor = 'black';
        img4.setAttribute("src", images[2])

})


