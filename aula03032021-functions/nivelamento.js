var saudacao = "Ola papai";

console.log(saudacao);

var x = false;
var y;
y = 5;

console.log(typeof x);
var dia = 12;

function imprimirChamada2() {
    var dia = 12;
    console.log("Chamada 2 : ", dia);
}

function imprimirChamada3() {
    var dia = 12;
}

imprimirChamada3();
console.log("Chamada 3: ", dia);

imprimirChamada2();

console.log('-----------------------');

function imprimirChamada4() {
    for (var valor = 1; valor <= 9; valor++) {
        console.log('Valor dentro do For... ', valor);
    }
    console.log("Valor fora dor for da Chamada 4:", valor);
}

imprimirChamada4();

console.log('-----------------------');

function imprimirChamada5() {
    for (let valor = 1; valor <= 9; valor++) {
        console.log('Valor dentro do For... ', valor);
    }
    // console.log("Valor fora do for da Chamda 5:", valor);
}

imprimirChamada5();

function imprimirChamada6() {
    for (const valor = 1; valor <= 9; valor++) {
        console.log('Valor dentro do For... ', valor);
    }
    console.log("Valor fora do for da Chamda 6:", valor);
}



