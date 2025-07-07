# Solution

## Project 1 : Color Changing Background

``` Javascript
const button = document.querySelectorAll('.button');
// console.log(button);

const body = document.querySelector("body");
// console.log(body);

button.forEach((button) =>{
    // console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event);
        console.log(event.target);
        // switch (event.target.id) {
        //     case 'grey':
        //         body.style.backgroundColor = 'grey';
        //         break;
        //     case 'white':
        //         body.style.backgroundColor = 'white';
        //         break;
        //     case 'blue':
        //         body.style.backgroundColor = 'blue';
        //         break;
        //     case 'green':
        //         body.style.backgroundColor = 'green';
        //         break;
        //     default:
        //         break;
        // }
        body.style.backgroundColor = event.target.id;
    })
})
```

## Project 2 : BMI Calculator

``` javascript
const form = document.querySelector('form');
// this usecase will give u empty
// const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height. ${hieght}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight. ${weight}`
    } else {
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML = `<span>Underweight : ${bmi} BMI</span>`
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `<span>Normal range : ${bmi} BMI</span>`
        }
        else{
            result.innerHTML = `<span>Overweight : ${bmi} BMI</span>`
        }
    }
})
```

## Project 3 : Digital Clock

```javascript
const clock = document.querySelector('#clock');


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 3 : Guess the Number

``` javascript
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
```