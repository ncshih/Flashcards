//Class declarations and functions

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



//Initialization stuff


var topFolder = new Folder();
var currentDeck = new Deck();
topFolder.addDeck(currentDeck);
var currentFlashcard;



//Jquery Stuff
//btns- btnPlayDeck, btnOpenCardEditor, btnCreateCard, btnOpenPreview, btnClosePreview
$(document).ready(function() {
	$("#btnOpenCardEditor").click(function() {
		//Check to make sure the default string is not in the textarea(s), then add both sides to a bank of cards
		console.log("open a new mkFlashcard window");
		//if we are not making a card at the moment

			makingCard = true;
			chrome.app.window.create('mkFlashcard.html', {
				'bounds': {
					'width':400,
					'height': 500
				},
				'id':"mkFlashcardWindow"
			});
	});

	$("#btnPlayDeck").click(function() {
		console.log("play the deck");
	});

	$('#btnCreateCard').click(function() {
		var FRONT = $('#frontside').val();
		var BACK = $('#backside').val();
		currentDeck.addFlashcard(new Flashcard(FRONT,BACK));
		chrome.app.window.current().close();
	});



});



