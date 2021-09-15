/*
Nós, atributos e eventos
Objetivo
Construir um formulário utilizando javascript e 
inserindo estilos e propriedades de acordo com os eventos de mouse e teclado.

Construa um formulário, usando javascript,
com no mínimo três campos de input e esses campos de input terão comportamentos a decorrer de algumas condições.

Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, 
os campos receberão a propriedade “disabled”, 

mas quando o mouse estiver acima desse campo ele vai perder essa propriedade possibilitando 
a modificação do conteúdo pelo usuário. 

Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a propriedade disabled novamente.
*/

// Criando a estrutura do formulario
// Criando nós de elementos
const titulo = document.createElement('h1')
titulo.textContent = 'Cadastre-se'

const main = document.createElement('main')

const form = document.createElement('form')

const inputName = document.createElement('input')
inputName.setAttribute('type', 'name')
inputName.setAttribute('placeholder', 'Nome Completo')

const inputEmail = document.createElement('input')
inputEmail.setAttribute('type', 'email')
inputEmail.setAttribute('placeholder', 'E-mail')

const inputSenha = document.createElement('input')
inputSenha.setAttribute('type', 'password')
inputSenha.setAttribute('placeholder', 'Senha')

const div = document.createElement('div')

const botaoSubmit = document.createElement('button')
botaoSubmit.setAttribute('type', 'submit')
botaoSubmit.textContent = 'ENVIAR'

const botaoReset = document.createElement('button')
botaoReset.setAttribute('type', 'reset')
botaoReset.textContent = 'CANCELAR'

// Anexando elementos
form.appendChild(titulo)
form.appendChild(inputName)
form.appendChild(inputEmail)
form.appendChild(inputSenha)

form.appendChild(div)

div.appendChild(botaoSubmit)
div.appendChild(botaoReset)

const body = document.querySelector('body')

main.appendChild(form)

body.appendChild(main)

// Aplicando disabled
// botãoEnviar.addListener('click', function(eventoNeutralizado){
//     eventoNeutralizado.preventDefault()
// })
// titulo.addEventListener('mouseover', () => {
//     titulo.style.color = 'red'
// })

// titulo.addEventListener('mouseout', () => {
//     titulo.style.color = 'black'
// })

// //inputEmail.setAttribute("disabled", true);
// inputEmail.addEventListener('mouseover', () => {
//     inputEmail.setAttribute("disabled", false)
// })


//inputEmail.setAttribute("disabled", true);
inputEmail.addEventListener('mouseover', () => {
    inputEmail.setAttribute("disabled", false)
})

// Estilizando
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'

titulo.style.color = '#d85812fe'

main.style.backgroundColor = '#DFE7F1'
main.style.borderRadius= '1.5rem'
main.style.padding = '3vw'
main.style.width = '25rem'

form.style.display = 'flex'
form.style.textAlign = 'center'
form.style.flexDirection = 'column'

inputName.style.padding = '0.5rem'
inputName.style.borderRadius = '0.5rem'
inputName.style.border = '1px dotted #2c5078'
inputName.style.marginBottom = '0.6rem'

inputEmail.style.padding = '0.5rem'
inputEmail.style.borderRadius= '0.4rem'
inputEmail.style.border = '1px dotted #2c5078'
inputEmail.style.marginBottom = '0.6rem'

inputSenha.style.padding = '0.5rem'
inputSenha.style.borderRadius = '0.4rem'
inputSenha.style.border = '1px dotted #2c5078'
inputSenha.style.marginBottom = '0.6rem'

botaoSubmit.style.padding = '0.5rem'
botaoSubmit.style.borderRadius = '0.8rem'
botaoSubmit.style.border = '1px dotted #2c5078'
botaoSubmit.style.margin = '0.3vw'
botaoSubmit.style.fontWeight = 'bold'
botaoSubmit.style.paddingLeft = "1.4rem"
botaoSubmit.style.paddingRight = "1.4rem"

botaoReset.style.padding = '0.5rem'
botaoReset.style.borderRadius = '0.8rem'
botaoReset.style.border = '1px dotted #2c5078'
botaoReset.style.margin = '0.3vw'
botaoReset.style.fontWeight = 'bold'