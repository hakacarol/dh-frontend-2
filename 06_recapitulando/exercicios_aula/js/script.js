// // leitura
// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// // escrever no .titulo
// titulo.textContent = "BANANA TEST";

// 02
var tagTrAstronauta = document.querySelector("#primeiro-astronauta");
console.log(tagTrAstronauta);

// peso
var tagTdPeso = tagTrAstronauta.querySelector(".info-peso");
console.log(tagTdPeso)
var txtPeso = tagTdPeso.textContent;
console.log(txtPeso)

//altura
var tagTdAltura = tagTrAstronauta.querySelector(".info-altura");
console.log(tagTdAltura)
var txtAltura = tagTdAltura.textContent;
console.log(txtAltura)

// 03 - imc
var imc = txtPeso / (txtAltura ** 2);
// console.log("imc.........: " + imc);

var tagTdImc = tagTrAstronauta.querySelector(".info-imc")
console.log(tagTdImc);
tagTdImc.textContent = Math.round(imc);

