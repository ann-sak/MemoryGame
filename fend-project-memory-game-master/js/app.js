/*
 * Create a list that holds all of your cards
 */
/*const items = document.querySelector("");*/
const cardList = ['fa-diamond', 'fa-paper-plane-o', "fa-anchor", "fa-bolt", "fa-cube", "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond", "fa-bomb", "fa-leaf", "fa-bomb", "fa-bolt", "fa-bicycle", "fa-paper-plane-o", "fa-cube"];


let openCard = [];
let solvedCount = 0;
let moves = 0;
let timeCount = 0;



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

function getClassFromCard (currentCard) {
  return currentCard.className;
}

document.getElementById('deck').appendChild(makeGrid(cardList));



function incrementMove(){
    moves += 1;
    $("#moves").html(moves);
    if (moves === 10 || moves === 24  )
        reduceStar();
    }

function reduceStar(){
    let stars = $(".fa-star");
    $(stars[stars.length-1]).toggleClass("fa-star fa-star-o");
  }

function setTimeOfDelay (openCard) {
    for (var i = 0; i < openCard.length; i++) {
      openCard[i].parentElement.className = ('card')
       }
}


function startTimer(){
    timeCount += 1;
    $("#timer").html(timeCount);
    timerPtr = setTimeout(startTimer, 1000);
}

const card = document.querySelector(".card");
const deckDOM = document.querySelector(".deck");


function cardMatch (openCard) {

  for (var i = 0; i < openCard.length; i++) {
    openCard[i].parentElement.animateCss('tada', function(){
      openCard[i].parentElement.className = ("card match");
    });
  }
}

function endGame () {
  clearTimeout(timerPtr);
  const modal = document.getElementById('myModal');
  const close = document.getElementsByClassName("close")[0];
  const again = document.getElementsByClassName("play-again")[0];
  modal.style.display = "block";
  close.onclick = function() {
    modal.style.display = "none";
  }
  again.onclick = function() {
    modal.style.display = "none";
    function restart (evt) {
      shuffle(cardList);
      solvedCount = 0;
      $(".card.show.open.match").toggleClass("show open match");
      $(".card.show.open").toggleClass("show open");
      openCard = [];
      moves = 0;
      $("#moves").html(moves);
      let stars = $(".fa-star");
    }
  }
}

  deckDOM.addEventListener("click", function onCardClick (evt) {
    if (timeCount === 0) {
      startTimer();
    }
    if (openCard.length < 2 ){
      if (evt.target.className === "card") {
        evt.target.className += ' show open';
        openCard.push(evt.target.firstChild);
      }
    }
    if (openCard.length === 2 ) {
       if (getClassFromCard (openCard[0]) === getClassFromCard(openCard[1])) {
         if (evt.target.className === "card show open") {
           for (var i = 0; i < openCard.length; i++) {
             openCard[i].parentElement.className += (" match");
        }
      }
      openCard = [];
      incrementMove();
      solvedCount++;
      }
    }
    if (openCard.length === 2 ) {
       if (getClassFromCard (openCard[0]) !== getClassFromCard(openCard[1])) {
         if (evt.target.className === "card show open") {
           for (var i = 0; i < openCard.length; i++) {
             openCard[i].parentElement.className = ('card show open')
           }
           setTimeout(setTimeOfDelay, 600, openCard);
         }
         openCard = [];
      }
      incrementMove();
    }
    if (solvedCount === 8) {
      endGame();
    }
});

  const restart = document.querySelector("#restart");

  restart.addEventListener("click", function restart (evt) {
    shuffle(cardList);
    solvedCount = 0;
    $(".card.show.open.match").toggleClass("show open match");
    $(".card.show.open").toggleClass("show open");
    openCard = [];
    moves = 0;
    $("#moves").html(moves);
    let stars = $(".fa-star");
  });

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
