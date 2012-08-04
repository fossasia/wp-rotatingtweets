/*
 Script to cycle the rotating tweets
*/
jQuery(document).ready(function() {
	jQuery('.rotatingtweets').each(function() {
		var rotate_id = "#"+this.id
		var timeoutdelay = rotate_id.split('_');
		jQuery(rotate_id).cycle({
			pause: 1,
			timeout: timeoutdelay[1],
			fx: 'scrollUp'
		});
	});
});
/* And call the Twitter script while we're at it! */
/* Standard script to call Twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");