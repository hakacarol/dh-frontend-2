// Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. 
// Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.
let introducao = alert(`
Hey, vamos fazer conta de soma 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let soma = num1 + num2;

document.querySelector('h1').innerText = num1 + ' + ' + num2 + ' = ' + soma;