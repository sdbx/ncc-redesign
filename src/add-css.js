"use strict";

module.exports = (css) => {
	let style = document.createElement('style');
	style.type = "text/css";
	style.innerHTML = css;

	document.head.appendChild(style);
}
