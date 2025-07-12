let  randomNum= parseInt((Math.random( )* 100 + 1  ))

const submit = document.querySelector('subt')
const  result= document.querySelector('#resultParas')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if( playGame){
    submit.addEventListener('clcick' ,(e)=>{
        e.preventDefault();
        const guess= parseInt(userInput.value)
        validateGuess(guess);

    });
}

function validateGuess(guess) {
    if( isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
    }else{
        prevGuess.push(guess);
        if( numGuess==11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess) {
    if( guess === randomNum) {
        displayMessage(`Congratulations! You guessed the number ${randomNum} in ${numGuess} attempts.`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Your guess is too low.');
    } else {
        displayMessage('Your guess is too high.');
    }
}

function displayGuess(guess){
    userInput.value ='';
    guessSlot.innnerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML= `${11- numGuess}`;

}
function displayMessage(message) {
    lowOrHi.innerHTML =`${message}`;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    newGame();   
}

function newGame() {
    const newGame1= document.querySelector('#newGame');
    newGame1.addEventListener('click' ,() => {
        randomNum= parseInt((Math.random( )* 100 + 1  ))
        numGuess = 1;
        prevGuess = [];
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;

    });
}


