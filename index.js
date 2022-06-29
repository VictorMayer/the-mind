
function drawCards(numOfCards) {
    const hand = [];
    for (let i = 0; i < numOfCards; i++) {
        const card = Math.floor(Math.random() * 100) + 1;
        hand.push(card);
    }
    
    return hand.sort((a, b) => a - b);
}

const playerNum = 1 //prompt("How many players?");

class Player {
    constructor(name){
        this.cards = [];
        this.name = name;
    }
    
    updateCards(level){
        this.cards = drawCards(level)
    }

    throwLesserCard(){ 
        return this.cards.shift();
    }
    
    getNumOfCards(){
        return this.cards.length
    }
}

function startGame() {
    const player1 = new Player("Victor")
    player1.updateCards(5);

    const gameInterval = setInterval(() => {
        if (player1.getNumOfCards() < 1) {
            clearInterval(gameInterval);
            endGame();
        }
        console.log(player1.cards)
        console.log(player1.throwLesserCard())

    }, 1000);
}

function endGame() {
    console.log("End Game");
}

startGame()

/*
    NEXT STEPS:
        - Organizar fluxo do jogo: 
            → inicio de jogo
            → qntd players
            → configuração da mão do(s) player(s) e npc's
            → inicio do primeiro nivel
            → fluxo do nivel (jogar cartas, etc..)
            → inicio prox nivel, configuração de niveis... etc...
            ...
            → fim do jogo (vidas === 0 ou fim dos niveis) 
*/