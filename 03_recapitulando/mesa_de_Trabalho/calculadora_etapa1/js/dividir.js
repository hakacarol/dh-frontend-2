// Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo.
// Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos.
// Importante: Considere o cenário em que se um dos dois parâmetros for zero,
// a função retornará "Não se pode dividir por zero".

let introducao = alert(`Hey, vamos fazer conta de divisão 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let dividir = function () {
    if (num2 == "0") {  
        return 'Nunca dividirás por 0 💀';
    } else {
        return num1 / num2;
    }
}

document.querySelector('h1').innerText = num1 + ' / ' + num2 + ' = ' +  dividir(num1, num2);



