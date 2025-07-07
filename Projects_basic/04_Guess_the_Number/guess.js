let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');

const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let noOfGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number ${guess}`)
    }
    else if(guess < 1 || guess > 100){
        alert(`Number must be greater than 1 and less than 100`);
    }
    else{
        prevGuess.push(guess);
        if(noOfGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is less than the actual number`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is high than the actual number`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessesSlot.innerHTML += `${guess} , `;
    noOfGuess++;
    remaining.innerHTML = `${11-noOfGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame');
   newGameButton.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    noOfGuess = 1;
    guessesSlot.innerHTML = '';
    remaining.innerHTML = `${11-noOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   })
}
