var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var quizTitle = document.getElementById('quizTitle');
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var questions = document.getElementById('questions');
var count = 60;



// Start Quiz: Make Question 1 appear and start timer



startBtn.addEventListener('click', start);  

function start() {
    startBtn.classList.add('hide');
    quizTitle.classList.add('hide');
    question1.classList.remove('hide');
    nextBtn.classList.remove('hide');
    
   
}


var questions = [
    {
        question: "Which data type is the following value: True",
        answers: [
            {text: "String", correct: false},
            {text: "Boolean", correct: true},
            {text: "Undefined", correct: false}
        ]
    }

    

]


// Next Button and Question 2

nextBtn.addEventListener('click', next1);  

function next1(){
    question1.classList.add('hide');
    question2.classList.remove('hide');   
}



// Timer








