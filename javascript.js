let gameState = {};

function initializeGame(){
    gameState.round = 1;
    gameState.playerCount = 0;
    gameState.compCount = 0;
}

let availableChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function printMsg(msg, id){
    document.getElementById(id).innerText = msg;
    console.log(msg);
}

function displayComp(choice){
    let remove = document.querySelector(".comp-stats .selected");
    if(remove !== null) remove.classList.remove("selected");
    let e = '';
    if(choice == 0) e = '.comp-rock';
    else if(choice == 1) e = '.comp-paper';
    else if(choice == 2) e = '.comp-scissors';
    let compChoice = document.querySelector(e);
    compChoice.classList.add("selected");
}

function displayPlayer(choice){
    let remove = document.querySelector(".player-stats .selected");
    if(remove !== null) remove.classList.remove("selected");
    let e = '';
    if(choice == 0) e = '.player-rock';
    else if(choice == 1) e = '.player-paper';
    else if(choice == 2) e = '.player-scissors';
    let compChoice = document.querySelector(e);
    compChoice.classList.add("selected");
}

function checkGameState(){
    if(gameState.playerCount == gameState.winRequierment || gameState.compCount == gameState.winRequierment){
        if(gameState.playerCount > gameState.compCount){
            printMsg("Congratulations you beat the computer!", 'text');
            let wonGame = document.querySelector(".bg");
            wonGame.classList.add("won");
            wonGame = document.querySelector(".celebration");
            wonGame.classList.add("won");
        }
        else if(gameState.playerCount < gameState.compCount){
            printMsg("Oh no! You lost. The computer won.", 'text');
            let lost = document.querySelector(".lose-game");
            lost.classList.add("lost");
        }
        let gameOver = document.querySelector(".controls");
        gameOver.classList.add("game-over");
        return false;
    }
    return true;
}

function game(player){
    gameState.round++;
    let comp = getComputerChoice();
    printMsg(`${gameState.round}`, 'round-num');
    displayPlayer(player);
    displayComp(comp);
    if(comp == player) printMsg("It's a tie.", 'outcome');
    else if(player == ((comp + 1) % 3)){
        gameState.playerCount++;
        printMsg(`${gameState.playerCount}`, 'player-score');
        printMsg(`You win! ${availableChoices[player]} beats ${availableChoices[comp]}.`, 'outcome');
    }
    else {
        gameState.compCount++;
        printMsg(`${gameState.compCount}`, 'comp-score');
        printMsg(`You lose! ${availableChoices[comp]} beats ${availableChoices[player]}.`, 'outcome');
    }
    printMsg(`${gameState.round}`, 'round-num');
    checkGameState();
}

const moveButtons = document.querySelector(".move-buttons");
const playAgainButton = document.querySelector("#play-again");
const roundSelector = document.querySelector(".round-selector");

roundSelector.addEventListener('click', e => {
    initializeGame();
    gameState.winRequierment = e.target.dataset.value;
    let game = document.querySelector(".pre-game");
    game.classList.add("hide");
    game = document.querySelector(".game");
    game.classList.add("active");
})
initializeGame();
moveButtons.addEventListener('click', e => {
    let playerchoice = e.target.dataset.value;
    if(checkGameState()) game(playerchoice);
})
playAgainButton.addEventListener('click', e => {
    let remove = document.querySelector(".comp-stats .selected");
    remove.classList.remove("selected");
    remove = document.querySelector(".player-stats .selected");
    remove.classList.remove("selected");
    remove = document.querySelector(".bg , .won");
    remove.classList.remove("won");
    remove = document.querySelector(".celebration , .won");
    remove.classList.remove("won");
    remove = document.querySelector(".lose-game, lost");
    remove.classList.remove("lost");
    initializeGame();
    let replay = document.querySelector(".controls");
    replay.classList.remove("game-over");
    printMsg(`${gameState.round}`, 'round-num');
    let gameScore = document.querySelectorAll('.game-score *');
    for(const node of gameScore) if(node.id != 'round') node.innerText = '';
    printMsg('0', "player-score");
    printMsg('0', "comp-score");
    printMsg('1', 'round-num');
})