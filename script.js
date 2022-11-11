/* Coded by Aaron LeBlandc Nov 10th, 2022 */

// Function used to return a random rock,paper,scissors value to be used as the computers' choice.
function getComputerChoice()
{
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection)
{

    let computerSelection = getComputerChoice();  

    let result = "";

    let playerSelectionLowerCase = playerSelection.toLowerCase();

    // if statement for any case where player beats the computer
    if ((playerSelectionLowerCase == 'rock' && computerSelection == 'scissors') ||
    (playerSelectionLowerCase == 'scissors' && computerSelection == 'paper') ||
    (playerSelectionLowerCase == 'paper' && computerSelection == 'rock'))
    {
        // Result equals win message for player
        result = ('You win! ' + playerSelectionLowerCase + " beats " + computerSelection);
        playerScore += 1;
        console.log("Player score: " + playerScore);

        // if player score reaches 3, set result to win message
        if (playerScore == 3)
        {
            result = ('You won the game ! Reload page to play again!');
        }
    }
    // else if player and computer have same value
    else if (playerSelectionLowerCase == computerSelection)
    {
        // Result message is a tie
        result = ('It\'s a tie. You both chose ' + playerSelectionLowerCase);
        playerScore += 1;
        computerScore += 1;

        // if they both win at same time case
        if (computerScore == 3 && playerScore == 3)
        {
            
        }
    }
    // else computer has won the round
    else
    {
        // Display result message that player has lost 
        result = ('You loose! ' + computerSelection + ' beats ' + playerSelectionLowerCase);
        computerScore += 1;
        console.log("Computer score: " + computerScore);

        // if computer score reaches five, set result to loss message
        if (computerScore == 3)
        {
            result = ('You lost the game ! Reload page to play again!');
        }
    }
    
    console.log(result);
    
    return result;
}


function game()
{
    for (let i = 0; i < 5 ; i++) 
    {
        let playerAnswer = prompt("Please enter rock, paper or scissors");
    
        playRound(playerAnswer);
    }
}
game();