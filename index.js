const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById('question-text').innerText = questionData.question;

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        button.innerText = questionData.options[index];
    });
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = quizData[currentQuestion].correct;
    if (selectedIndex === correctAnswerIndex) {
        score++;
    }
    
    // Show the score and next button
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Your score: ${score}`;
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.getElementById('result-container').style.display = 'none';
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Quiz Over! Final Score: ${score}</h2>`;
    }
}

// Initial load
loadQuestion();

