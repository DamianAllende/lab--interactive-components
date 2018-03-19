const formm = document.forms.validationForm
let usernameValidation = document.querySelector(".validation--username")
let passwordValidation = document.querySelector(".validation--user-password")
let passwordConfirmValidation = document.querySelector(".validation--confirm-password")
let id = document.querySelector(".validation--tax-id")
let selection = document.querySelector(".validation--account")
let check = document.querySelector(".validation--terms-of-service")




formm.addEventListener("submit", function(event){
event.preventDefault()
	let username = formm.elements.username.value
	if(username){
		usernameValidation.textContent = "Success"
	}else{
		usernameValidation.textContent = "username cannot be blank"
	}

	let password = formm.elements.userpassword.value
	if(password.length > 7){
		passwordValidation.textContent = "Success"
	}else{
		passwordValidation.textContent = "Password must have a minimum of 8 characters"
	}

	let passwordConfirm = formm.elements.confirmpassword.value
	if (passwordConfirm === password && passwordConfirm) {
		passwordConfirmValidation.textContent = "Success"
	}else{
		passwordConfirmValidation.textContent = "Passwords must match"
	}

	let idNumber = formm.elements.taxid.value
	newIdNumber = parseInt(idNumber)
	if (typeof newIdNumber === "number" && newIdNumber) {
		id.textContent = "Success"
	}else{
		id.textContent = "Must provide Tax ID Number"
	}

	let select = formm.elements.account
	const selected = select.selectedIndex
	if (selected === 0 ) {
		selection.textContent = "Must select account type"
	}else{
		
		selection.textContent = "Success"
	}

	let terms = formm.elements.termsofservice
	console.log(terms.checked)
	if(terms.checked === true){
		check.textContent = "Success"
	}else{
		check.textContent = "Must approve terms of service"
	}

})

//"Password must have a minimum of 8 characters"