$(document).ready(function(){
	
	$.getJSON( "employees.json", function( data ) {
	  console.log('success');
	  /**var items = [];
	  $.each( data, function( key, val ) {
		items.push( "<li id='" + key + "'>" + val + "</li>" );
	  });**/
	});
	
});