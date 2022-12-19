let userOperator = prompt("Inserire Operazione");
let firstNumber = prompt ("Primo numero ");
let secondNumber = prompt("Secondo numero");
let sum = parseInt(firstNumber) + parseInt(secondNumber);
let subtraction = parseInt(firstNumber) - parseInt(secondNumber);
let multiplication = parseInt(firstNumber) * parseInt(secondNumber);
let division = parseInt(firstNumber) / parseInt(secondNumber);

if (userOperator == "Somma"){
    console.log("la somma dei numeri è: " + sum);
} else if (userOperator == "Sottrazione"){
    console.log("la Sottrazione e`: " + subtraction);
} else if  (userOperator == "Moltiplicazione"){
    console.log("la Moltiplicazione dei numeri è: " + multiplication);
}
 else if (userOperator == "Divisione") {
    console.log("la Divisione dei numeri è: " + division);
} else {
    console.log("Spiacenti la tua operazione non ha portato alcun risultato");
    console.log("Prova con: Somma, Sottrazione, Moltiplicazione, Divisione  ");
}

switch (userOperator) {
    case "Somma":
    console.log("la somma dei numeri è: " + sum);
    break;        
    case "Sottrazione":
    console.log("la Sottrazione dei numeri è: " + subtraction);
    break;        
    case "Moltiplicazione":
    console.log("la Moltiplicazione dei numeri è: " + multiplication);
    break;        
    case "Divisione":
    console.log("la Divisione dei numeri è: " + division);
    break;
    default:
        console.log("Spiacenti la tua operazione non ha portato alcun risultato.");
        console.log("Prova con: Somma, Sottrazione, Moltiplicazione, Divisione.  ");
}

    