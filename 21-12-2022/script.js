// Esercizio 1
function string(str1,str2=' bootcamp'){
    return str1 + str2;
}
let sum = string("Edgemony")
console.log(sum)

//Esercizio 2

const personalData = {
    firstName: "Vincenzo",
    lastName: "Costantino",
    età: 25,
    indirizzo: {
		via: "Via scaccia",
		numero: 28,
		CAP: "98057",
		citta: "Milazzo"
	},
    run: function(){
        return "Mi chiamo "+this.firstName+" "+this.lastName+" ho "+this.età+" anni mi appassiona la kikbox e abito a "+this.indirizzo.citta
    }
}
console.log(personalData.run())

//Avanzato 1

function calculator(operation,num1,num2){
    operation = prompt("Inserisci operazione matematica")    
    if (operation === "Somma" || operation === '+'){
        console.log(num1+num2);
    } else if (operation === "Sottrazione" || operation === '-'){
        console.log(num1-num2);
    } else if  (operation === "Moltiplicazione" || operation === '*'){
        console.log(num1*num2);
    }
     else if (operation === "Divisione" || operation === '/') {
        console.log(num1/num2);
    } else {
        console.log("Spiacenti la tua operazione non ha portato alcun risultato");
        console.log("Prova con: Somma, Sottrazione, Moltiplicazione, Divisione oppure +, -, / , * ");
    }
}

calculator(" ",2,6)
calculator(" ",3,6)
calculator(" ",2,5)

//Avanzato 2

