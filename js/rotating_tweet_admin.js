/*
 Script to cycle the rotating tweets
*/
jQuery(document).ready(function() {
	// Make sure the form fits the reality
	jQuery('input.rtw_ad_official:checked').each(function() {
		var response = jQuery(this).attr('value');	
		if( response == 0) {
			jQuery(this).parent().find('.rtw_ad_tw_det').show('fast');
		} else {
			jQuery(this).parent().find('.rtw_ad_tw_det').hide('fast');
		}
	});
	// Script to show mouseover effects when going over the Twitter intents
	jQuery('.rtw_ad_official').change(function() {
		var response = jQuery(this).attr('value');
		if( response == 0) {
			jQuery(this).parent().find('.rtw_ad_tw_det').show('fast');
		} else {
			jQuery(this).parent().find('.rtw_ad_tw_det').hide('fast');			
		}
	});
});
