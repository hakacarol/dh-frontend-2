let introducao = alert(`
Hey, vamos fazer conta de multiplicação 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let multiplicacao = num1 * num2;

document.querySelector('h1').innerText = num1 + ' x ' + num2 + ' = ' + multiplicacao;
