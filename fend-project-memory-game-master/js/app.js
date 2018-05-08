/*
 * Create a list that holds all of your cards
 */
/*const items = document.querySelector("");*/
const cardList = ['fa-diamond', 'fa-paper-plane-o', "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-bomb", "fa-leaf", "fa-bomb", "fa-bolt", "fa-bicycle", "fa-paper-plane-o", "fa-cube"];
let openCard = [];
let solvedCount = 0;
let moves = 0;

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

shuffle(cardList);

const shuffledArray = [shuffle(cardList)];
console.log(shuffledArray);/*--------onlycheck---------*/

function makeGrid (array) {
  var ul = document.createElement('ul');
  ul.className += ('deck');
  for (let i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    li.className += 'card';
    var item = document.createElement('i');
    item.className += 'fa ' + (array[i]);
    li.appendChild(item);
    ul.appendChild(li);
  }
  return ul;
}

function getClassFromCard (array) {
  return array[i].className;
}

document.getElementById('deck').appendChild(makeGrid(cardList));

const card = document.querySelector(".card");
const deckDOM = document.querySelector(".deck");

function incrementMove(){
    moves += 1;
    $("#moves").html(moves);
    if (moves === 1 || moves === 2  ){/*--------1and2-OnlyForCheck---------*/
        reduceStar();
    }
}
function reduceStar(){
    let stars = $(".fa-star");
    $(stars[stars.length-1]).toggleClass("fa-star fa-star-o");
  }

deckDOM.addEventListener("click", function onCardClick (evt) {
  if (openCard.length < 2 ){
    if (evt.target.className === "card") {
      evt.target.className += ' show open';
      openCard.push(evt.target.firstChild);

    }
  }
  else if (openCard === 2 ) {
    if (getClassFromCard (openCard[0]) === getClassFromCard(openCard[1])) {
      if (evt.target.className === "card") {
        evt.target.className += ' match';
      }
    }
  }
  incrementMove();
  console.log(openCard);/*--------onlycheck---------*/
  console.log(getClassFromCard());
});









/*if (getClassFromCard(openCard[0]) === getClassFromCard(openCard[1])) {
  card.className += ' match';
  solvedCount += 1;
  console.log(solvedCount);
} else {
  openCard = [];
  card.toggleClass('show open');
}


function getClassFromCard (array){
  return array.firstChild.className;
}*/







/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976






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
