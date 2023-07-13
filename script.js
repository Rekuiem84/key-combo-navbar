let navbar = document.querySelector(".navbar");
let isNavOpened = false;

document.onkeydown = keydown;
function keydown(event) {
	console.log("event : ", event.keyCode, event);
	if ((event.ctrlKey || event.metaKey) && event.key == "m") {
		!isNavOpened
			? (navbar.style.translate = "0")
			: (navbar.style.translate = "-100%");
		isNavOpened = !isNavOpened;
		console.log(
			"ctrl :",
			event.ctrlKey,
			", cmd :",
			event.metaKey,
			", m :",
			event.key == "m"
		);
	}
}
//   document.onkeydown = function(e) {
//         if (e.altKey && (e.keyCode === 67||e.keyCode === 86)) {//Alt+c, Alt+v will also be disabled sadly.
//             alert('not allowed');
//         }
//         return false;
// };​
