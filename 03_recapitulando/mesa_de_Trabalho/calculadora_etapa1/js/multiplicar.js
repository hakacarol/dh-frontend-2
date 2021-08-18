// Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. 
// Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. Importante::
// Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

let introducao = alert(`
Hey, vamos fazer conta de multiplicação 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let multiplicacao = num1 * num2;

document.querySelector('h1').innerText = num1 + ' x ' + num2 + ' = ' + multiplicacao;
