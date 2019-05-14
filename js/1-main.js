jQuery(function($){
	
	$(document).ready(function() {
		if(cur_page_data.pageid == 1 || cur_page_data.pagename == "home"){
			$('.hide_section').css('display','block');
		}
		else{
			$('.hide_section').css('display','none');
		}	
	
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
		});
		
		var $window = $(window),
			$body = $('body');		
			
			$window.scroll(function(){
				$('#site-header-menu').removeClass('toggled-on');
			});
			
			$('#site-header-menu').scroll(function() {
				 $('#site-header-menu').addClass('toggled-on');
			});
		
	}); 
		 	
});
