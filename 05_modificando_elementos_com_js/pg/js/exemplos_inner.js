let numeros = document.querySelectorAll('#numeros li')

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i].innerText);
}

function escreverHTML(titulo, texto) {
    const body = document.getElementById('body');
    const meuTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML += meuTemplate;
}

escreverHTML('Olá', 'Isso é um exemplo de template string em HTML.');
escreverHTML('É Dinâmico', 'Podemos inserir elementos HTML mediante o <b>JavaScript</b>');
escreverHTML('Facilita a programação', 'Evita escrever muito código ao reutilizar o que escrevemos.');
escreverHTML('Nesse exemplo', 'Utilizamos uma única função para poder escrever 4 vezes em HTML, Já imaginou como seria escrever 4x sem essa função?');

let citacao = document.querySelector('.cita');
citacao.classList.add('italico');