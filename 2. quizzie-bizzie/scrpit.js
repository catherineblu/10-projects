const quizData = [
  {
    question: "How old am I?",
    a: "26",
    b: "27",
    c: "28",
    d: "29",
    correct: "b",
  },
  {
    question: "What I want to become?",
    a: "Front-end developer",
    b: "Back-end developer",
    c: "QA",
    d: "DevOPS",
    correct: "a",
  },
  {
    question: "What is my second most favorite thing?",
    a: "Counting the stars",
    b: "Shopping",
    c: "Designing things",
    d: "Nothing...",
    correct: "c",
  },
  {
    question: "Which language is back-end?",
    a: "CSS",
    b: "HTML",
    c: "Javascript",
    d: "PHP",
    correct: "d",
  },
  {
    question: "What is Bootstrap?",
    a: "Programming language",
    b: "The most popular HTML, CSS, and JS library in the world.",
    c: "A meal?",
    d: "I dunno :D",
    correct: "b",
  },
];
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer);
  
    if (answer){
      if (answer === quizData[currentQuiz].correct){
        score++;
      }
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
              } else {
                alert("You finished! ");
              }
    }    
});
