function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";
	
	var errors="";
	if(document.getElementById("username").value.length<5)
	{
		errors="The username must be at least 5 Character.<br />";
	}
	if(document.getElementById("subscribe1").checked==false)
	{
		errors +="you must signed up.";
	}

	if(errors!="")
	{
		document.getElementById("errorMessage").innerHTML=errors;
	}
	else{
		//document.getElementById("successMessage").innerHTML="You have successfully signed up Man";
		window.location.href="Success.html";
	}
	return false; 
}

document.getElementById("form1").onsubmit=checkFormEntry;