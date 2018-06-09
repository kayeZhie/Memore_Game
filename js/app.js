/*
 * List that holds all of the cards
 */
const gameCards = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o",
 "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube",
 "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

 /*
 *This is the class value for the card container
 */
const cardsContainer = document.querySelector(".deck");

/*
*To compare the clicked card (it saves in an array)
*/
let openedCards =[];

/*
after creating the class value, we use appendchild to show the gameCards
*/
for(let i = 0; i < gameCards.length; i++){
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = "<i class='" + gameCards[i] + "'</i>";
    cardsContainer.appendChild(card);
/*
*Added click event listener 
*/
    card.addEventListener("click", function() {
  
    //match cards//
    if(openedCards.length === 1) {

        card.classList.add("open", "show");
        openedCards.push(this);
    
    //compare two opened cards//
    if(this.innerHTML === openedCards[0].innerHTML){
        console.log("Matched!");
    } else {
    //card doesn't match//
        console.log("Doesn't match!");
    }
     
     /*this is where you stopped 25.59*/  
        card.classList.add("open", "show");
        openedCards.push(this);
    }

    card.classList.add("open", "show");
    openedCards.push(this);
    });
} 



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var count = 5;
function moveCounter(bool) {
	if(bool === true){
		count++;
	}
	else if(bool === false){
		count--;
	}
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//flipping cards

//match cards