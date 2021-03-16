//Declaração normal de uma função
const soma1 = function(a, b) {
    return a + b;
}

//Declaração de uma arrow function =>
//As chaves indicam o corpo da função
const soma2 = (a, b) => {
    return a + b;
}

//Função que não apresenta nada no seu copor além do return
const dividir = (a, b) => {
    return a/b;
}

//Função que pode ser declarada e uma expressão
const dividir2 = (a, b) => a/b;

//Função com apenas um argumento
const somarUm = (valor) => {
    return valor + 1;
}

//Função anterior reescrita com forma de expressão
const somarValorUm = (valor) => valor + 1;


//Chamada da função e declaração
console.log(soma1(20,10));
console.log(soma2(1, 2));
console.log(dividir2(10, 5));
console.log(somarUm(10));
console.log(somarValorUm(12));
