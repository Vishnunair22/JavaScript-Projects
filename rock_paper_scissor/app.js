const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.userScore');
const compScore = document.querySelector('.compScore');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');

// Initialize scores
userScore.textContent = '0';
compScore.textContent = '0';

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function endGame(winner) {
    result.innerHTML = `Game Over! ${winner} won!`;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

rock.addEventListener('click', function() {
    playRound(0); // 0 for rock
});

paper.addEventListener('click', function() {
    playRound(1); // 1 for paper
});

scissors.addEventListener('click', function() {
    playRound(2); // 2 for scissors
});

function playRound(userChoice) {
    if (parseInt(userScore.textContent) === 3 || parseInt(compScore.textContent) === 3) {
        return; // Game over, prevent further play
    }

    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        // It's a draw
        result.innerHTML = `It's a draw! Both chose ${['rock', 'paper', 'scissors'][userChoice]}.`;
    } else if (
        (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
        (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
        (userChoice === 2 && computerChoice === 1)    // Scissors beats Paper
    ) {
        userScore.textContent = parseInt(userScore.textContent) + 1;
    } else {
        compScore.textContent = parseInt(compScore.textContent) + 1;
    }

    if (parseInt(userScore.textContent) === 3) {
        endGame('User');
    } else if (parseInt(compScore.textContent) === 3) {
        endGame('Computer');
    }
}
reset.addEventListener('click',function(){
    userScore.innerHTML = 0;
    compScore.innerHTML = 0;
    result.innerHTML = '';
})