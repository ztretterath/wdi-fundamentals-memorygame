
var cards = ['queen', 'queen', 'king', 'king'];

//var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    
    cardElement.className = 'card';
		
    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
  }
}

function isTwoCards()
{
  //cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king')
  {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	}
  else
  {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}

  if (cardsInPlay.length === 2)
  {
    if (!isMatch(cardsInPlay))
    {
      alert("images are yellow!!!");
      // todo: fix the images to yellow
    }
    cardsInPlay = [];
  }
}

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])
  {
    alert ("You found a match!");
    return true;
  }
  else
  {
	  alert ("Try again!");
    return false;
	}
}

createBoard();
