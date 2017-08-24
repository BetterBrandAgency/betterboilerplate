//
// Breakpoint Identifier
//

function updateIdenfifier() {
	const window_width = window.innerWidth;
	const window_height = window.innerHeight;
	const identifier = document.getElementsByClassName('breakpoint-identifier')[0];

	identifier.setAttribute('data-width', window_width);
	identifier.setAttribute('data-height', window_height);
}

window.onload = function() {
	updateIdenfifier();
}

window.onresize = function() {
	updateIdenfifier();
}