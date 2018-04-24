// This handles the Scoll Reveal for the Header and Navigation Bar. 
window.sr = ScrollReveal({ reset: true });
sr.reveal('.foo', { duration: 2000 });
sr.reveal('.foo2', { duration: 5000 });
sr.reveal('.foo3', { duration: 7000 });

// Hangman to display skill
// Create a wordBank with Skills
const wordBank = ["javascript", "html", "CSS", "nodejs"];
// Pick a random word from the array
const randomWord = wordBank[Math.floor(Math.random () * wordBank.length)];

var wrongGuesses = [];

// Semi display the words 
// Create an onKeyup Function for the user to guess the words.

// User Decision 
document.onkeyup = function(e){
    var userKey = e.key

    // THIS WILL RUN THE CHECK LETTER FUNCTION WHEN THE USER PRESSES A KEY. 
    checkLetter(userKey);

}


// When the user correctly guesses the word logic should cycle to next word. 








