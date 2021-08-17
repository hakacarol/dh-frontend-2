let resultado = confirm('Deseja realmente sair do sistema?');
console.log(resultado);
alert(resultado);

if(resultado) {
    // Redireciona o usuário para a página da DevMedia assim que
// a página atual é carregada
window.location.href = "acessoOk.html";
} else {
    window.location.href = "acessoNegado.html";
}