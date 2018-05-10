AOS.init();
$(".resetButton").hide();
$(".skillList").hide();
// Hide Known tech reveal

// BUTTON FOR MODAL
$('#btnTest').click(function() {
    $('#myModal').modal('show');
});

// This handles the Scoll Reveal for the Header and Navigation Bar. 
window.sr = ScrollReveal({ reset: true });
sr.reveal('.foo', { duration: 2000 });
sr.reveal('.foo2', { duration: 5000 });
sr.reveal('.foo3', { duration: 7000 });

// Hangman to display skill
// Create a wordBank with Skills
var wordBank = ["javascript", "html", "CSS", "node"];

console.log(wordBank);

// Pick a random word from the array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenWordInLetters = randomWord.split("");

console.log(randomWord);
var wrongGuesses = [];
var arrayOfAllLetters = [];
var wordAsUnderscorers = [];

// Semi display the words 
// Create an onKeyup Function for the user to guess the words.

// User Decision 
document.onkeyup = function(e) {
    var userKey = e.key

    // THIS WILL RUN THE CHECK LETTER FUNCTION WHEN THE USER PRESSES A KEY. 
    checkLetter(userKey);

}

$("#playButton").on('click', function startGame() {

    $("#howTo").empty
    document.getElementById('audio').play();
    // ITERATES THROUGH THE WORD BROKEN INTO LETTER AND CHANGES EACH LETTER TO A LOWERCASE.
    chosenWordInLetters.forEach(function(letter) {
        // HERE THE VARIABLE IS STORING EACH LETTER THAT HAS BEEN CHANGED TO A LOWER CASE 
        var toLowerLetter = letter.toLowerCase()
        arrayOfAllLetters.push(toLowerLetter);
    });

    // A for loop that is iterating through the chosen word and runs an IF statment
    for (var i = 0; i < chosenWordInLetters.length; i++) {
        // If statement that changes the letters in the chosen word into underscores
        if (chosenWordInLetters[i % 2] === "") {

            wordAsUnderscorers.push("-");
            document.getElementById('wordToGuess').innerHTML = wordAsUnderscorers.join(" ");
        } else {
            wordAsUnderscorers.push('_');
            document.getElementById('wordToGuess').innerHTML = wordAsUnderscorers.join(" ");
        }
    }
});



function checkLetter(e) {
    // PARAMETER IS SET TO "e"
    // A VARIABLE SET TO FALSE. MY GUESS IS THIS WILL BE USED LETTER TO TRIGGER AN EVENT IF IT'S MADE TO BE TRUE.
    var checkIfLetterIsInWord = false;
    // A FOR LOOP ITERATING OVER EVERY LETTER IN THE arrayOfAllLetters array.
    for (var i = 0; i < arrayOfAllLetters.length; i++) {
        // STATING THAT IF "e"(what the user presses) IS EQUAL TO ANYTHING INSIDE THAT ARRAY. MAKE THE VAR TRUE.
        if (e === arrayOfAllLetters[i]) {
            // THIS WILL BE TRUE IF THERE IS A MATCH BETWEEN WHAT THE USER PRESSES AND THE CONTENTS OF THE ARRAY.
            checkIfLetterIsInWord = true;
        }
    }
    console.log(arrayOfAllLetters);
    if (checkIfLetterIsInWord) {
        // display that letter in the DOM and replace the underscore
        // console.log(e);
        // console.log(wordAsUnderscorers);

        for (var j = 0; j < wordAsUnderscorers.length; j++) {

            if (arrayOfAllLetters[j] === e) {
                wordAsUnderscorers[j] = e;
                document.getElementById('wordToGuess').innerHTML = wordAsUnderscorers.join(" ");
            }
        }
        if (wordAsUnderscorers.indexOf("_") == -1) {

            for (var x = 0; x < wordBank.length; x++) {
                if (randomWord === wordBank[x]) {
                    wordBank.splice(x, 1);
                }
            }
            console.log(x);
            console.log(wordBank);

            //Empty Array To Prepare Code for New Word 
            arrayOfAllLetters = [];
            wordAsUnderscorers = [];
            chosenWordInLetters = randomWord.split("");

            var newSpace = document.getElementById("hang");
            var pOne = document.createElement("p");
            pOne.classList.add("messageToUser");
            pOne.innerHTML = "Yes, You Got it!"
            newSpace.appendChild(pOne);
            document.getElementById('ding').play();
            $(".resetButton").show()
            $("#playButton").hide();

            // Let User know How many Words there are left.
            // When There are no words left show user all answers and additionals technologies known. 
        }

    }
}
// Let user know when they got the word correct

// Audio will begin to play


$(".resetButton").on("click", function reset() {
    $("#playButton").show();
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    chosenWordInLetters = randomWord.split("");
    wrongGuesses = [];
    arrayOfAllLetters = [];
    wordAsUnderscorers = [];
    console.log(randomWord);
    $(".resetButton").hide();
    $(".messageToUser").empty();
    $("#wordToGuess").empty();
});

$("#skip").on("click", function() {
    $(".skillList").show();
    $(".hangMan").hide();
    $(".messageToUser").hide();
})

// When the user correctly guesses the word logic should cycle to next word.