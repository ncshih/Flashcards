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
var previewFlashcard;
var FRONT;
var BACK;


//Jquery Stuff
//btns- btnPlayDeck, btnOpenCardEditor, btnCreateCard, btnOpenPreview, btnClosePreview
$(document).ready(function() {
	$("#btnOpenCardEditor").click(function() {
		console.log("open a new mkFlashcard window");
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
		FRONT = $('#frontside').val();
		BACK = $('#backside').val();
		console.log(BACK);
		currentFlashcard = new Flashcard(FRONT,BACK);
		currentDeck.addFlashcard(currentFlashcard);
		chrome.app.window.current().close();
	});

	$('#btnOpenPreview').click(function() {
		console.log("open a new preview window");
		chrome.app.window.create('preview.html', {
			'bounds': {
				'width':400,
				'height':500
			},
			'id':"preWindow"
			
		}, function() {
			console.log($('#frontside'));
			console.log($('#frontPreview').length);
		});


		var $FRONTp = $('#frontPreview');
		var $BACKp = $('#backPreview');
		var FRONT = $('#frontside').val();
		var BACK = $('#backside').val();
		$FRONTp.html("something else");
		$BACKp.html(BACK);

	});



});



