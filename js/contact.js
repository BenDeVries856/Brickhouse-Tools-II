$(document).ready(function(){
	
	$("#btnSubmit").click(function(e){
		e.preventDefault();
		
		var error_message = "";
		var error_match = "";
		var valid = true;
		
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var mobile = $("#mobile").val();
		
		var gender = $('#gender option:selected').text();
		var referral = $('#referral option:selected').text();
		var comments = $('#comments').val();
		var signup = $('#signup').checked;
		if($('#signup').is(':checked')){
			signup = true;
		}else{
			signup = false;
		}
		
		if(fname === ""){
			$('#error_fname').text("*");
			valid = false;
			error_message = "Fields marked by * are required.";
		}else{
			$('#error_fname').text("");
		}if(lname === ""){
			$('#error_lname').text("*");
			valid = false;
			error_message = "Fields marked by * are required.";
		}else{
			$('#error_lname').text("");
		}if(email === ""){
			$('#error_email').text("*");
			valid = false;
			error_message = "Fields marked by * are required.";
		}else{
			$('#error_email').text("");
		}if(phone === ""){
			$('#error_phone').text("*");
			valid = false;
			error_message = "Fields marked by * are required.";
		}else{
			$('#error_phone').text("");
		}if(mobile === ""){
			$('#error_mobile').text("*");
			valid = false;
			error_message = "Fields marked by * are required.";
		}else{
			$('#error_mobile').text("");
		}
		
		var phone_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
		if(!phone_regex.test(String(mobile))){
			valid = false;
			error_match = "Mobile number is not valid.";
			$('#error_mobile').text("*");
		}else{
			$('#error_mobile').text("");
		}
		if(!phone_regex.test(String(phone))){
			valid = false;
			error_match = "Phone number is not valid.";
			$('#error_phone').text("*");
		}else{
			$('#error_phone').text("");
		}
		
		var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!email_regex.test(String(email).toLowerCase())){
			valid = false;
			error_match = "Email is not valid.";
			$('#error_email').text("*");
		}else{
			$('#error_email').text("");
		}
		
		if(valid){
			$('#error_message').text("");
			$('#error_match').text("");
			
			document.location.href = "formsubmit.html";
			
		}else{
			$('#error_message').text(error_message);
			$('#error_match').text(error_match);
		}
		
	});
	
	$("#btnReset").click(function(e){
			
		$('#error_fname').text("");
		$('#error_lname').text("");
		$('#error_email').text("");
		$('#error_phone').text("");
		$('#error_mobile').text("");
			
	});
	
});