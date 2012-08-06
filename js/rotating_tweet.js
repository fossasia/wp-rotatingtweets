/*
 Script to cycle the rotating tweets
*/
jQuery(document).ready(function() {
	jQuery('.rotatingtweets').each(function() {
		var rotate_id = "#"+this.id
		var rotate_id_split = rotate_id.split('_');
		var rotate_timeout = rotate_id_split[1];
		var rotate_fx = rotate_id_split[2];
		/* If we have the zeebizcard template - set a minimum height - used to do this via a separate script, but this is easier to maintain */
		if (jQuery('#zee_stylesheet-css').is('link')) {
			var rotate_height = '7em';
		} else {
			var rotate_height = 'auto';
		}
		/* If the rotation type has not been set - then set it to scrollUp */
		if(rotate_fx == null){rotate_fx = 'scrollUp'};
		/* Call the rotation */
		jQuery(rotate_id).cycle({
			pause: 1,
			height: rotate_height,
			timeout: rotate_timeout,
			fx: rotate_fx
		});
	});
});
/* And call the Twitter script while we're at it! */
/* Standard script to call Twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");