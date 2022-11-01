availableChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function game(){
    let compCount = 0;
    let playerCount = 0;
    while(compCount < 5 && playerCount < 5) {
        let comp = getComputerChoice();
        console.log(`Current score:\nComp: ${compCount}\nPlayer: ${playerCount}`);
        let player = availableChoices.indexOf(window.prompt('Rock, Paper or Scissors?').toLowerCase());
        console.log(`The computer chose ${availableChoices[comp]}.`)
        if(comp == player) console.log("It's a tie.");
        else if(player == ((comp + 1) % 3)){
            console.log(`You lose! ${availableChoices[comp]} beats ${availableChoices[player]}.`);
            compCount++;
        }
        else {
            console.log(`You win! ${availableChoices[player]} beats ${availableChoices[comp]}.`);
            playerCount++;
        }
     }
    return playerCount > compCount ? "Congratulations you beat the computer!": "Oh no! The computer won.";
}

console.log(game());
