'use strict';

//
// Breakpoint Identifier
//

function updateIdenfifier() {
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	var identifier = document.getElementsByClassName('breakpoint-identifier')[0];

	identifier.setAttribute('data-width', window_width);
	identifier.setAttribute('data-height', window_height);
}

window.onload = function () {
	updateIdenfifier();
};

window.onresize = function () {
	updateIdenfifier();
};
"use strict";

$(document).ready(function () {});