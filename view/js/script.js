function isEmail(email) {
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email)
}

document.getElementById('submit-btn').onclick = function() {
	if(isEmail(document.getElementById('subscription-box').value) == false) {
		document.getElementById('success-message').style.display="none";

		document.getElementById('error-message').style.display="block";

		document.getElementById('subscription-box').value = ''

		setTimeout(function(){ document.getElementById('error-message').style.display = 'none'; }, 5000);

	} else {
		document.getElementById('success-message').style.display="block";

		document.getElementById('error-message').style.display="none";

		document.getElementById('subscription-box').value = ''

		setTimeout(function(){ document.getElementById('success-message').style.display = 'none'; }, 5000);
	}
}