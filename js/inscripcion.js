function correo(){
	let emailField = document.getElementById('usuario');
	let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		Swal.fire({
title: 'Gracias por contactar!',
html:'Recibirás un correo con toda la información' + 
'<iframe src="https://embed.lottiefiles.com/animation/93865"></iframe>',
timer: 7000,
onOpen: function() {
	swal.showLoading()
}
})
		return false;
	}else{
		
		Swal.fire({
title: 'Atención usuario',
html:'Has ingresado un correo inválido' +
'<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
timer: 5000,
onOpen: function() {
	swal.showLoading()
}
})
		return false;
	}
}