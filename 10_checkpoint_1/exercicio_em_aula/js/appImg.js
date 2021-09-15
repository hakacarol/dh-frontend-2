function criarCard() {
    urlImg = document.getElementById("url_img").value;

    let cardSection = document.getElementById("card");
    cardSection.innerHTML +=`<div><img src="${urlImg}"></div>`;
}