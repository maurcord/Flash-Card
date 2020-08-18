Learn Cocktails Flash Card

The game is played by showing a picture of a cocktail. The player has to give the correct ingredients for each drink. There are a total of 5 cocktails. For every correct answer, the player is awarded 10 points. Once the player reaches 50 points, you are a bartender! 

//////////////////////

Create 5 Divs(the cards we will be using) in the center of the document.
Each Div(or card)will have a picture of the cocktail on the front.
When the player clicks on the "card" , the card will flip.
On the back of each card will be the ingredients.
Underneath the 5 cards, we will create a green and red box, one correct and one incorrect.
If the player chooses correctly, they will be rewarded with 10 points!
If the player choose incorrectly, they will not receive any points.
Once the player has gotten all 5 drinks ingredients correctly and a score of "50", the player wins!

////////////////////////

Create an Array of 5 cocktails : Old Fashioned, Daiquiri, Martini, Manhattan, Collins


With each array item, create an object for each drink.
Each object should have the info for the drink as so:
            Name: "Old Fashioned"
            Image: "img."
            Style: "Stirred"
            Ingredients: "Sugar, water, bitters, whiskey"

Let drinks = [{Name:"Old Fashioned" Image: "img.jpg" Style: "Stirred" Ingredients: "Sugar, water, bitters, whiskey"}]

Create 5 Divs for each Cocktail. On the front of the Div, place an image of the cocktail. On the back of the "card"(div), have the information listed.

Create 5 div classes for each drink, then use query selector to grab the classes and assign them to an element.
Once you have the element for the classes, create an event listener for each div so that when you click the div, the ingredients will show on the "back" of the card..
Look up CSS Hidden or display:none;
Create conditionals so that the front will display but the back is hidden. once clicked, the back of the card will show.
If card is showing front, then back is hidden. If the card is showing back, then front is hidden. (Look up toggle! https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class)

front div= Image of the Cocktail
back div = Name, Image, Style, Ingredients

Use a loop to go through the drinks length and apply the loop to the divs. We would need to create 




