/*
 Add some transitions
*/
(function($) {
"use strict";

$.fn.cycle.transitions.scrollDown = {
    before: function( opts, curr, next, fwd ) {
        opts.API.stackSlides( opts, curr, next, fwd );
        var height = opts.container.css('overflow','hidden').height();
        opts.cssBefore = { top: fwd ? -height : height, left: 0, opacity: 1, display: 'block' };
        opts.animIn = { top: 0 };
        opts.animOut = { top: fwd ? height : -height };
    }
};
$.fn.cycle.transitions.scrollUp = {
    before: function( opts, curr, next, fwd ) {
        opts.API.stackSlides( opts, curr, next, fwd );
        var height = opts.container.css('overflow','hidden').height();
        opts.cssBefore = { top: fwd ? height : -height, left: 0, opacity: 1, display: 'block' };
        opts.animIn = { top: 0 };
        opts.animOut = { top: fwd ? -height : height };
    }
};

})(jQuery);
/*
 Script to cycle the rotating tweets
*/
jQuery(document).ready(function() {
	// Not at all sure we need this
	jQuery('.rotatingtweets').cycle();
	// Script to show mouseover effects when going over the Twitter intents
	jQuery('.rtw_intents a').hover(function() {
		var rtw_src = jQuery(this).find('img').attr('src');
		var clearOutHovers = /_hover.png$/;
		jQuery(this).find('img').attr('src',rtw_src.replace(clearOutHovers,".png"));
		var rtw_src = jQuery(this).find('img').attr('src');
		var srcReplacePattern = /.png$/;
		jQuery(this).find('img').attr('src',rtw_src.replace(srcReplacePattern,"_hover.png"));
	},function() {
		var rtw_src = jQuery(this).find('img').attr('src');
		var clearOutHovers = /_hover.png/;
		jQuery(this).find('img').attr('src',rtw_src.replace(clearOutHovers,".png"));
	});
	jQuery('.rtw_wide .rtw_intents').hide();
	jQuery('.rtw_expand').show();
	jQuery('.rotatingtweets').has('.rtw_wide').hover(function() {
		jQuery(this).find('.rtw_intents').show();
	},function() {
		jQuery(this).find('.rtw_intents').hide();
	});
});
/* And call the Twitter script while we're at it! */
/* Standard script to call Twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");