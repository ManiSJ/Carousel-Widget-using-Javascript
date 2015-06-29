function list(event){
var x=event.target||event.srcElement;
document.getElementById("outer").src=(x).src;
}

function lclick(){
	count=count+1;
	x=document.getElementsByClassName("hid");
	a=(x.length)-1;
	active=document.getElementsByClassName("one");
	if(count==1 || active[0].style.display == "block")
	{
	active[0].style.display = "none";
	x[a].style.display="block";
	}
	else
	{
	for(var i=a;i>=0;i--)
	{
    if(x[i].style.display == "block")
		{
			if(x[i].style.display == "block" && x[i]!==x[0])
			{
			x[i].style.display = "none";
			x[i].previousElementSibling.style.display="block";
			}
			else
			{
			x[i].style.display = "none";
			active[0].style.display = "block";
			}
		break;
		}
	}
	}	
}

function rclick()
{
	count=count+1;
	if(count==1 || active[0].style.display == "block")
	{
	active=document.getElementsByClassName("one");
	active[0].style.display = "none";
	active[0].nextElementSibling.style.display="block";
	}
	else
	{
	var x=document.getElementsByClassName("hid");
	for(var i=0;i<x.length;i++)
	{
    if(x[i].style.display == "block")
		{
		y=x[i].parentNode;
		z=y.lastElementChild;
			if(x[i].style.display == "block" && x[i]!==z)
			{
			x[i].style.display = "none";
			x[i].nextElementSibling.style.display="block";
			}
			else
			{
			x[i].style.display = "none";
			active[0].style.display = "block";
			}
		break;
		}
	}
	}	
}

function hide() {
	count=0;
	var cla=document.getElementsByClassName("hid");
	for (var i = 0; i < cla.length; i ++) {
    cla[i].style.display = "none";
	}

}

window.onload=hide;