var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var quizTitle = document.getElementById('quizTitle');
var questionDiv = document.getElementById('questions');
let questions = document.getElementById('question');


let answers = document.getElementById('answers');




// Start Quiz


startBtn.addEventListener('click', start);  

function start() {
    startBtn.classList.add('hide');
    quizTitle.classList.add('hide');
    questionDiv.classList.remove('hide');
    nextBtn.classList.remove('hide');
    displayQuestion();
}


function displayQuestion() {
    return question[0]
    
    

}

var question = [
    {
        question: "Which data type is the following value: false",
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










