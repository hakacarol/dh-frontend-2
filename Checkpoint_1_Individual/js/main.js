// CRIAÇÃO DE VARIÁVEIS PARA OS ELEMENTOS DO HTML
let cards = document.getElementById("cards");
let titleForm = document.getElementById("titleForm");
let pictureForm = document.getElementById("pictureForm");
let descriptionForm = document.getElementById("descriptionForm");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

let btnOpenForm = document.getElementById("btnAddCard");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");
let formImgs = document.getElementById("formImgs");

let submitForm = document.getElementById("submitFormAddCard");

// NÃO DEIXA O FORMULÁRIO ATUALIZAR PARA PODERMOS OBSERVAR AS FOTOS ARMAZENADAS
document.querySelector("form").onsubmit = function () { return false };

// CRIAÇÃO DE VARIÁVEIS PARA OS ELEMENTOS DO HTML
let extraDivContact = document.getElementById("extraDivContact");
let btnOpenContact = document.getElementById("btnOpenContact");

let extraDivTeam = document.getElementById("extraDivTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");

// BOTÃO QUE ABRE O FORMULÁRIO
btnOpenForm.onclick = function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block";
  } else {
    extraDivFormImgs.style.display = "none";
  }
}

// BOTÃO QUE EXCLUI O CARD CRIADO
btnCloseForm.onclick = function() {
  extraDivFormImgs.style.display = "none";
}

// CONDIÇÕES PARA CRIAR E ARMAZENAR UM CARD
submitForm.addEventListener("click", function () {
  if ((titleForm.value == "") || (pictureForm.value == "") || (descriptionForm.value == "")) {
    titleForm.focus();

    // CRIAÇÃO DE ALERT CASO OS INPUTS NÃO FOREM PREENCHIDOS 
    document.querySelectorAll("input").forEach((item) => item.value = "");
    alert("Por favor, preencha os 3 campos!");

  } else {
    cards.style.height = "auto";

    // CRIAÇÃO DE UMA DIV ONDE OS CARD SERÃO ARMAZENADOS 
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    // CRIAÇÃO DE UMA DIV QUE S
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    // VALORES DOS CONTEUDOS QUE SÃO ENVIADOS NO FORMULÁRIO DO CARD
    cardContent.innerHTML += `<h2 class="cardTitle">${titleForm.value}</h2>`;
    cardContent.innerHTML += `<img src="${pictureForm.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionForm.value}</h4>`;

    // CRIAÇÃO DE UMA DIV QUE DELETA OS CARDS
    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    // ATRIBUINDO UMA IMAGEM COM O BOTÃO DELETE
    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/btnDeletePic.svg");
    btnDeletePic.setAttribute("class", "btnDeletePic");

    // FUNÇÃO QUE DELETA OS CARDS
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    // FUNÇÃO Q AO PASSAR EM CIMA DE UM CARD CRIADO, SURGI A OPÇÃO DE EXCLUI-LO
    card.addEventListener("mouseover", function() {
      divBtnDeletePic.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeletePic.style.display = "none";
    })

    titleForm.focus();
  }
})

// BOTÃO QUE ABRE O CONTATO / FALE CONOSCO
btnOpenContact.onclick = function() {
  if (extraDivContact.style.display == "none") {
    extraDivContact.style.display = "block";
  } else {
    extraDivContact.style.display = "none";
  }
}

// BOTÃO QUE ABRE A EQUIPE
btnOpenTeam.onclick = function() {
  if (extraDivTeam.style.display == "none") {
    extraDivTeam.style.display = "block";
  } else {
    extraDivTeam.style.display = "none";
  }
}

// FUNÇÃO Q FECHA OS FORMULÁRIOS CLICANDO FORA DOS FORMULÁRIO
window.onclick = function(event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none";
  } if (event.target == extraDivContact) {
    extraDivContact.style.display = "none";
  } if (event.target == extraDivTeam) {
    extraDivTeam.style.display = "none";
  }
}