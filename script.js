// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// TODO make start button
var mybtn = document.querySelector(".start")
var welcome = document.querySelector(".welcome")
var quiz = document.querySelector(".quiz")
var timeEl = document.querySelector(".time");

// Array of questions, options, and answers the quiz will be made up of
var questionArray = [
    {
        question: "Which drum company does Trey choose to play?",
        options: ["DW", "Pearl", "SJC", "Mapex"],
        answer: "SJC"

    },
    {
        question: "Which cymbal company does Trey choose to use?",
        options: ["Sabian", "Zildjian", "Meinl", "Paiste"],
        answer: "Zildjian"

    },
    {
        question: "Which drumhead company does Trey use?",
        options: ["Evans", "Aquarian", "Remo", "Attack"],
        answer: "Remo"

    },
    {
        question: "How old was Trey When he started playing drums?",
        options: ["5", "10", "8", "16"],
        answer: "5"

    },
    {
        question: "What is the coolest instrument to play?",
        options: ["Guitar", "Bass", "Piano", "Drums!"],
        answer: "Drums!"

    },
]

var secondsLeft = 10;

// Timer function to count down seconds the user has left to answer the question
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end game
    }

  }, 1000);
}

// TODO add event listener
mybtn.addEventListener("click", function(){
    // Execute timer function
    setTime()
    // Execute my display function
    // Hide welcome area
    welcome.classList.add("hide")
    // Show the quiz
    quiz.classList.remove("hide")
})