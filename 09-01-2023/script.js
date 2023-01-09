let userOperation = prompt("inserisci operazione");
let insNum = prompt("inserisci numero");
let insNum2 = prompt("inserisci numero");

sum=() => {
    let sumCalc = parseInt(insNum)+parseInt(insNum2);
    console.log(sumCalc);
}

sub=() => {
    let subNum = parseInt(insNum)-parseInt(insNum2);
    console.log(subNum);
}

multi=() => {
    let multiNum = parseInt(insNum)*parseInt(insNum2);
    console.log(multiNum);
}

divi=() => {
    let diviNum = parseInt(insNum)/parseInt(insNum2);
    console.log(diviNum);
}
together=() => {
    sum();
    sub();
    multi();
    divi();
 }

    if(userOperation === "+"){
        sum();
    }else if(userOperation ==="-"){
        sub();
    }else if(userOperation ==="/"){
        divi();
    }else if(userOperation==="*"){
        multi();
    }else if(userOperation ==="insieme"){
        together();
    }
    else console.log("Prova con: +,*,-,/ oppure isieme ");