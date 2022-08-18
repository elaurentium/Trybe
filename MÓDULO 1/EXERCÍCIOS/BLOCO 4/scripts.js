let a = 10;
let b = 12;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const firstValue = 10;
const secondValue = 30;

if (firstValue > secondValue) {
    console.log("Primeiro valor é maior");
} else {
    console.log("Segundo valor é maior");
}

const thirdValue = 60;

if (firstValue > secondValue && firstValue > thirdValue) {
    console.log('o maior é o primeiro');
} 
else if (secondValue > firstValue && secondValue > thirdValue) {
    console.log('o maior é o segundo');
} else {
    console.log('o maior é o terceiro');
}

let value = -1;

if (value == 1) {
    console.log(true);
} else if (value == -1) {
    console.log(false);
} else {
   console.log('0')
}

let perimetro = 0;
let area = 0;
let altura = 0;

let soma = perimetro + area + altura;

let allSoma = perimetro > 0 && area > 0 && altura > 0;

if (allSoma) {
    if (soma === 180) {
        console.log('true');
    } else {
        console.log('false');
    }
} else {
    console.log('erro');
}

const xi = 3;
const xu = 2;
const am = 5;

if (xi % 2 || xu % 2 || am % 2) {
    console.log(true);
} else {
    console.log(false);
}

const custo = 10;
const venda = 20;

if (custo >= 0 && venda >= 0) {
    const totalCustoProduto = custo * 1.2;
    const lucro = venda - custo * 1000;
} else {
    console.log('erro');
}