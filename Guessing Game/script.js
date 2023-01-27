const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");
const resultText = cardBody.querySelector(".resultText");
const wonLostMessage = document.createElement("p");

let attempt = 0;
let totalAttempt = 5;
let totalWon = 0;
let totalLost = 0;

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const guessingNumberInt = parseInt(guessingNumber.value);
    
    attempt++;
    if (attempt > totalAttempt){
        guessingNumber.disabled = true;
        checkButton.innerHTML = 'Retry';
        checkButton.addEventListener('click', function(){location.reload();});

    }else{
        checkResult(guessingNumberInt);
        remainingAttempt.innerHTML = `Remaining Attempts = ${totalAttempt - attempt}`;
    }
    guessingNumber.value = '';
})

function checkResult(guessingNumberInt) {
    const randomNumber = getRandomNumber(5);
    if (randomNumber === guessingNumberInt) {
        resultText.innerHTML = `You have Won`;
        totalWon++;
    } else {
        resultText.innerHTML = `You have lost, the random number was ${randomNumber}`;
        totalLost++;
    }
    wonLostMessage.innerHTML = `Won: ${totalWon},  Lost: ${totalLost}`;
    wonLostMessage.classList.add('resultText');
    cardBody.appendChild(wonLostMessage);
}

