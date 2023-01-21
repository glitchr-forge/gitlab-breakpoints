import './scss/index.scss';

var debug = debug || true;
var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, '');
}

var breakpoint = getBreakpoint();
if(debug) console.log("Breakpoint: " + breakpoint);

window.addEventListener('resize', function() {
	breakpoint = getBreakpoint();
	if(debug) console.log("Breakpoint: " + breakpoint);
}, false);

export default breakpoint;