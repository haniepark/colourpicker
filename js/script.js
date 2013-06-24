$(document).ready(function(){

	// the colour blocks are sortable.
	$('#palette').sortable();
	
	// toggle
	$(document).on('click', '.colour', function(){
		var hex = $(this).data('hex');
		var rgb = $(this).data('rgb');
		
		var nSpan = $(this).find('span').length;
		if (nSpan == 0){
			$(this).find('p').append("<span><br><br>HEX: " + hex + "</span>" + "<span><br>rgb: " + rgb + "</span>");
		}else{
			$(this).find('span').remove();
		}
	});	
	
});



