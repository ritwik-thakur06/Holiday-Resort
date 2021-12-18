function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";
	
	var errors="";
	if(document.getElementById("fname").value.length<3)
	{
		errors +="The First name must be at least 3 Character.<br>";
	}
	/*
	if(document.getElementById("subscribe").checked==false)
	{
		errors +="You must Check at least one.<br>";
	}*/
	if(document.getElementById("lname").value.length<5)
	{
		errors +="The Last Name must be at least 5 character <br>";
	}
	if(document.getElementById("extra").value=="")
	{
		errors +="You must select a Package.<br>";
	}
	if(document.getElementById("room").value=="")
	{
		errors +="Please Select a Room.<br>";
	}
	if(document.getElementById("address").value.length<5)
	{
		errors +="Address must be 5 character.<br>";
	}
	if(document.getElementById("phone").value.length<10)
	{
		errors +="Phone Number must be 10 digit.<br>";
	}
	if(document.getElementById("amount").value.length<3)
	{
		errors +="Amount must be Rs100 to Rs.999.<br>";
	}
	if(document.getElementById("card").value.length<4)
	{
		errors +="Please Enter Your 5 Digit Valid Card Number.<br>";
	}
	if(document.getElementById("email").value.length<10)
	{
		errors +="Enter a Valid Email Address.<br>";
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

document.getElementById("form").onsubmit=checkFormEntry;