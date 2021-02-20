// Hangman Game
const wordsEasy = ['hello', 'tomato', 'apple', 'bacon', 'chair', 'rude', 'yummy', 'avocado']; //
const wordsHard = ['delicious', 'successful', 'president', 'anticipate', 'careful', 'hamburger', 'crypto'];

// Selectors
const hangman = document.querySelector('.hangman');
const word = document.querySelector('.word');
const lettersUsed = document.querySelector('.letters-used');
const lettersToGuess = document.querySelector('.letters-to-guess');
const triesLeft = document.querySelector('.tries-left');
const difficulty = document.querySelector('.choose-difficulty');
const counter = document.getElementById('counter');
const restart = document.querySelector('.restart');


let randomWord; // Becomes the random word in an array
let wordInLines; // Becomes the word length in '_' as an array
let countDown = 9; // When 0, user loses
let amountToWin; // Becomes the length of the random word
let countToWin = 0; // Increases with every right answer

const pickDifficulty = obj => {
    triesLeft.style.display = 'initial';  // Makes buttons, tries, & word appear
    lettersToGuess.style.display = 'initial';
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
function amountOfLines(obj) {
    let wordToLines = obj;
    wordToLines = '_'.repeat(wordToLines.length);
    wordInLines = wordToLines.split('');
    word.innerHTML = wordToLines;
}

const pickedLetter = letter => {
    letter.style.visibility = 'hidden'; // Hides selected letter after click
    lettersUsed.innerHTML += letter.innerHTML + ', ';
    
    // Checks if the letter is in the word. If it is, it will add it to the page.
    if (randomWord.includes(letter.innerHTML)) {
        countToWin++;
        for (let i = 0; i < randomWord.length; i++) {
            
            if (randomWord[i] == letter.innerHTML) {
                if (word.innerHTML.includes(letter.innerHTML)) { // Check to see if the letter appears twice
                    countToWin++;
                }
                wordInLines[i] = randomWord[i];
                word.innerHTML = wordInLines.join('');
            }
        }
    } else {
        countDown--;
        addToHangman++;
        counter.innerHTML = countDown; 
        addHangman();
    }
    gameEnd();
}

let addToHangman = 0;
const addHangman = () => {
    switch (addToHangman) {
        case 1:
            document.querySelector('.base').classList.remove('hide-elements');
            break;
        case 2:
            document.querySelector('.support').classList.remove('hide-elements');
            break;
        case 3:
            document.querySelector('.long-pole').classList.remove('hide-elements');
            break;
        case 4:
            document.querySelector('.rope').classList.remove('hide-elements');
            document.querySelector('.head').classList.remove('hide-elements');
            break;
        case 5:
            document.querySelector('.body').classList.remove('hide-elements');
            break;
        case 6:
            document.querySelector('.arm1').classList.remove('hide-elements');
            break;
        case 7:
            document.querySelector('.arm2').classList.remove('hide-elements');
            break;
        case 8:
            document.querySelector('.leg1').classList.remove('hide-elements');
            break;
        case 9:
            document.querySelector('.leg2').classList.remove('hide-elements');
            break;
    }
}

// Game end
const entireGameView = document.querySelector('.game');
const gameEndDiv = document.querySelector('.game-end');
let gameOver = document.createElement('h2');
const gameEnd = () => {
    
    if (countToWin === amountToWin) {
        entireGameView.classList.add('hide-elements');
        hangman.classList.add('hide-elements');
        gameOver.innerHTML = `Congratulations!<br>You won!🥳🎉<br>The word was: ${randomWord.join('')}`;
        gameEndDiv.prepend(gameOver);
        restart.style.display = 'initial';
    
    } else if (countDown === 0) {
        entireGameView.classList.add('hide-elements');
        gameOver.classList.add('game-end-text');
        gameOver.innerHTML = `Aw, nice try!<br>The word was: ${randomWord.join('')}<br>Want to try again?😄`;
        gameEndDiv.prepend(gameOver);
        restart.style.display = 'initial';
    }
}

const restartGame = () => {
    window.location.reload();
}