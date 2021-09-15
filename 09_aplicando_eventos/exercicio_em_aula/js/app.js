//Criação do formulário:
let formulario = document.createElement("form");
formulario.setAttribute('class', 'formulario');
document.body.appendChild(formulario);

//Seleção do formulário:
let form = document.querySelector(".formulario");


//Inserção do Título
let titulo = document.createElement("h1");
let tituloTexto = document.createTextNode("Login");

titulo.appendChild(tituloTexto);
form.appendChild(titulo);

// Inserção dos Inputs
let email = document.createElement("input"); 
email.setAttribute("placeholder", "E-mail");
email.setAttribute("type", "email");
form.appendChild(email);

let senha = document.createElement("input"); 
senha.setAttribute("placeholder", "Senha")
senha.setAttribute("type", "password");
form.appendChild(senha);

// Inserção dos botões
const botaoSubmit = document.createElement('button')
const botaoTextSumbit = document.createTextNode("Enviar")
botaoSubmit.setAttribute('type', 'submit')
//botaoSubmit.textContent = 'Enviar'
botaoSubmit.appendChild(botaoTextSumbit)
form.appendChild(botaoSubmit)

const botaoReset = document.createElement('button')
//const botaoTextReset = document.createTextNode("Cancelar")
botaoReset.setAttribute('type', 'reset')
botaoReset.textContent = 'Cancelar'
//botaoReset.appendChild(botaoTextReset)
form.appendChild(botaoReset)

// Manipulação de atributos:
email.setAttribute("disable", true);

// Remoção do atributo:
// email.removeAttribute("placeholder");

// Sugestão de estilização:
formulario.style.display = "flex";
formulario.style.maxWidth = "300px";
formulario.style.margin = "10% auto";
formulario.style.margin = "center";
formulario.style.flexDirection = "column";

// Carregamento da tela
window.onload = alert ("Seu formulário etá pronto para o preencimento")

// Cancela o envio
botaoCancelar.onclick = function () {
    confirm("Você tem certeza d que deseja cancelar o envio?")
}

// Cancelar a ação reset padrão do botão
botaoEnviar.addListener('click', function(eventoNeutralizado){
    eventoNeutralizado.preventDefault()
})