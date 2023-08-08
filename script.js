function calculateAge() {
	var birthdate = document.getElementById("birthdate").value;
	var today = new Date();
	var age = today.getFullYear() - new Date(birthdate).getFullYear();
	var month = today.getMonth() - new Date(birthdate).getMonth();
	if (month < 0 || (month === 0 && today.getDate() < new Date(birthdate).getDate())) {
		age--;
	}
	document.getElementById("result").innerHTML = "Your age is " + age;
}
