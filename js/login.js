let attempt=4
function validate()
{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username==="Hello" && password==="123")
    {
        alert("Login Successfull");
        window.location="home.html";
        
    }
    else
    {
        attempt--;
        alert("You have "+attempt+" attempts left");
        if(attempt===0)
        {
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
            alert("Login failed")
            window.location="index.html"
        }
    }
}