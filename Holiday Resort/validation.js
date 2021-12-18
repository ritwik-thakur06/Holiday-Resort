function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";
	
	var errors="";
	if(document.getElementById("username").value.length<5)
	{
		errors="The username must be at least 5 Character.<br />";
	}
	if(document.getElementById("subscribe").checked==false)
	{
		errors +="You must signed up for Email Updates.";
	}
	if(document.getElementById("password").value.length<5)
	{
		alert("Please Type Correct 5 digit Password");
	}
	

	if(errors!="")
	{
		document.getElementById("errorMessage").innerHTML=errors;
	}
	else{
		//document.getElementById("successMessage").innerHTML="You have successfully signed up Man";
		window.location.href="index.html";
	}
	return false; 
}

document.getElementById("form").onsubmit=checkFormEntry;