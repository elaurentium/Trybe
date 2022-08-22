// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // console.log(numbers);

// // let sum = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
//     //     sum += numbers[i];
//     // }

// // console.log(sum);

// // for (let i = 0; i < numbers.length; i += 1) {
// //     sum += numbers[i] / numbers.length;
// // }
// // if (sum > 20) {
// //     console.log('valor maior que 20')
// // } else {
// //     console.log('valor menor ou igual a 20');
// // }

// // console.log(sum);

// let maior = 0;
// let numbers = [2, 3, 5];

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log('esse é o número maior', maior);
//     if (maior < numbers[i]) {
//         maior = numbers[i];
//         console.log(maior);
//     }
// }

// console.log(maior);

// // let resulta = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 !== 0) {
// //         resulta += 1;
// //     }
// // }

// // if (resulta === 0) {
// //     console.log('valor maior que 20');
// // } else {
// //     console.log(result);
// // }

// // let menor = numbers[0];

// // for (let i = 0; i < numbers.length; i += 1) {
// //     if (menor > numbers[i]) {
// //         menor = numbers[i];
// //     }
// // }

// // console.log(menor);


// let numbers = [];
// let sum = 0; 

// for (let index = 0; index <= 50; index += 1) {
//     sum+=index;
// }

// console.log(sum);
// let divisores = 0;

// for (let index = 2; index <= 150; index += 1) {
//     index % 3 === 0
//     divisores += 1
//     if(divisores === 50) {
//         console.log('mensagem secreta');
//     } 
// }

let player = 'tesoura';
let player1 = 'pedra';

let jogo = 'pedra' > 'tesoura' || 'tesoura' > 'papel' || 'papel' > 'pedra';

if (player > player1) {
    console.log('player 1 won');
} else if (player1 > player) {
    console.log('player 2 won')
} else if (player === player1) {
    console.log('empate');
}