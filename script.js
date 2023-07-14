let navbar1 = document.querySelector(".nav1");
let isNav1Opened = false;
let navbar2 = document.querySelector(".nav2");
let isNav2Opened = false;
let navbar3 = document.querySelector(".nav3");
let isNav3Opened = false;
let navbar4 = document.querySelector(".nav4");
let isNav4Opened = false;

document.onkeydown = keydown;

function keydown(event) {
	if ((event.ctrlKey || event.metaKey) && event.key == "m") {
		toggleNav("left");
	}
	if (event.key == "n") {
		toggleNav("right");
	}
	if (event.key == "t") {
		toggleNav("top");
	}
	if ((event.ctrlKey || event.metaKey) && event.key == "s") {
		toggleNav("bottom");
	}
}

function toggleNav(position) {
	if (position == "left") {
		!isNav1Opened
			? (navbar1.style.translate = "0")
			: (navbar1.style.translate = "100%");
		isNav1Opened = !isNav1Opened;
	}
	if (position == "right") {
		!isNav2Opened
			? (navbar2.style.translate = "0")
			: (navbar2.style.translate = "-100%");
		isNav2Opened = !isNav2Opened;
	}
	if (position == "top") {
		!isNav3Opened
			? (navbar3.style.translate = "0")
			: (navbar3.style.translate = "0 -100%");
		isNav3Opened = !isNav3Opened;
	}
	if (position == "bottom") {
		!isNav4Opened
			? (navbar4.style.translate = "0")
			: (navbar4.style.translate = "0 100%");
		isNav4Opened = !isNav4Opened;
	}
}
