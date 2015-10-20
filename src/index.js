"use strict";

// Overwrite the style of ncc
require("./style.css");

if (window.location.href.indexOf("room") !== -1) {
	// Enable drag and drop photo upload
	require("./dragdrop.js");
}
