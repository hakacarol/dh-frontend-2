let nomeUsuario = confirm('Para acessar o sistema - pressione OK')

if (nomeUsuario == true) { // se você deixar só a variavel, ele irá verificar se é verdadeiro por default
    // redirecionar o usuario para a página de acesso permitido
    let nome = prompt("Por favor insira seu nome");
    alert("Bem vindo ao nosso sistema, " + nome);
} else {
    alert("Usuário anônimo conectado.")
}
