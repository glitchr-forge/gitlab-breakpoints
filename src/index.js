import './scss/index.scss';

var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, '');
}

var breakpoint = getBreakpoint();
console.log("Breakpoint: " + breakpoint);

window.addEventListener('resize', function() {
	breakpoint = getBreakpoint();
	console.log("Breakpoint: " + breakpoint);
}, false);

export default breakpoint;