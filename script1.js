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
var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 60;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("times up!");
       }
     }
   }


   var myQuestions = [
	{
        question: "What are the correct proportions for an Old Fashioned?",
        
		answers: {
			A: '1.5 ounces Rum, 0.75 ounces of Lime Juice, 0.5 ounces of Simple Syrup',
			B: '2.0 ounces Whiskey, 0.5 ounces of Simple Syrup, 2 dashes of Bitters',
			C: '1.5 ounces Gin, 1.0 ounces of sweet vermouth, 2 dashes of Bitters'
		},
		correctAnswer: 'b'
	},
	{
		question: "Shaken or Stirred?",
		answers: {
			A: 'Shaken',
			B: 'Stirred'
		},
		correctAnswer: 'b'
    }
  
];
var myQuestions2 = [
	{
		question: "What is the correct amount of Spirit, simple, and bitters?",
		answers: {
			A: '1.5 ounces Rum, 0.75 ounces of Lime Juice, 0.5 ounces of Simple Syrup',
			B: '2.0 ounces Whiskey, 0.5 ounces of Simple Syrup, 2 dashes of Bitters',
			C: '1.5 ounces Gin, 1.0 ounces of sweet vermouth, 2 dashes of Bitters'
		},
		correctAnswer: 'b'
	},
	{
		question: "Shaken or Stirred?",
		answers: {
			A: 'Shaken',
			B: 'Stirred'
		},
		correctAnswer: 'b'
    }
  
];

var quizContainer = document.getElementById('quiz');    
var quizContainer2 = document.getElementById('quiz2'); 
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

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
