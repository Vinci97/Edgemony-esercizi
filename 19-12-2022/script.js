let Operazione = prompt("Inserire Operazione");
let primoNumero = prompt ("kPranzocal ");
let SecondoNumero = prompt("kcal Cena");
let Somma = parseInt(primoNumero) + parseInt(SecondoNumero);
let Sottrazione = parseInt(primoNumero) - parseInt(SecondoNumero);
let Moltiplicazione = parseInt(primoNumero) * parseInt(SecondoNumero);
let Divisione = parseInt(primoNumero) / parseInt(SecondoNumero);

if (Operazione == "Somma"){
    console.log("la somma e`: " + Somma);
} else if (Operazione == "Sottrazione"){
    console.log("la Sottrazione e`: " + Sottrazione);
} else if  (Operazione == "Moltiplicazione"){
    console.log("la Moltiplicazione e`: " + Moltiplicazione);
}
 else {
    console.log("la Divisione e`: " + Divisione);
}




