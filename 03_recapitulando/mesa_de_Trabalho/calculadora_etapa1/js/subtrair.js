// Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo.
// Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

let introducao = alert(`
Hey, vamos fazer conta de subtração 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let subtracao = num1 - num2;

document.querySelector('h1').innerText = num1 + ' - ' + num2 + ' = ' + subtracao;

