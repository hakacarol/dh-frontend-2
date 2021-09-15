let textoCompleto = location.hash //
document.write(textoCompleto); // parte 1

let dados = textoCompleto.split("#"); // caracter delimitador
document.write(dados) // o split converte em array;

let dados1 = dados[1];
let dados2 = dados[2];

document.write(dados1);
document.write("<br>");
document.write(dados2);

document.write("<br>");

// objeto location .href

let url = location.href="http://www.digitalhouse.com"
document.write(url);

// origem
let origem = location.origin;
document.write(origem); // protocolo hostname porta
document.write("<br>");
document.write("<br>");

// pathname --> caminho
let nomeCaminho = location.pathname;
document.write(nomeCaminho);
document.write("<br>");

//
let protocolo = location.protocol; //http
document.write(protocolo);