/*
Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:
Crie um formulário com campos de input e botões de submit e reset.
Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
Mostre um alerta na página quando a tela terminar de ser carregada.
Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag p e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
*/
// Criando a estrutura

const titulo = document.createElement('h1')
titulo.textContent = 'login'

const form = document.createElement('form')
const inputEmail = document.createElement('input')
inputEmail.setAttribute('type', 'email')
inputEmail.setAttribute('placeholder', 'Email')

const inputSenha = document.createElement('input')
inputSenha.setAttribute('type', 'password')
inputSenha.setAttribute('placeholder', 'Senha')

const p = document.createElement ('p')
const span = document.createElement ('span')

const div = document.createElement('div')

const botaoSubmit = document.createElement('button')
botaoSubmit.setAttribute('type', 'submit')
botaoSubmit.textContent = 'ENVIAR'


const botaoReset = document.createElement('button')
botaoReset.setAttribute('type', 'reset')
botaoReset.textContent = 'CANCELAR'

form.appendChild(titulo)
form.appendChild(inputEmail)
form.appendChild(inputSenha)
form.appendChild(div)
form.appendChild(p)
form.appendChild(span)

div.appendChild(botaoSubmit)
div.appendChild(botaoReset)


const body = document.querySelector('body')

body.appendChild(form)

// onload - ex Netflix
body.onload = () => {
    alert('A tela foi carregada.')
}

titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'red'
})

titulo.addEventListener('mouseout', () => {
    titulo.style.color = 'black'
})

// titulo.onmouseover = () => {
//     titulo.style.color = 'red'
// }

// titulo.onmouseout = () => {
//     titulo.style.color = 'black'
// }

let keypressCount = 1
document.addEventListener('keypress', (e) => {
    p.innerText += e.key
    span.innerHTML = keypressCount++
})