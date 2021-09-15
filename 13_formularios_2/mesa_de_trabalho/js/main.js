// Atividade
// Crie um formulário e o mesmo deve desabilitar o botão de submit caso alguma regra não seja cumprida. 
// Teremos de indicar com a cor vermelha se há algum campo que tem erros.

// Regras:

// - Nome completo
//     Deve conter ao menos duas palavras.
//     Cada nome deve ter mais de uma letra.
//     O campo não pode ter mais de 150 caracteres.
//     O campo não pode ser vazio.
//     Não pode ter números.
// - Hobbies
//     Se deve selecionar no máximo 4 hobbies.
//     Hobbies que não podem ser selecionados ao mesmo tempo
//     Video game com cozinha.
//     Guitarra com leitura.
//     Netflix com corte e costura.
function enviar() {

    let nomeCompleto = document.getElementById("name");
    //let nomeCompletoSeparado = nomeCompleto.split(" ");   

    if (nomeCompleto.value == "" || nomeCompleto.value == null || nomeCompleto.value.length > 150 || nomeCompletoSeparado.value.length < 2) {
        alert("Por favor, preencha com seu nome e sobrenome");
    }

}