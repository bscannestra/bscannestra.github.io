let toggle = true ;
let funnee = true ;

document.getElementById('button1').addEventListener('click', function(event) {

	if (toggle) {
		document.body.style.backgroundColor = '#90AEF4';
		toggle = false
	} else {
		document.body.style.backgroundColor = '#F5F5F5';
		toggle = true
	}
});

document.getElementById('button2').addEventListener('click', function(event) {
	
	if (funnee) {
		document.body.style.color = '#90AEF4';
		funnee = false
	} else {
		document.body.style.color = '#191510';
		funnee = true
	}
});

document.getElementById('button3').addEventListener('click', function(event) {
		document.body.style.fontFamily = 'Bitter';
});


document.getElementById('button4').addEventListener('click', function(event) {
	document.getElementById('replacement').innerHTML = "hehehoho you found me";
});


document.getElementById('button5').addEventListener('click', function(event) {
	alert('YOU ARE IT!');
});