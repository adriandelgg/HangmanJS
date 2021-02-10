// Hangman Game
const wordsEasy = ['hello', 'tomato','apple', 'bacon', 'chair', 'rude', 'yummy', 'avocado'];
const wordsHard = ['delicious', 'successful', 'president', 'anticipate', 'careful', 'hamburger', 'crypto'];

// Selectors
const entireGameView = document.querySelector('.game');
const hangman = document.querySelector('.hangman');
const word = document.querySelector('.word');
const lettersUsed = document.querySelector('.letters-used');
const lettersToGuess = document.querySelector('.letters-to-guess');
const difficulty = document.querySelector('.choose-difficulty');
const counter = document.getElementById('counter');
const gameOver = document.createElement('h2');
gameOver.innerHTML = 'Game Over! <br>Want to try again?';

let randomWord; // Becomes the random word in an array
let wordInLines; // Becomes the word length in '_' as an array
let countDown = 9;
let amountToWin;
let countToWin = 0;

const pickDifficulty = obj => {
    lettersToGuess.style.display = 'initial'; // Makes buttons & word appear
    difficulty.hidden = true; // Hides the Easy/Hard buttons
    
    if (obj.innerHTML == 'Easy') { // Create new element with lines the length of the word
        randomWord = (wordsEasy[Math.floor(Math.random() * wordsEasy.length)].toUpperCase()).split('');
    } else {
        randomWord = (wordsHard[Math.floor(Math.random() * wordsHard.length)].toUpperCase()).split('');
    }
    amountToWin = randomWord.length;
    return randomWord;
}

// Generates the amount of lines to make for the word to guess
const amountOfLines = obj => {
    let wordToLines = obj;
    wordToLines = '_'.repeat(wordToLines.length);
    wordInLines = wordToLines.split('');
    word.innerHTML = wordToLines;
}

const pickedLetter = letter => {
    letter.hidden = true; // Hides selected letter after click
    lettersUsed.innerHTML += letter.innerHTML + ', ';
    
    // Checks if the letter is in the word. If it is, it will add it to the page.
    if (randomWord.includes(letter.innerHTML)) {
        countToWin++;
        for (let i = 0; i < randomWord.length; i++) {
            
            if (randomWord[i] == letter.innerHTML) {
                wordInLines[i] = randomWord[i];
                word.innerHTML = wordInLines.join('');
            }
        }
    } else {
        countDown--;
        counter.innerHTML = countDown;
    }
    gameEnd();
}

const gameEnd = () => {
    if (countToWin === randomWord.length) {
        console.log('You Win!');
    }
    else if (countDown === 0) {
        // Needs Fixed
        entireGameView.appendChild(gameOver);
        difficulty.hidden = false;
    }
}
console.log(lettersUsed.innerHTML);


// Tests

// amountOfLines();