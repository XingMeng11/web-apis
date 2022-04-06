// establish variables to start countdown
// when click startQuiz button, make the first cover page disappear, and make the first quiz show

var timeEl = document.querySelector("#time");
var seconds = 60;
var start_Quiz = document.querySelector(".startBtn");

start_Quiz.addEventListener("click", function(){

  var startPage = document.getElementById("start-Page");
  startPage.style.display = "none";
  var question1 = document.getElementById("question-1");
  question1.style.display = "block";

  var timer = setInterval(function(){
    if (seconds <=0) {
      clearInterval(timer);
    }else{
      seconds = seconds-1;
      timeEl.textContent = seconds;
    }
  },1000);
})


// work on the first quiz

var question1= document.querySelector("#question-1");
question1.addEventListener("click", function(event){
  var btn = event.target;
  if (btn.matches(".choice-btn")) {
// calculate count down
    var change = parseInt (btn.getAttribute("time-change"));
    seconds = seconds + change;

    if (seconds <=0) {
      clearInterval(timer);
    }
      timeEl.textContent = seconds;
// show second quiz
    question1.style.display = "none";
    var question2 = document.getElementById("question-2");
    question2.style.display = "block";

    var choice1 = btn.textContent;
    var answer1 = btn.parentElement.getAttribute("answer1");
    var question1Re = document.querySelector(".answer-result1");
    if (choice1 === answer1) {
      question1Re.textContent = "Correct!";
      clearInterval()
    }else{
      question1Re.textContent = "Wrong!";
    }
  }
})


// work on the second quiz


var question2 = document.querySelector("#question-2");
question2.addEventListener("click", function(event){
  var btn = event.target;
  if (btn.matches(".choice-btn")) {
    //calculate count down
    var change = parseInt (btn.getAttribute("time-change"));
    seconds = seconds + change;
    if (seconds <=0) {
      clearInterval(timer);
    }
      timeEl.textContent = seconds;

   //show the third quiz   
    question2.style.display = "none";
    var question3 = document.getElementById("question-3");
    question3.style.display = "block";

    var choice2 = btn.textContent;
    var answer2 = btn.parentElement.getAttribute("answer2");
    var question2Re = document.querySelector(".answer-result2");
    if (choice2 === answer2) {
      question2Re.textContent = "Correct!";
    }else{
      question2Re.textContent = "Wrong!";
    }
  }
})

// work on the third quiz



var question3 = document.querySelector("#question-3");
question3.addEventListener("click", function(event){
  var btn = event.target;
  if (btn.matches(".choice-btn")) {
// count down 
    var change = parseInt (btn.getAttribute("time-change"));
    seconds = seconds + change;

    if (seconds <=0) {
      clearInterval(timer);
    }
      timeEl.textContent = seconds;
// show the fourth quiz
    question3.style.display = "none";
    var question4 = document.getElementById("question-4");
    question4.style.display = "block";

    var choice3 = btn.textContent;
    var answer3 = btn.parentElement.getAttribute("answer3");
    var question3Re = document.querySelector(".answer-result3");
    if (choice3 === answer3) {
      question3Re.textContent = "Correct!";
    }else{
      question3Re.textContent = "Wrong!";
    }
  }
})

// when click any botton in the quiz4, make the change in seconds

var timeControlEl4 = document.querySelector(".time-control4");
timeControlEl4.addEventListener("click", function(event){
  var btnEl = event.target;
  if(btnEl.matches(".choice-btn")){
    
  }
});


var question4 = document.querySelector("#question-4");
question4.addEventListener("click", function(event){
  var btn = event.target;
  if (btn.matches(".choice-btn")) {
// count down
    var change = parseInt (btn.getAttribute("time-change"));
    seconds = seconds + change;

    if (seconds <=0) {
      clearInterval(timer);
    }
      timeEl.textContent = seconds;

    // show the fifth quiz
    question4.style.display = "none";
    var question5 = document.getElementById("question-5");
    question5.style.display = "block";

    var choice4 = btn.textContent;
    var answer4 = btn.parentElement.getAttribute("answer4");
    var question4Re = document.querySelector(".answer-result4");
    if (choice4 === answer4) {
      question4Re.textContent = "Correct!";
    }else{
      question4Re.textContent = "Wrong!";
    }
  }
})

// work on the fifth quiz

var question5 = document.querySelector("#question-5");
question5.addEventListener("click", function(event){
  var btn = event.target;
  if (btn.matches(".choice-btn")) {
// count down
    var change = parseInt (btn.getAttribute("time-change"));
    seconds = seconds + change;

    if (seconds <=0) {
      clearInterval(timer);
    }
      timeEl.textContent = seconds;
// show next page
    question5.style.display = "none";
    var score1 = document.getElementById("score-1");
    score1.style.display = "block";

    var choice5 = btn.textContent;
    var answer5 = btn.parentElement.getAttribute("answer5");
    var question5Re = document.querySelector(".answer-result5");
    if (choice5 === answer5) {
      question5Re.textContent = "Correct!";
    }else{
      question5Re.textContent = "Wrong!";
    }
  }
})


var initialInput = document.querySelector("#initial");
var final_score = document.querySelector("#finalScore");
var submitButton = document.querySelector("#submit");
renderInitial();

function displayMessage(type, message) {
  final_score.textContent = "Your final score is: " + message;
  final_score.setAttribute("class", type);
}

function renderInitial() {
  var initial = localStorage.getItem("initial");
  initialInput.textContent = initial;
}
  
submitButton.addEventListener("click", function(event){
  event.preventDefault();

  var scorePage1= document.getElementById("score-1");
  scorePage1.style.display = "none";
  var scorePage2 = document.getElementById("score-2");
  scorePage2.style.display = "block";

  var initial = document.querySelector("#initial").value;
});