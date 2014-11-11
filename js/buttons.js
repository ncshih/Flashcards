//Jquery Stuff
//btns- btnPlayDeck, btnOpenCardEditor, btnCreateCard
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
		console.log(currentFlashcard);
		save(currentDeck.name,currentDeck);
		//chrome.app.window.current().close();
	});

 



});



