var carros = [
    { id: 1, modelo: 'EcoSport', marca: 'Ford', preco: 55500},
    { id: 2, modelo: 'Sportage', marca: 'Kia', preco: 120000 }
  ]
  var total = 0
  /* for(var i = 0; i < carros.length; i++) {
    console.log(total += carros[i].preco);
  } */

  // for...of -> Percore os valores no array
  // Itera sobre os VALORES das propriedades
  // iterar = repetição


 /*  for(const propriedade of carros) {
    console.log(propriedade);
  }  */

/* for ..in iterage sobre as PROPRIEDADES
enumeradas de um objeto, na ordem original de inserção */
 for(const propriedade in carros) {
    console.table(carros[propriedade]); 
}
