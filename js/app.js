/*function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(runQuiz);
*/


var quiz = [
	{
		name: "HTML Quiz",
		marks: 100,
		passingMarks: 65,
		time: "15 Minutes",
		instructions: "You have 10 Questions, each question contain 10 marks. Time limite is 15 Minutes & your passing marks is 60...",
		questions: [
			{question: 'What does HTML stand for?', choice: ['Home Tool Markup Language', 'Hyper Text My Language','Hyper Text Markup Language', 'Hyperlinks and Text Markup Language'], correct: 2},
			{question: 'Choose the correct HTML element for the largest heading:', choice: ['<h1>', '<h6>', '<heading>', '<h>'], correct: 0},
			{question: 'What is the correct HTML element for inserting a line break?', choice: ['<lb>', '<br>', '<break>', '</break>'], correct: 1},
			{question: 'What is the correct HTML for adding a background color?', choice: ['<body bg="yellow">', '<body style="background-color:yellow;">', '<background>yellow</background>', '<bg>yellow</bg>'], correct: 1},
			{question: 'Choose the correct HTML element to define emphasized text', choice: ['<italic>', '<i>', '<em>', '</emp>'], correct: 2},
			{question: 'What is cell padding?', choice: ['Used to separate cell walls from their contents.', 'Used to set space between cells', 'Both a and b above', 'Used to provide width to a cell'], correct: 0},
			{question: 'Which of the following attributes are used for a font style?', choice: ['fontname', 'fn', 'font', 'font-family'], correct: 3},
			{question: 'What is the <hr> tag for?', choice: ['Space', 'Horizontal Line', 'Line Break', 'Word Break'], correct: 1},
			{question: 'What is the attribute for <image> tag?', choice: ['src', 'url', 'path', 'alt'], correct: 0},
			{question: 'What attribute is used to specify number of rows?', choice: ['Rownum', 'Rownumb', 'rn', 'Rowspan'], correct: 3},
		]
	},
	
	{
		name: "CSS Quiz",
		marks: 100,
		passingMarks: 60,
		time: "15 Minutes",
		instructions: "You have 10 Questions, each question contain 10 marks. Time limite is 15 Minutes & your passing marks is 60...",
		questions: [
			{question: 'What does CSS stand for?', choice: ['Cascading Style Sheets', 'Creative Style Sheets','Colorful Style Sheets', 'Computer Style Sheets'], correct: 0},
			{question: 'What is the correct HTML for referring to an external style sheet?', choice: ['<style src="mystyle.css">', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>', '<link name="stylesheet"" src="mystyle.css" >'], correct: 1},
			{question: 'Where in an HTML document is the correct place to refer to an external style sheet?', choice: ['At the end of the document', 'In the <head> section', 'In the <body> section', 'At any where'], correct: 1},
			{question: 'Which HTML tag is used to define an internal style sheet?', choice: ['<script>', '<css>', '<link>', '<style>'], correct: 3},
			{question: 'Which HTML attribute is used to define inline styles?', choice: ['class', 'styles', 'font', 'style'], correct: 3},
			{question: 'Which is the correct CSS syntax?', choice: ['{body;color:black;}', '{body:color=black;}', 'body {color: black;}', 'body:color=black;'], correct: 2},
			{question: 'How do you insert a comment in a CSS file?', choice: ['/* this is a comment */', ' " this is a comment', '// this is a comment //', '// this is a comment'], correct: 0},
			{question: 'Which property is used to change the background color?', choice: ['color', 'bgcolor', 'background-color', 'backgroundColor'], correct: 2},
			{question: 'How do you add a background color for all <h1> elements?', choice: ['h1.all {background-color:#FFFFFF;}', 'h1 {background-color:#FFFFFF;}', 'all.h1 {background-color:#FFFFFF;}', 'h1 = all {background-color:#FFFFFF;}'], correct: 1},
			{question: 'Which CSS property is used to change the text color of an element?', choice: ['text-color', 'fgcolor', 'color', 'fontColor'], correct: 2},
		]
	},
	
	{
		name: "JavaScript Quiz",
		marks: 100,
		passingMarks: 60,
		time: "15 Minutes",
		instructions: "You have 10 Questions, each question contain 10 marks. Time limite is 15 Minutes & your passing marks is 60...",
		questions: [
			{question: 'Inside which HTML element do we put the JavaScript?', choice: ['<js>', '<javascript>','<scripting>', '<script>'], correct: 3},
			{question: 'What is the correct syntax for referring to an external script called "xxx.js"?', choice: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">', '<link src="xxx.js">'], correct: 2},
			{question: 'How do you write "Hello World" in an alert box?', choice: ['msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'], correct: 1},
			{question: 'How do you create a function in JavaScript?', choice: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', ' function = var  myFunction()'], correct: 1},
			{question: 'How do you call a function named "myFunction"?', choice: ['myFunction()', 'call myFunction()', 'call function myFunction()', 'functionCall myFunction()'], correct: 0},
			{question: 'How to write an IF statement in JavaScript?', choice: ['if i == 5 then', 'if i = 5 then', 'if (i == 5)', 'if i = 5'], correct: 2},
			{question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?', choice: ['if (i <> 5)', 'if (i != 5)', 'if i <> 5', 'if i =! 5 then'], correct: 1},
			{question: 'How does a WHILE loop start?', choice: ['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)', 'while (var i=0; i <= 10)'], correct: 2},
			{question: 'How does a FOR loop start?', choice: ['for (i <= 5; i++)', 'for (i = 0; i <= 5; i++)', 'or i = 1 to 5', 'for (i = 0; i <= 5)'], correct: 1},
			{question: 'How can you add a comment in a JavaScript?', choice: ['//This is a comment', '"This is a comment', '<!--This is a comment-->', '/--comment--/'], correct: 0},
		]
	}

];




var btnBox = document.getElementById("btn-box");
btnBox.style.display = "none";

function welcomeFunc(){
    document.getElementById("welcome-box").style.display = "none";
    btnBox.style.display = "block";
}


var x = 0;
var quizIndex;
var score = 0;
var quizBox = document.getElementById("quiz-box");
quizBox.style.display = "none";
var instuctionBox = document.getElementById("instruction-box");
instuctionBox.style.display = "none";
document.getElementById("score-box").style.display = "none";

function startQuiz(ind){
	quizIndex = ind;
	quizConfirm();
}

function quizConfirm(){
	quiz[quizIndex];
	document.getElementById("quiz-name").textContent = quiz[quizIndex].name;
	document.getElementById("quiz-instructions").textContent = quiz[quizIndex].instructions;
	btnBox.style.display = "none";
	instuctionBox.style.display = "block";
	
}

		// timer start
		var show = document.getElementById('timer'),
		  seconds = 60,
		  minutes = 9,
		  flag = false;
		  function sub(){
			  seconds--;
			  if(seconds <= 0){
				  seconds = 59;
				  minutes--;
			  }
			if(minutes <= 0){
				result();
				alert("Time's Up...")
				document.getElementById("score-box").style.display = "block";
				quizBox.style.display = "none";
			}else{
		  flag = true;
		  show.innerHTML = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : "00") + ':' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : "00")
		timerStart()
			}
		}
		
		function timerStart() {
			setTimeout(sub, 1000)
		}
			  
        // timer end


function runQuiz(){
		
		if(quiz[quizIndex].questions[x] == undefined ){
			result();
			document.getElementById("score-box").style.display = "block";
			quizBox.style.display = "none";
			console.log('after increment', x );
		}else{
			if(flag){flag = false}
			else{timerStart()};
		document.getElementById("instruction-box").style.display = "none";
		quizBox.style.display = "block";
        btnBox.style.display = "none";
        document.querySelector('.question-number').textContent = 'Question No: ' + (x+1);
        document.querySelector('.question').textContent = quiz[quizIndex].questions[x].question;
		
        var choices = document.querySelectorAll('label');
        for(var i=0; i<choices.length; i++){
            choices[i].textContent = quiz[quizIndex].questions[x]['choice'][i];
        }		
		
		}
}

function next(){

    var inputs = document.querySelectorAll('input');
    if(quiz[quizIndex].questions[x] === undefined ){
         return false;
    }else if(inputs[0].checked != true && inputs[1].checked != true && inputs[2].checked != true && inputs[3].checked != true ){
        alert('Please select any one answer...');
    }else{
        for(var i=0; i<inputs.length; i++){
            if(inputs[i].checked === true && i === quiz[quizIndex].questions[x].correct){
                score++;
                break;
			}
        }
		for(var i=0; i<inputs.length; i++){	
			inputs[i].checked = false;
		}
				console.log('score', score , x );
    x++;
	runQuiz();
	
    }
	
} 

console.log(score);

function result(){

	var ansBox = document.getElementById("corr-ans");
	var resultBox = document.getElementById("result");
	var remarks = document.getElementById("remarks");
	var totalMarks = 150;

	ansBox.innerHTML = score; //score ? (score > 9 : '0' + score) : '00';
	var calculation = ((score*15) * 100)/totalMarks;
	resultBox.innerHTML  = calculation + "%";
	if(calculation <60){
		remarks.innerHTML = "Sorry! You Are Fail... <br> Need Hard Work";
	}else if(calculation >= 60){
		remarks.innerHTML = "Congratulation! You Are Passed... <br> Keep It Up..."
	}
}

function refresh(){
	window.location.reload();
}

