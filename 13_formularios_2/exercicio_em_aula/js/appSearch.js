let dadosDaUrl = location.search;
document.write(dadosDaUrl);
document.write("<br>");
 
let dados = dadosDaUrl.split("?"); // caracter delimitador
document.write(dados[1]);

document.write(dados).split("=")[1]
document.write("<br>");
//document.write(dados[1]);