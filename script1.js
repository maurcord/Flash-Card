///////          Created Object "DRINKS"

let drinks = [
    {
    name:"Old Fashioned",
    image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", 
    style: "stirred", 
    ingredients: "2 ounces of Whiskey, 1/2 ounce of simple syrup, 2 dashes of 'Angostura Bitters'. Stir 20 times. Serve on ice. Garnish with orange twist. <br><br><br>The oldest recipe for this drink appears in George Kappeler's Modern American Drinks, published in 1895."
},
{
    name:"Daiquiri", 
    image:"https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg", 
    style: "shaken",
    ingredients:"2 ounces of Rum, 3/4 ounce of fresh lime juice, 3/4 ounce of simple syrup. Shake and strain, serve up in a coupe. Garnish with a lime wheel. <br><br><br>Named after the mining town in Cuba and championed by an American ex-pat engineer by the name of Jennings Cox in the early 1900's."
},
{   name:"Martini",
    image:"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    style:"stirred",
    ingredients:"2 ounces of Gin, 1 ounce of dry vermouth, 2 dashes of orange bitters. Stir 20 times, serve up in a coupe. Garnish with a lemon twist or olives.<br><br><br> French or dry vermouth arrived in the United States in 1870's, and it was only natural that bartenders would start using this product as a subsitute for sweet or italian vermouth."
},
{ name:"Collins",
    image:"https://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
    style: "highball",
    ingredients:"2 ounces of Gin, 3/4 ounce of fresh lemon juice, 3/4 ounce of simple syrup. Shake and strain over ice in highball, top with club soda.<br><br><br> First appeared in print in Jerry Thomas' Bartender Guide in 1876."
},
{   name:"Manhattan",
    image: "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
    style:"stirred",
    ingredients:"2 ounces of whiskey, 1 ounce of sweet vermouth, 2 dashes of 'Angostura Bitters'. Stir 20 times, serve up in a coupe or on the rocks. Garnish with Luxardo cherry.<br><br><br> First appeared in print in Harry Johnson's Bartender's manual in 1882."
}
];
console.log(drinks[0].name)
// making score an element, then changing score to integer with innerHTML
let score = document.querySelector(".score")
let currentScore = parseInt(score.innerHTML)
let greenButton = document.querySelectorAll(".button-green")
// Loops through all the green buttons, and adds event listener "click", 
// and then we added a helper function too addScore(+10). 
for(let i=0;i < greenButton.length;i++){
greenButton[i].addEventListener("click", addScore)
}
function addScore (){
    // alert("Good Job!")
    console.log(this)
    currentScore += 20
    score.innerHTML= currentScore
    if(currentScore ===100){
        alert("Congratulations, you passed! Cheers! You're now an official bartender! Please drink responsibly.")
        resetScore()
    }
}
function deductScore (){
    // alert("Keep Studying!")
    console.log(this)
    currentScore -= 20
    score.innerHTML= currentScore
    if(currentScore === -100){
        alert('You need to study!')
        resetScore()
    }
}
function resetScore () {
    console.log(this)
    currentScore === 0
    score.innerHTML=currentScore
}
// Loops through all the red buttons, and adds event listener "click"
// and then we add helper function "deduct score" that will deduct 10 points
let redButton = document.querySelectorAll(".button-red")
for(let i=0;i<redButton.length;i++) {
    redButton[i].addEventListener("click",deductScore)
}

let cardContainers = document.querySelectorAll(".cards") // This then becomes an array.
console.log(cardContainers)

function cardListener(){
 console.log(this.childNodes[0])
    

    // childNodes[1]is the front of the card
    // childNodes[0] is the back of the card
    // if the front of the card is showing, then the back card display is none.
    // if the back of the card is showing, then the front display is none.
  if (this.childNodes[1].style.display == "block") { 
  this.childNodes[0].style.display = "block";
  this.childNodes[1].style.display= "none"
  // childNodes[1] will now be off
  } 
  else {
        // childNodes[0] will now be off
        this.childNodes[0].style.display = "none";
        this.childNodes[1].style.display = 'block'
    }
  }

// this refers to the specific card that its attached to.
//Created a loop, that will create DIVs for the front and back card.
for (let i =0;i<cardContainers.length;i++){
    let cardFront = document.createElement('div')
    let cardInformation = document.createTextNode(drinks[i].name)
    let cardBack = document.createElement('div')
    let cardBackInformation = document.createElement('p')
    cardBackInformation.innerHTML = drinks[i].ingredients
    cardBack.appendChild(cardBackInformation)
    cardContainers[i].appendChild(cardBack)
    cardBack.style.height= "300px"
    cardBack.style.width="210px"
    cardBack.style.border="5px solid white"
    cardBack.style.borderRadius="15px"
    cardBack.style.display= "none"  
    cardFront.style.borderRadius= "15px"
    cardFront.style.border="5px solid white"
    // Here were are adding images to front 'front' of the div.
    // We are using string interpolation to go through the drink array:"image"
    // and adding backgroundImages
    // Here we are styling the images and position.
    cardFront.style.backgroundImage = `url(${drinks[i].image})`
    cardFront.style.backgroundSize = "cover"
    cardFront.style.height= "300px"
    cardFront.style.width="210px"
    cardFront.style.backgroundPosition= "center"
    cardFront.style.display= "block"
    cardFront.appendChild(cardInformation)
    cardContainers[i].appendChild(cardFront) // cardContainers need [i] because it is an array.
    cardContainers[i].addEventListener("click", cardListener)
}
// var myTimer;
//    function clock() {
//      myTimer = setInterval(myClock, 1000);
//      var c = 60;

//      function myClock() {
//        document.getElementById("demo").innerHTML = --c;
//        if (c == 0) {
//          clearInterval(myTimer);
//          alert("times up!");
//        }
//      }
//    }


   var myQuestions = [
	{
        question: "What are the correct ingredients for an Old Fashioned?",
        
		answers: {
			A: '1.5 ounces Rum, 0.75 ounces of Lime Juice, 0.5 ounces of Simple Syrup',
			B: '2.0 ounces Whiskey, 0.5 ounces of Simple Syrup, 2 dashes of Bitters',
			C: '1.5 ounces Gin, 1.0 ounces of sweet vermouth, 2 dashes of Bitters'
		},
		correctAnswer: 'B'
	},
	{
		question: "Shaken or Stirred?",
		answers: {
			A: 'Shaken',
			B: 'Stirred'
		},
		correctAnswer: 'B'
    }],
  

myQuestions2 = [
	{
        question: "What are the correct ingredients for a Daiquiri?",
        
		answers: {
			A: '2.0 ounces Rum, 0.75 ounces of Lime Juice, 0.75 ounces of Simple Syrup',
			B: '2.0 ounces Whiskey, 0.5 ounces of Simple Syrup, 2 dashes of Bitters',
			C: '1.5 ounces Gin, 1.0 ounces of sweet vermouth, 2 dashes of Bitters'
		},
		correctAnswer: 'A'
	},
	{
		question: "Shaken or Stirred?",
		answers: {
			A: 'Shaken',
			B: 'Stirred'
		},
		correctAnswer: 'A'
    }], 
myQuestions3 = [
	{
        question: "What are the correct ingredients for a Martini?",
		answers: {
			A: '2.5 ounces Tequila, ,1.0 ounces Cointreau, 0.75 ounces of Lime Juice, 0.5 ounces of AgaveSyrup',
			B: '2.0 ounces Gin or Vodka, 1 ounces of dry vermouth, 2 dashes of Orange Bitters',
			C: '1.5 ounces Rum, 1.0 ounces grapefruit juice, .75 ounces of lime juice, 2 dashes of Bitters'
		},
		correctAnswer: 'B'
	},
	{
		question: "Shaken or Stirred?",
		answers: {
			A: 'Shaken',
			B: 'Stirred'
		},
		correctAnswer: 'B'
    }],
    myQuestions4 = [
        {
            question: "What are the correct ingredients for a Tom Collins?",
            answers: {
                A: '2.5 ounces Vodka, .5 ounce of lime juice, 0.5 ounces of simple syrup, 0.5 ounce of agave syrup',
                B: '2.0 ounces Gin, 1.0 ounce of lemon juice, 0.5 ounce of simple syrup, top with club soda',
                C: '1.5 ounces Bourbon, 0.5 ounce of lime juice, .5 ounce of simple syrup, '
            },
            correctAnswer: 'B'
        },
        {
            question: "Shaken or Stirred?",
            answers: {
                A: 'Shaken',
				B: 'Stirred',
				C: 'Built in Glass'
            },
            correctAnswer: 'C'
		}],
		myQuestions5 = [
			{
				question: "What are the correct ingredients for a Manhattan?",
				answers: {
					A: '2.5 ounces, 0.5 ounces of lime juice, 0.5 ounces of simple syrup, 0.5 ounce of agave syrup',
					B: '1.5 ounces Rum, 1.0 ounces of lemon juice, 0.5 ounce of simple syrup, top with club soda',
					C: '2.0 ounces Whiskey, 1.0 ounces of sweet vermouth, bitters '
				},
				correctAnswer: 'B'
			},
			{
				question: "Shaken or Stirred?",
				answers: {
					A: 'Shaken',
					B: 'Stirred'
				},
				correctAnswer: 'B'
			}]
;

var quizContainer = document.getElementById('quiz');    
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var quizContainer2 = document.getElementById('quiz2');    
var resultsContainer2 = document.getElementById('results2');
var submitButton2 = document.getElementById('submit2');

var quizContainer3 = document.getElementById('quiz3');    
var resultsContainer3 = document.getElementById('results3');
var submitButton3 = document.getElementById('submit3');

var quizContainer4 = document.getElementById('quiz4');    
var resultsContainer4 = document.getElementById('results4');
var submitButton4 = document.getElementById('submit4');

var quizContainer5 = document.getElementById('quiz5');    
var resultsContainer5 = document.getElementById('results5');
var submitButton5 = document.getElementById('submit5');

generateQuiz( myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}
generateQuiz2( myQuestions2, quizContainer2, resultsContainer2, submitButton2);

function generateQuiz2(questions2, quizContainer2, resultsContainer2, submitButton2){

	function showQuestions2(questions2, quizContainer2){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions2.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions2[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions2[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions2[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer2.innerHTML = output.join('');
	}


	function showResults2(questions2, quizContainer2, resultsContainer2){
		
		// gather answer containers from our quiz
		var answerContainers2 = quizContainer2.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer2 = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions2.length; i++){

			// find selected answer
			userAnswer2 = (answerContainers2[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer2===questions2[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers2[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers2[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer2.innerHTML = numCorrect + ' out of ' + questions2.length;
	}

	// show questions right away
	showQuestions2(questions2, quizContainer2);
	
	// on submit, show results
	submitButton2.onclick = function(){
		showResults2(questions2, quizContainer2, resultsContainer2);
	}

}

generateQuiz3( myQuestions3, quizContainer3, resultsContainer3, submitButton3);

function generateQuiz3(questions3, quizContainer3, resultsContainer3, submitButton3){

	function showQuestions3(questions3, quizContainer3){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions3.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions3[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions3[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions3[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer3.innerHTML = output.join('');
	}


	function showResults3(questions3, quizContainer3, resultsContainer3){
		
		// gather answer containers from our quiz
		var answerContainers3 = quizContainer3.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer3 = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions3.length; i++){

			// find selected answer
			userAnswer3 = (answerContainers3[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer3===questions3[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers3[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers3[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer3.innerHTML = numCorrect + ' out of ' + questions3.length;
	}

	// show questions right away
	showQuestions3(questions3, quizContainer3);
	
	// on submit, show results
	submitButton3.onclick = function(){
		showResults3(questions3, quizContainer3, resultsContainer3);
	}

}
generateQuiz4( myQuestions4, quizContainer4, resultsContainer4, submitButton4);

function generateQuiz4(questions4, quizContainer4, resultsContainer4, submitButton4){

	function showQuestions4(questions4, quizContainer4){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions4.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions4[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions4[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions4[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer4.innerHTML = output.join('');
	}


	function showResults4(questions4, quizContainer4, resultsContainer4){
		
		// gather answer containers from our quiz
		var answerContainers4 = quizContainer4.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer4 = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions4.length; i++){

			// find selected answer
			userAnswer4 = (answerContainers4[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer4===questions4[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers4[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers4[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer4.innerHTML = numCorrect + ' out of ' + questions4.length;
	}

	// show questions right away
	showQuestions4(questions4, quizContainer4);
	
	// on submit, show results
	submitButton4.onclick = function(){
		showResults4(questions4, quizContainer4, resultsContainer4);
	}
}

generateQuiz5( myQuestions5, quizContainer5, resultsContainer5, submitButton5);

function generateQuiz5(questions5, quizContainer5, resultsContainer5, submitButton5){

	function showQuestions5(questions5, quizContainer5){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions5.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions5[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions5[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions5[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer5.innerHTML = output.join('');
	}


	function showResults5(questions5, quizContainer5, resultsContainer5){
		
		// gather answer containers from our quiz
		var answerContainers5 = quizContainer5.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer5 = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions5.length; i++){

			// find selected answer
			userAnswer5 = (answerContainers5[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer5===questions5[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers5[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers5[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer5.innerHTML = numCorrect + ' out of ' + questions5.length;
	}

	// show questions right away
	showQuestions5(questions5, quizContainer5);
	
	// on submit, show results
	submitButton5.onclick = function(){
		showResults5(questions5, quizContainer5, resultsContainer5);
	}

}