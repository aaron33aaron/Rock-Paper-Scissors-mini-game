

function getComputerChoice()
{
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection)
{
    // Setting variable to return value of getComputerChoice() function
    let computerSelection = getComputerChoice();  
    // initializing result
    let result = "";
    // Setting new variable to the player selection value in lowercase.
    let playerSelectionLowerCase = playerSelection.toLowerCase();

    // if statement for any case where player beats the computer
    if ((playerSelectionLowerCase == 'rock' && computerSelection == 'scissors') ||
    (playerSelectionLowerCase == 'scissors' && computerSelection == 'paper') ||
    (playerSelectionLowerCase == 'paper' && computerSelection == 'rock'))
    {
        // Result equals win message for player
        result = ('You win! ' + playerSelectionLowerCase + " beats " + computerSelection);
    }
    // else if player and computer have same value
    else if (playerSelectionLowerCase == computerSelection)
    {
        // Result message is a tie
        result = ('It\'s a tie. You both chose ' + playerSelectionLowerCase);
    }
    // else computer has won the round
    else
    {
        // Display result message that player has lost
        result = ('You loose! ' + computerSelection + ' beats ' + playerSelectionLowerCase);
    }
    
    // return the result message
    return result;
}


const playerSelection = "Rock";
console.log(playRound(playerSelection));

function game()
{
    for (let i = 0; i < 5; i++) 
    {
        let playerAnswer = prompt("Please enter rock, paper or scissors");
        playRound(playerAnswer);
    }
}
game();