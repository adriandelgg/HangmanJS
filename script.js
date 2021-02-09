// Hangman Game
const wordsEasy = ['hello', 'tomato','apple', 'bacon', 'chair', 'rude', 'yummy', 'avocado'];
const wordsHard = ['delicious', 'successful', 'president', 'anticipate', 'careful', 'hamburger', 'crypto'];

const hangman = document.querySelector('.hangman');
const word = document.querySelector('.word');
const lettersUsed = document.querySelector('.letters-used');
const lettersToGuess = document.querySelector('.letters-to-guess');
const difficulty = document.querySelector('.choose-difficulty');

const pickDifficulty = obj => {
    lettersToGuess.style.display = 'initial';
    difficulty.hidden = true;
    if (obj.innerHTML == 'Easy') {
        // Create new element with lines the length of the word
        return wordsEasy[Math.floor(Math.random() * wordsEasy.length)];
    } else {
        return wordsHard[Math.floor(Math.random() * wordsHard.length)];
    }
}

const amountOfLines = obj => {
    let wordToLines = obj;
    wordToLines = '_ '.repeat(wordToLines.length);
    word.innerHTML = wordToLines;
}

const pickedLetter = letter => {
    letter.hidden = true;
    
    // Not working let
    if (lettersUsed.innerHTML == ' ') {
        lettersUsed.innerHTML += letter.innerHTML;
    } else { // Works
        lettersUsed.innerHTML += letter.innerHTML + ', ';
    }
}



// Tests

// amountOfLines();