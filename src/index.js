const debug = (process.env.NODE_ENV === "development");

const getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/"/g, '');
}

const breakpoint = window.breakpoint = getBreakpoint();
if(debug) console.log("Breakpoint: " + breakpoint);

window.addEventListener('resize', function() {
	window.breakpoint = getBreakpoint();
	if(debug) console.log("Breakpoint: " + window.breakpoint);
});

export default breakpoint;
