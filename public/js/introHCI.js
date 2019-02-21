'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function onClicks(event){
	gtag("send", "event", 'like', 'click');
	console.log("FUCK");
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeCtr").click(onClicks);
}

