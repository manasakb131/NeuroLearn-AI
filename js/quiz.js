const questionElement =
document.getElementById("question");

const answersElement =
document.getElementById("answers");

const nextBtn =
document.getElementById("nextBtn");

const resultBox =
document.getElementById("resultBox");

const scoreText =
document.getElementById("scoreText");


// QUESTIONS

const questions = [

  {
    question:
    "Which language is used for styling web pages?",

    answers:[
      "HTML",
      "CSS",
      "Python",
      "Java"
    ],

    correct:"CSS"
  },

  {
    question:
    "Which tag is used for JavaScript?",

    answers:[
      "<script>",
      "<style>",
      "<html>",
      "<css>"
    ],

    correct:"<script>"
  },

  {
    question:
    "Which company developed Java?",

    answers:[
      "Google",
      "Microsoft",
      "Sun Microsystems",
      "Apple"
    ],

    correct:"Sun Microsystems"
  }

];


// VARIABLES

let currentQuestion = 0;

let score = 0;

let selectedButton = null;


// LOAD QUESTION

function loadQuestion(){

  resetState();

  const currentQuiz =
  questions[currentQuestion];

  questionElement.innerText =
  currentQuiz.question;

  currentQuiz.answers.forEach(answer=>{

    const button =
    document.createElement("button");

    button.innerText =
    answer;

    button.classList.add("answer-btn");

    // BUTTON CLICK

    button.onclick = ()=>{

      // REMOVE OLD SELECTED

      document
      .querySelectorAll(".answer-btn")
      .forEach(btn=>{

        btn.classList.remove("selected");

      });

      // ADD NEW SELECTED

      button.classList.add("selected");

      selectedButton = button;

    };

    answersElement.appendChild(button);

  });

}


// RESET

function resetState(){

  answersElement.innerHTML = "";

  selectedButton = null;

}


// NEXT BUTTON

nextBtn.onclick = ()=>{

  if(selectedButton === null){

    alert("Please select an answer");

    return;

  }

  const answer =
  selectedButton.innerText;

  if(
    answer ===
    questions[currentQuestion].correct
  ){

    score++;

  }

  currentQuestion++;

  if(currentQuestion < questions.length){

    loadQuestion();

  }

  else{

    showResult();

  }

};


// RESULT

function showResult(){

  questionElement.style.display =
  "none";

  answersElement.style.display =
  "none";

  nextBtn.style.display =
  "none";

  resultBox.style.display =
  "block";

  scoreText.innerText =
  `You scored ${score} out of ${questions.length}`;

  // SAVE SCORE

  localStorage.setItem(
    "quizScore",
    score
  );

}


// START QUIZ

loadQuestion();