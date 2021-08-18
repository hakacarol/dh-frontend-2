
// fiz uma função construtora, pq irei ter vários alunos com diferentes resultados. Os parametrôs são o nome do Aluno e as respectivas notas
let Aluno = function (nomeAluno, notasAluno) { 
    this.nome = nomeAluno
    this.notas = notasAluno
    // criei uma função (arrow) dentro da propriedade calcularMedia para calcular a média do aluno
    // para o calculo foi utilizado o método reduce para percorrer e retornar o valor "acumulado" da array (notas dos alunos) e dps dividi pelo tamanho da array
    this.calcularMedia = () => this.notas.reduce((acumulador, elemento) => acumulador + elemento) / this.notas.length
    
    // Micro desafio - Etapa I
    let somaNotas = 0; // criei uma varíavel para somaNotas para inciar a soma a partir do 0
    // utilizei o método forEach para chamar a função para cada nota acrescentada
    this.notas.forEach( nota => {
        somaNotas += nota
        console.log(`Soma das notas dos bimestres: ${somaNotas}`);
    }); 
    console.log('-');
    
    // Micro desafio - Etapa II
    // Apliquei o ifElse por apresentar condições diferentes para as médias dos alunos 
    if (this.calcularMedia() >= 7 ) {
        console.log(`${this.nome}, parabéns você passou de ano :)! Sua média anual foi: ${this.calcularMedia()}`)
        // utilizei o for para mostrar os bimentres com suas respectivas notas 
        for (let i = 0; i < this.notas.length; i++) {
            console.log(`${i+1}º Bimestre: ${this.notas[i]}`)
        }
    } else {
        console.log(`${this.nome}, você infelizmente não passou de ano... A sua média foi: ${this.calcularMedia()}`)
        for (let i = 0; i < this.notas.length; i++) {
            console.log(`${i+1}º Bimestre: ${this.notas[i]}`)
        }
    };
    console.log('-----------------------------------')
}

// criando e testando os objetos/alunos
let aluno1 = new Aluno ("Leonardo",[9, 10, 8.5, 9])
let aluno2 = new Aluno ("Carolina",[9, 10, 8, 10])
let aluno3 = new Aluno ("João Carlos",[0, 6, 8, 6])
let aluno4 = new Aluno ("Maria",["bla", 10, 10, 10])




// Feito em Grupo - Ana Clara Rezende, Leonardo, Alex
// Micro desafio - Etapa I
// function Alunos (notas) {
//     this.notas = notas
//     this.calcularMedia = function() {
//         return this.notas.reduce(
//             (acumulador, numero)=> acumulador+=numero
//         )/ this.notas.length
//     }
// }

// let leonardo = new Alunos ([9, 10, 8.5, 9.8])
// let carolina = new Alunos ([7, 6.5, 8, 6.4])
// let alex = new Alunos ([4,4,4,5])

// console.log(leonardo.calcularMedia())
// console.log(carolina.calcularMedia())
// console.log(alex.calcularMedia())

// // Micro desafio - Etapa II
// for (let i = 0; i < alex.notas.length; i++) {
//     console.log("Sua nota do " + (i + 1 + "º ") + "Bimestre foi: " + alex.notas[i])
// }

// console.log("Sua média é: " + alex.calcularMedia());

