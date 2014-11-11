

function Folder() {
	var decks = [];
	this.addDeck = function(Deck) {
		decks.push(Deck);
	};
	this.getDecks = function() {
		return decks;
	};
}
function Deck() {
	var cards = [];
	this.addFlashcard = function(Flashcard) {
		cards.push(Flashcard);
	};
	this.shuffleFlashcards = function() {
		//TODO
	};
	this.playCards = function() {
		return cards;
	};
	this.getRandomCard = function() {
		return cards[Math.floor(Math.random()*items.length)];
	};
}

function Flashcard(front,back) {
	this.front = front;
	this.back = back;

}

var topFolder = new Folder();
var currentDeck = new Deck();
topFolder.addDeck(currentDeck);
var currentFlashcard;


var makingCard = false;


$(document).ready(function() {
	$("#btnNewCard").click(function() {
		//Check to make sure the default string is not in the textarea(s), then add both sides to a bank of cards
		var textFront = $('#frontside').val();
		var textBack = $('#backside').val();
		if (textFront === 'Fill in the frontside of your flashcard here!' || textBack === 'Fill in the back side of your flashcard here!' || textFront === "" || textBack ==="") {
			//display some sort of error message
			console.log("TODO: error message");
		}
		else {
			//store the shit inside the textarea to a new Flashcard
			//CHECK TO SEE IF THIS WORKS
			currentFlashcard = new Flashcard(textFront,textBack);
			currentDeck.addFlashcard(currentFlashcard);
		}
	});
	

	
});

