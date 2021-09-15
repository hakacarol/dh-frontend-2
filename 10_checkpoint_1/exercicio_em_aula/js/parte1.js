title = "";


function criarCard() {
    title = document.getElementById("title").value;
    
    let cardSection = document.getElementById("card");

    cardSection.innerHTML += `<div><h2>${title}</h2></div>`
}