// Se chegamos tão longe, é porque o tech leader da equipe está bastante satisfeito e, portanto, atribuiu novas tarefas:
// Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.
// Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números.
// Mostrar os resultados no console.
// Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
// Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console
// Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.

let introducao = alert(`Hey, bora fazer contas? 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let dividir = function () {
    if (num2 == "0") {  
        return 'Nunca dividirás por 0 💀';
    } else {
        return num1 / num2;
    }
}

let introducao = alert(`
Hey, vamos fazer conta de multiplicação 😎`);

let num1 = prompt("Primeiro numero: ");
num1 = parseFloat(num1);

let num2 = prompt("Segundo  numero: ");
num2 = parseFloat(num2);

let multiplicacao = num1 * num2;

document.querySelector('h1').innerText = num1 + ' x ' + num2 + ' = ' + multiplicacao;
document.querySelector('h1').innerText = num1 + ' + ' + num2 + ' = ' + soma;
