const userChoiceDisplay = document.getElementById('user-choice').querySelector('span');
const computerChoiceDisplay = document.getElementById('computer-choice').querySelector('span');
const outcomeDisplay = document.getElementById('outcome').querySelector('span');

const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const roundCountDisplay = document.getElementById('round-count');
const resetButton = document.getElementById('reset-btn');

const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a Draw!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return 'You Win!';
    }
    computerScore++;
    return 'You Lose!';
}

function updateScores() {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    roundCountDisplay.textContent = roundCount;
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();

        userChoiceDisplay.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        const result = determineWinner(userChoice, computerChoice);
        outcomeDisplay.textContent = result;

        roundCount++;
        updateScores();
    });
});

resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    userChoiceDisplay.textContent = 'None';
    computerChoiceDisplay.textContent = 'None';
    outcomeDisplay.textContent = '?';
    updateScores();
});
