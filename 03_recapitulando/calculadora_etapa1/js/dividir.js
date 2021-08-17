let introducao = alert(`
Hey, vamos fazer conta de divisão 😎`);

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



