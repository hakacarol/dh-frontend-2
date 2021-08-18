// Retorna o primeiro elemento dentro do documento 
// (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento)
// que corresponde ao grupo especificado de seletores.
// Esta função recebe uma String que indica o seletor CSS que estamos procurando.

let acessandoId = document.querySelector('#teste1');
let acessandoClass = document.querySelector('.teste2');
let acessandoParagrafo = document.querySelector('p');

// Retorna uma lista de elementos presentes no documento 
// (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) 
// que coincidam com o grupo de seletores especificado. 
// O objeto retornado é uma NodeList.

let div = document.querySelectorAll('div')