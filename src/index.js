var debug = (process.env.NODE_ENV == "development");

var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, '');
}

var breakpoint = window.breakpoint = getBreakpoint();
if(debug) console.log("Breakpoint: " + breakpoint);

window.addEventListener('resize', function() {
	breakpoint = getBreakpoint();
	if(debug) console.log("Breakpoint: " + breakpoint);
}, false);

export default breakpoint;