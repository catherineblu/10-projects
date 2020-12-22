const quizData = [
    {
        question: 'How old am I?',
        a: '26',
        b: '27',
        c: '28',
        d: '29',
        correct: 'b'
    },{
        question: 'What I want to become?',
        a: 'Front-end developer',
        b: 'Back-end developer',
        c: 'QA',
        d: 'DevOPS',
        correct: 'a'
    },{
        question: 'What is my second most favorite thing?',
        a: 'Counting the stars',
        b: 'Shopping',
        c: 'Designing things',
        d: 'Nothing...',
        correct: 'c'
    },{
        question: 'Which language is back-end?',
        a: 'CSS',
        b: 'HTML',
        c: 'Javascript',
        d: 'PHP',
        correct: 'd'
    },{
        question: 'What is Bootstrap?',
        a: 'Programming language',
        b: 'The most popular HTML, CSS, and JS library in the world.',
        c: 'A meal?',
        d: 'I dunno :D',
        correct: 'b'
    }
];

let currentQuestion = 0;
loadQuiz();

function loadQuiz(){

    currentQuestion++;
}