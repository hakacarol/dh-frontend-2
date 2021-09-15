// Crie um formulário com dois inputs de texto, um para nome e outro para sobrenome, e um botão submit. 
// Quando ocorrer uma entrada nos dois campos de texto e o botão submit for pressionado, 
// imprima no html três saídas utilizando os métodos: trim(), toUpperCase(), toLowerCase() 
// e por final, imprima mais uma saída usando o concat() do primeiro nome com o segundo, 
// a uma última saída utilizando o replace(), substituindo todas as letras “a” por “@” e letras “e” por “3”.

function aplicarMetodos() {
    let nome = document.getElementById("name").value;
    let sobrenome = document.getElementById("lastName").value;

    let nomeCompleto = `${nome} ${sobrenome}`;
    let nomeCompletoTrim = nomeCompleto.trim(); // ?
    let nomeCompletoToUpperCase = nomeCompleto.toUpperCase();
    let nomeCompletoToLowerCase = nomeCompleto.toLowerCase();
    let nomeCompletoConcat = "Nome Completo: ".concat(nomeCompleto);
    let nomeCompletoReplace = nomeCompleto.replaceAll("a", "@");

    resultado.innerHTML += `<h2>${nomeCompleto}</h2>`;
    resultado.innerHTML += `<h3>trim(): ${nomeCompletoTrim}</h3>`;
    resultado.innerHTML += `<h3>toUpperCase(): ${nomeCompletoToUpperCase}</h3>`;
    resultado.innerHTML += `<h3>toLowerCase(): ${nomeCompletoToLowerCase}</h3>`;
    resultado.innerHTML += `<h3>concat(): ${nomeCompletoConcat}</h3>`;
    resultado.innerHTML += `<h3>replaceAll(): ${nomeCompletoReplace}</h3>`;
}
