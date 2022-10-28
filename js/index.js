// dom manipulation

// instancia do jogo
const game = new MemoryGame()


// capturando todos os elemento de html que foram criados
const startScreen = document.getElementById("startScreen")
const inputName = document.getElementById("inputName")
const gameScreen = document.getElementById("gameScreen")
const gameScore = document.getElementById("gameScore")
const playerName = document.getElementById("name")
const points = document.getElementById("points")
const board = document.getElementById("board")
const btnStart = document.getElementById("btnStart")

// adicionar o event listener no botão 'START'
btnStart.addEventListener("click", ()=>{
    
    // start scren desapareça
    startScreen.classList.add("hide"); // adiciona uma classe para uma tag

    // mostrar o gamescore
    gameScore.className = "show"; // define o nome da classe para ua tag

    // pegando os dados dos campos html e colocando na classe e no html
    game.player = inputName.value;
    playerName.innerText = game.player
    points.innerText = game.points;

    game.renderDeck();

    settingUpGame();
});


function settingUpGame() {
    // capturar todas as cartas back e adicionar um eventlistener
    const allCardsBack = document.querySelectorAll(".cardBack");

    allCardsBack.forEach((cardBack)=>{
        cardBack.addEventListener("click", ()=> {

        // o que acontece quando a carta é clicada
        const cardFront = cardBack.previousElementSibling;
        cardFront.className = "show cardFront";
        cardBack.className = "hide cardBack";

        game.flipCard(cardFront);

        points.innerText = game.points;

        })
    })

}