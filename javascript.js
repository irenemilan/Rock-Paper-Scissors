function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissors";
}

function playRound() {
    let round = 1;
    let computerSelection = getComputerChoice();
    let playerSelection = window.prompt(`Round ${round}.\nRock, Paper or Scissors?`).toLowerCase();
    console.log(`The computer chose ${computerSelection}.`);
    if(playerSelection == computerSelection) return "It's a tie.";
    else if(playerSelection == "rock" && computerSelection == "scissors") return "You win! Rock beats Scissors";
    else if(playerSelection == "paper" && computerSelection == "rock") return "You win! Paper beats Rock";
    else if(playerSelection == "scissors" && computerSelection == "paper") return "You win! Scissors beats Paper";
    return `You lose! ${computerSelection} beats ${playerSelection}`;

}

function game(){
    let comp = 0;
    let player = 0;
    let result;
    while(comp < 5 && player < 5) {
        console.log(`Current score:\nComp: ${comp}\nPlayer: ${player}`);
        result = playRound();
        if(result[4] == 'w') player++;
        else if(result[4] == 'l') comp++;
        console.log(result);
     }
    return player > comp ? "Congratulations you beat the computer!": "You lost against the computer! Try again!";
}

console.log(game());
