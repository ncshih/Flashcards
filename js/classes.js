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

function Deck(name) {
	var cards = [];
	this.name = name;
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