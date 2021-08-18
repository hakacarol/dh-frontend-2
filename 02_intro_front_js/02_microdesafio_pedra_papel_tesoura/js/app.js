// Jogo de Pedra, Papel ou Tesoura
// Prática Integradora
// Desafio - Com o professor


// Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

// Pedra ganha de Tesoura.
// Tesoura ganha de Papel.
// Papel ganha de Pedra.

// Desafio - Mesas de Trabalho

// Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:

// Refatorar o código, utilizando funções e a estrutura de decisão switch;
// Implementar uma regra de que só é declarado o ganhador do jogo após 3 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada partida;
// Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado.

/*Estrutura
- 2 jogadores
 humano - escolhe as opções
 computador - escolha aleatória

- Estrutura Lógica
 3 opções de escolhas: papel, pedra, tesoura 
 Comparação das escolhas

 papel ganha de pedra
 pedra ganha de tesoura
 tesoura ganha de papel

 empate se tirarem o mesmo resultado

- Quantidade de Partidas
 3x

- Placar
 imprimi quem ganhou das 3 partidas

- Retorno para jogar novamente
*/

//Introducão
let introducao = alert(`
Hey humano!!!
Vamos jogar JO - KEN - PO!? 
Clique em OK! Bora perder para mim 😎`);

//Criando os jogadores e suas escolhas
let jogar = () => {
    let humano = prompt(
        `Escolha um número:
        1 = 🖐Papel
        2 = ✊Pedra
        3 = ✌Tesoura`
    );

    let computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
    return [humano, computador];
};

// Criação um placar "vencedor" com array zerado para inicializar o placar determinado na partida 
let vencedor = [0, 0];

// Criação da estrutura do jogo com switch
let partida = (jogada1, jogada2) => {
    switch (true) {
        case jogada1 == 1 && jogada2 == 2:
            vencedor[0]++;
            return alert(`0889
            Eu escolhi: ✊
            Você escolheu: 🖐
            ...
            Você ganhou, teve sorte 🍀... 🖐 cobre ✊`);

        case jogada1 == 2 && jogada2 == 3:
            vencedor[0]++;
            return alert(`
            Eu escolhi: ✌
            Você escolheu: ✊
            ...
            Você ganhou, teve sorte 🍀... ✊ quebra ✌`);

        case jogada1 == 3 && jogada2 == 1:
            vencedor[0]++;
            return alert(`
            Eu escolhi: 🖐
            Você escolheu: ✌
            ...
            Você ganhou, teve sorte 🍀... ✌ corta 🖐`);

        case jogada2 == 1 && jogada1 == 2:
            vencedor[1]++;
            return alert(`
            Eu escolhi: 🖐
            Você escolheu: ✊
            ...
            Uhul! Ganhei 🙂! 🖐 cobre ✊`);

        case jogada2 == 2 && jogada1 == 3:
            vencedor[1]++;
            return alert(`
            Eu escolhi: ✊
            Você escolheu: ✌
            ...
            Uhul! Ganhei 🙂! ✊ quebra ✌`);

        case jogada2 == 3 && jogada1 == 1:
            vencedor[1]++;
            return alert(`
            Eu escolhi: ✌
            Você escolheu: 🖐
            ...
            Uhul! Ganhei 🙂! ✌ corta 🖐`);

        case jogada1 == jogada2:
            return alert(`Afs.. Empatou... 😐`);

        default:
            return alert(`
            Ops, errrro no sisstt e e maa... 🤡...
            Vamos jogar novamente`)
    }

};

// Função iniciar executa o inicio do jogo
let iniciar = () => {
    let exec = jogar();
    resultadoJogo = partida(exec[0], exec[1]);
    ganhador()
};

// Função ganhador verifica se temos um vencedor, caso não ela inicia o jogo novamente
let ganhador = () => {
    if (vencedor[0] == 2) {
        return alert(
        `...Parabéns 🥇
        ... Você ganhou de mim 😱
        ... Bora jogar mais uma?`);
    } else if (vencedor[1] == 2) {
        return alert(`
        Eu GANHEI 🏆🏆🏆😎‼
        Vamos jogar novamente?`);
    } else if (vencedor[0] < 2 || vencedor[1] < 2) {
        iniciar();
    }
}

iniciar();

// console.log(alert(vencedor[0]))
// console.log(alert(vencedor[1]))

