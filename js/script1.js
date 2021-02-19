function validation()
{
	var correct_way =/^[A-Za-z]+$/;
	var user = document.getElementById('user').value;
	var age = document.getElementById('age').value;
	var email = document.getElementById('email').value;
	var mobileno = document.getElementById('mobileno').value;
		if (user == "")
		{
			document.getElementById('users').innerHTML="** Please write your Name **";
			return false;
		}
		if (user.match(correct_way))
			true;
			else
			{
				document.getElementById('users').innerHTML="** user must write only alphabets **";
				return false;
			}
		/*if (!isNaN(user)) 
		{
			document.getElementById('users').innerHTML="** user must write only alphabets **";
			return false;
		}*/
		
		if (age == "")
		{
			document.getElementById('ages').innerHTML="** Please write your Age **";
			return false;
		}
		if (isNaN(age) || age<0 ||age>150)
		{		 
		    document.getElementById('ages').innerHTML="** The age must be a number between 0 and 150 **";
		    return false;
		}

		if (email == "")
		{
			document.getElementById('emails').innerHTML="** Please write your MailID **";
			//return false;
		}
		if (email.indexOf('@') <= 0 ) 
		{
			document.getElementById('emails').innerHTML="** @ Invalid Position **";
			//return false;	
		}
		if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
		{
			document.getElementById('emails').innerHTML="** . Invalid Position **";
			//return false;	
		}
		if (mobileno == "")
		{
			document.getElementById('mobilenos').innerHTML="** Please write your Mobileno **";
			return false;
		}
		if (isNaN(mobileno)) 
		{
			document.getElementById('mobilenos').innerHTML="** user must write only digits **";
			return false;
		}
		if (mobileno.length!=10) 
		{
			document.getElementById('mobilenos').innerHTML="** mobileno must be 10 digits **";
			return false;
		}
		
}
