let elements  = [];

for (let i = 0; i<10 ; i++ ){
    elements.push(prompt("lista della spesa"))
}
console.log(elements)

for (let element of elements) {
  console.log(element);
}

for (let elementsIndex in elements) {
  console.log(elementsIndex);
}