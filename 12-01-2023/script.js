import{ todos } from "./mocks.js";

//Esercizio forEach

todos.forEach((todo) => console.log(todo.id));

//Esercizio map

const todoList = todos.map((todo) => console.log(todo));

//Esercizio filter

const todoId = todos.filter(todo => todo.id >= 4)
console.log(todoId);





