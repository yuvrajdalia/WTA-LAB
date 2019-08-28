function validate()
{
	let name=document.getElementById("name").value
	let mobile=document.getElementById("mobno").value
	let email=document.getElementById("email").value
	if(name.length===0)
	{
		alert("Name cannot be empty, please try again");
		name="";
	}
	if(mobile.length!==10)
	{
		alert("Mobile number should be of 10 digits, please try again");
		mobile="";
	}
	if(email.length===0)
	{
		alert("Email cannot be empty, please try again");
		email="";
	}
	let password=document.getElementById("password").value
	if(password.length===0)
	{
		alert("password cannot be empty, please try again");
		password=""
	}

	let repeat=document.getElementById("repeat").value;
	if(repeat!==password)
	{
		alert("Passowrds do not match,try again")
		password="";
		document.getElementById("repeat").value="";
		document.getElementById("password").value="";
	}
	if(email.length!==0 && password.length!==0 && repeat===password && name.length!==0 && mobile.length===10)
	{
		window.location="home.html"
	}
}