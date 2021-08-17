let dividir = function(n1,n2) {
    if(n2==0) {  //verificar se n2 == 0
        return 'Nunca dividirás por 0, caro amigo';
    } else {
        return n1/n2;
    }
}

console.log(dividir(10,0));