function openOverlay() {
	$('.js-overlay').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}

function closeOverlay() {
	$('.js-overlay').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

function updateOverlayButton() {
	$('.js-overlay-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function() {

	$('.js-overlay-open').click(function(){
		openOverlay();
		updateOverlayButton();
	});

	$('.js-overlay-close').click(function(){
		closeOverlay();
		updateOverlayButton();
	});

});

$(document).keyup(function(e) { // Listen for keyboard presses

	if (e.keyCode === 27) { // 'Esc' key

		if ($('.js-overlay').hasClass('is-open')) { // If the menu is open close it
			closeOverlay(); // Run the closeMenu function
			updateOverlayButton();
		}

	}

});