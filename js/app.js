/*
 * Create a list that holds all of your cards
 */
const gameCards = ["fa fa-fighter-jet", "fa fa-fighter-jet", "fa fa-rocket", 
"fa fa-rocket", "fa fa-star-half-o", "fa fa-star-half-o", 
"fa fa-moon-o", "fa fa-moon-o", "fa fa-diamond", "fa fa-diamond", "fa fa-leaf", "fa fa-leaf", 
"fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");

let openedCards = [];
let matchedCards = [];
let allCards = shuffle(gameCards);

/*
 * Creating the game
 */

function init() {
    for(let i = 0; i < gameCards.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = "<i class='" + gameCards[i] + "'</i>";
        cardsContainer.appendChild(card);
    
//Click Event to each Card
        click(card);
    }
}
/*
 * Click Event
 */

// First Click Indicator
let firstClick = true;

function click(card) {

// Card Click Event
    card.addEventListener("click", function() {

        if(firstClick) {
// Start our timer
            startTimer();
// Change our First Click indicator's value
            firstClick = false;
        }
        
        const currentCard = this;
        const previousCard = openedCards[0];

//OPENED card
        if(openedCards.length === 1) {

            card.classList.add("open", "show", "disable");
            openedCards.push(this);

// We should compare our 2 opened cards!
        compare(currentCard, previousCard);

        } else {
// no open cards yet
            currentCard.classList.add("open", "show", "disable");
            openedCards.push(this);
        }
        
    });
}

/*
 * Compare the 2 cards
 */

function compare(currentCard, previousCard) {

// Matcher
    if(currentCard.innerHTML === previousCard.innerHTML) {
                
// Matched
        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchedCards.push(currentCard, previousCard);

        openedCards = [];

// Check if the game is over!
        isOver();

    } else {
        
        setTimeout(function() {
            currentCard.classList.remove("open", "show", "disable");
            previousCard.classList.remove("open", "show", "disable");
            
        }, 200);

        openedCards = [];
        
    }

// Add New Move
    addMove();
}

/*
 * Check if the game is over!
 */
function isOver() {
    if(matchedCards.length === gameCards.length) {

        stopTimer();

        alert("You Win! Congratulations!");
        
    }
}

/*
 * Add move
 */

const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0;
function addMove() {
    moves++;
    movesContainer.innerHTML = moves;

// Set the rating
    rating();
}

/*
 * Rating
 */
const starsContainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = star + star + star;
function rating() {

    if( moves < 10) {
        starsContainer.innerHTML = star + star + star;
    } else if( moves < 15) {
        starsContainer.innerHTML = star + star;
    } else {
        starsContainer.innerHTML = star;
    }
}


/*
 * Timer
 */
const timerContainer = document.querySelector(".timer");
let liveTimer,
    totalSeconds = 0;

// Set the default value to the timer's container
timerContainer.innerHTML = totalSeconds + 's';

//timer start when user first click
 function startTimer() {
    liveTimer = setInterval(function() {
        totalSeconds++;
        timerContainer.innerHTML = totalSeconds + 's';
    }, 1000);
}

function stopTimer() {
    clearInterval(liveTimer);
}

/*
 * Restart Button
 */

const restartBtn = document.querySelector(".restart");
    restartBtn.addEventListener("click", function() {
// Delete ALL cards
    cardsContainer.innerHTML = "";

// Call `init` to create new cards
init();

// Reset the game
reset();

});


/*
 * Reset All Game Variables
 */
function reset() {
    matchedCards = [];

/*
 *moves
 */
    moves = 0;
    movesContainer.innerHTML = moves;

/*
 *Reset rating
 */
    starsContainer.innerHTML = star + star + star;

/*
* Reset the `timer`
*/
stopTimer();
    isFirstClick = true;
    totalSeconds = 0;
    timerContainer.innerHTML = totalSeconds + "s";
}


/*
 *Start the game for the first time!
 */
init();

/*
 *Shuffle function from http://stackoverflow.com/a/2450976
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
