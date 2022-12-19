let userName = prompt("Ciao! Come ti chiami?");
let kcalLunch = prompt ("kcal Pranzo");
let kcalDinner = prompt("kcal Cena");
let totKcal = parseInt(kcalLunch) + parseInt(kcalDinner);

if (totKcal >= 2000){
    console.log("Congratulazioni "+ userName +" hai ragiunto le tue kcal giornaliere!");
} else {
    console.log("Mi dispiace "+ userName +"  non hai ragiunto le tue kcal giornaliere!");
}

// Operatore ternario

totKcal >= 2000 ? console.log("Congratulazioni "+ userName +" hai ragiunto le tue kcal giornaliere!") : console.log("Mi dispiace "+ userName +"  non hai ragiunto le tue kcal giornaliere!");