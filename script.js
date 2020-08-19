let drinks = [
    {
    name:"Old Fashioned",
    image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", 
    style: "stirred", 
    ingredients: "sugar, water, bitters"
},
{
    name:"Daiquiri", 
    image:"https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg", 
    style: "shaken",
    ingredients:"sugar,lime,rum"
},
{   name:"Martini",
    image:"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    style:"stirred",
    ingredients:"gin,vermouth,bitters"
},{ name:"Collins",
    image:"https://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
    style: "highball",
    ingredients:"gin,soda,lime"
},{
    name:"Manhattan",
    image: "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
    style:"stirred",
    ingredients:"whiskey,vermouth,bitters"
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
    console.log(this)
    currentScore += 10
    score.innerHTML= currentScore
}
function deductScore (){
    console.log(this)
    currentScore -= 10
    score.innerHTML= currentScore
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
    console.log(this) // this refers to the specific card that its attached to.
}

//Created a loop, that will create DIVs for the front and back card.
for (let i =0;i<cardContainers.length;i++){
    let cardFront = document.createElement('div')
    let cardInformation = document.createTextNode(drinks[i].name)
    cardFront.appendChild(cardInformation)
    cardContainers[i].appendChild(cardFront) // cardContainers need [i] because it is an array.
    cardContainers[i].addEventListener("click", cardListener)
}

