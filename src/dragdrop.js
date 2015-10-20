"use strict";

window.addEventListener("dragenter", (e) => {
	let style = document.getElementById("send_photo").style;
	style.display = "block";
	style.position = "fixed";
	style.top = 0;
	style.left = 0;
	style.right = 0;
	style.bottom = 0;
	style.width = "100%";
	style.height = "100%";
});

window.addEventListener("drop", (e) => {
	setTimeout(() => {
		let style = document.getElementById("send_photo").style;
		style.display = "none";
	}, 10);
});

document.getElementById("send_photo").addEventListener("dragleave", (e) => {
	let style = document.getElementById("send_photo").style;
	style.display = "none";
});
