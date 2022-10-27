// classe

class MemoryGame {
    constructor() {
        this.player = "";
        this.points = 5;

        // cartas do jogo - 4 pares
        this.deck = [
            "./assets/imagem1.png",
            "./assets/imagem2.png",
            "./assets/imagem3.png",
            "./assets/imagem4.png",
            "./assets/imagem1.png",
            "./assets/imagem2.png",
            "./assets/imagem3.png",
            "./assets/imagem4.png"
        ];

        this.selectedCards = [];
    }

    renderDeck() {
        // randomizar o deck - shufle
        this.deck.sort(() => {
            // sorteando duas cartas
            return Math.random() - 0.5;
        });

        //console.log(this.deck);

        // capturar o board
        const board = document.getElementById("board");

        // iterar pela array deck
        this.deck.forEach((element)=>{
            const imgFront = document.createElement("img");
            imgFront.src = element; 
            imgFront.className ="hide cardFront"

            const imgBack = document.createElement("img");
            imgBack.src = "./assets/fundo.png"
            imgBack.className ="show cardBack"

            board.appendChild(imgFront);
            board.appendChild(imgBack);

        });

    }

    flipCard(card) {
        //console.log(card)
        this.selectedCards.push(card);

        // se duas cartas firam viradas
        if (this.selectedCards.length === 2) { 
            console.log("duas cartas viradas!");
            this.checkPair();
        } 
    }

    checkPair() {
        

        if (this.selectedCards[0].src === this.selectedCards[1].src){
            // cartas iguais
            // criar um indicador de que as cartas já foram viradas
            // limpar a array de cartas selecionadas
            // checar o status do jogo (verificar se o jogo acabou, se todas as cartas foram viradas, checar se as tentativas acabaram)
        }
        else {
            // cartas diferentes
            // remover ponto do jogador
            // desvirar as duas cartas
            // limpar array de cartas selecionadas
            // checar o status do jogo ((verificar se o jogo acabou, se todas as cartas foram viradas, checar se as tentativas acabaram)
        }

    }

    checkStatus(){
        // checar o status do jogo
        // verificar se o jogo acabou, se todas as cartas foram viradas, checar se as tentativas acabaram

        
    }
}