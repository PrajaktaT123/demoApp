
/* login validation start*/
function checkenter(e)
{
    var charCode = (navigator.appName == "Netscape") ? e.which : e.keyCode;

    if (charCode == 13)
    {
        validateUser();

    }
    return true;
}
function validateUser(){

        var username = $('#username').val();
        var password = $('#password').val();
        
        if($('#username').val() == ""){
			$('#errorDiv').text('Enter User Id');
		
		}else if($('#password').val() == ""){
			$('#errorDiv').text('Please Enter Password');
			
		}else{
			$('#errorDiv').empty();
			checkLogin(username, password);
		}
		
}

function checkLogin(username, password) {
	$.ajax({
		type: "POST",
		url: "checkLogin",
		//traditional : true,
		contentType: "application/json; charset=UTF-8",
		data:JSON.stringify({requestJson:{
			username: username,
			password: password
		}}),
		success: function(response) {

			//document.getElementById('valid').innerHTML = response;
			if (response == true) {
				document.getElementById('errorDiv').innerHTML = "";
				//window.location.href = "./deliverableDetails";
				window.location.href = "./first-page";
			} else if (response == false) {
				document.getElementById('errorDiv').innerHTML = "<div class='error-message'>incorrect username or password</div>";
				document.frm.username.focus();
			}

		}
	});

}


/* login validation end*/

/* Validate Session Start*/
function checkSession(){
	
	var session = '';
	
	$.ajax({
		url : 'checkSession',
		type : 'POST',
		datatype : 'text',
		contentType : 'text/plain charset=UTF-8',
		async : false,
		success : function(response){
			//alert('session : '+response);
			if(response.includes('Invalid')){
				window.location.href="logout";
			}else{
				session = 'valid';
			}
			
		},error : function(response){
			$('#message').val(response);
			$('#message').addClass('alert alert-danger');
			
		}
	});
	//alert('session : '+session);
	return session;
}
/* Validate Session End*/

		

function onlyNumberKey(event){
	
	var ASCIICode = (event.which) ? event.which :event.keyCode
	if(ASCIICode > 31 &&(ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}

function checkNull(value) {
	//alert(value);
    if (typeof value !== 'string') {
        return "";
    }
    
    if (value === undefined || value === null || value == 'null' ) {
		//alert('Return');
        return "";
    }
    
    return value.trim();
}
