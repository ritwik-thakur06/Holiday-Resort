var i=0;
var imagefiles=['a.jpg', 'b.jpg', 'c.jpg','d.jpg','e.jpg','f.jpg'];
window.setInterval(startSlider,2000);

function startSlider()

{
	document.getElementById("topimg").src="images/home/"+ imagefiles[i];
	i++;
	if(i>5)
	{
		i=0;
	}
	
}
/*Comic Sans MS*/
var today=new Date();
var element=document.getElementById("date").innerHTML=today.toDateString();

var hour=today.getHours();
var greet;
if(hour>=18)
{
	greet=" Good Evening";
}
else if(hour>=12)
{
	greet=" Good Afternoon";
}	
else{
	greet=" Good Morning";
}

document.getElementById("greets").innerHTML=greet;

var footer1='Copyright @ 2021';
var footer2='Holiday Resort Pokhara Lakeside';
document.getElementById("footer1").innerHTML=footer1;
document.getElementById("footer2").innerHTML=footer2;

