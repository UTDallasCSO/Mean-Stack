function storeCookies()
{
	console.log("Entering storecookies.js");
	//Session_id
	var session_id = 12345;
	//Gender_id
	var e_gender = document.getElementById("gender");
	var gender_id = e_gender.options[e_gender.selectedIndex].value;
	
	//Age_id
	var e_age = document.getElementById("age");
	var age_id = e_age.options[e_age.selectedIndex].value;
	//Accent_id
	var e_accent = document.getElementById("accent");
	var accent_id = e_accent.options[e_accent.selectedIndex].value;

	document.cookie="session_id="+session_id;
	document.cookie="gender_id="+gender_id;
	document.cookie="age_id="+age_id;
	document.cookie="accent_id="+accent_id;
}