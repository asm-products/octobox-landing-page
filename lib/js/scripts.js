/*
 * Site Name:
 * Author:
 *
 * Site Scripts go in here. Keep it organized!
 */

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

// Check if element has class
function hasClass( target, className ) {
		return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

(function(){
	// Detect android or firefox and then add no-svg to body
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var isFirefox = ua.indexOf("firefox") > -1;
	if(isAndroid || isFirefox) {
		// Add no-svg to <html> because svg animation support is not consistent
		document.getElementsByTagName('html')[0].className+=' no-svg';
	}

	// Draw Logo
	var current_frame, total_frames, path, length, handle, myobj;

	myobj = document.getElementById('site-logo').cloneNode(true);

	var init = function() {
		current_frame = 0;
		total_frames = 60;
		path = [];
		length = [];
		for(var i=0; i<4;i++){
			path[i] = document.getElementById('i-'+i);
			l = path[i].getTotalLength();
			length[i] = l;
			path[i].style.strokeDasharray = l + ' ' + l;
			path[i].style.strokeDashoffset = l;
		}
		handle = 0;
	};

	var draw = function() {
		var progress = current_frame/total_frames;
		if (progress > 1) {
			window.cancelAnimationFrame(handle);
		} else {
			current_frame++;
			for(var j=0; j<path.length;j++){
				// path[j].style.opacity = (current_frame/100) * 100/60;
				path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
			}
			handle = window.requestAnimationFrame(draw);
		}
	};

	if (!isFirefox && !isAndroid){
		init();
		draw();
	}

  // Initialize WOW.js if there's cssanimations support
  if (!hasClass(document.getElementsByTagName('html')[0], 'no-cssanimations')){
		new WOW({
			mobile: false
		}).init();
  }


})();
