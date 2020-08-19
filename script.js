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

