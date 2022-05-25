// 1. Greetings:
console.log("Welcome, Welcome!!");
alert("Welcome, Welcome!!");

// 2. Computer Play:
function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors'];
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

// 3. Playing the game:
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log("It's a tie!");
            return false;
        }

        else if (computerSelection == 'paper') {
            console.log("You Lose! Paper beats Rock");
            return false;
        }

        else {
            console.log("You Win! Rock beats Scissors");
            return true;
        }
    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log("You Win! Paper beats Rock");
            return true;
        }

        else if (computerSelection == 'paper') {
            console.log("It's a tie!");
            return false;
        }

        else {
            console.log("You Lose! Scissors beats Rock");
            return false;
        }
    }

    else {
        if (computerSelection == 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return false;
        }

        else if (computerSelection == 'paper') {
            console.log("You Win! Scissors beats Paper");
            return true;
        }

        else {
            console.log("It's a tie!");
            return false;
        }
    }
}

// 4. Playing the game:
function game() {
    playerWinCounter = 0;
    for (i = 0; i < 5; i++) {
        // 5. Player Selection:
        playerSelection = prompt(`Enter your selection: \n 1. Rock \n 2. Paper \n 3. Scissors`);
        playerSelection = playerSelection.toLowerCase();

        computerSelection = computerPlay();
        computerSelection = computerSelection.toLowerCase();

        console.log("Computer Picked: ");
        console.log(computerSelection);
        console.log("User Picked: ");
        console.log(playerSelection);

        playerWinCounter = playerWinCounter + playRound(playerSelection, computerSelection);
    }

    console.log(`Result: You Won ${playerWinCounter}/${i} rounds!!`);
    alert(`Result: You Won ${playerWinCounter}/${i} times!!`);
    if (playerWinCounter <= i/2) {
        console.log("Sorry! You have lost the game!!");
        alert("Sorry! You have lost the game!!");
    }
    else {
        console.log("GG! You have won!!");
        alert("GG! You have won!!");
    }
}

game();