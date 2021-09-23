var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var quizTitle = document.getElementById('quizTitle');
var questionDiv = document.getElementById('questions');
var question = document.getElementById('question');
var time = document.getElementById('timer');




// Start Quiz


startBtn.addEventListener('click', start);  

function start() {
    startBtn.classList.add('hide');
    quizTitle.classList.add('hide');
    questionDiv.classList.remove('hide');
    nextBtn.classList.remove('hide');
    timer();
    

    
}


function displayQuestion() {
    
    
var questions = [
    "Which data type is the following value: false", 
    "Question number 2", 
    "Question number 3"  
]

console.log(questions)
}



// Next Button and Question 2

nextBtn.addEventListener('click', next1);  

function next1(){
    question1.classList.add('hide');
    question2.classList.remove('hide');   
}



// Timer



function timer() {
    var timeRemaining = 60;

    var timeInterval = setInterval(function(){
    if (timeRemaining > 1) {
        time.textContent = timeRemaining;
        timeRemaining--;
    } else if (timeRemaining ===1) {
        timeRemaining--;
    } else {
    time.textContent = '';
    clearInterval(timeInterval);
    }

}, 1000);
}






