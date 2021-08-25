
const botaoDark = document.querySelector('.modoDark');

let flag = true;
botaoDark.addEventListener("click", () => {
    let change = document.querySelector('body');
    change.style.color = flag ? 'black' : '';
    // titulo.style.textAlign = 'center';
    // titulo.style.fontSize = '22px';
    change.style.backgroundColor = flag ? 'black' : '';
    change.style.listStyle = 'black';
    flag = !flag; 
})
