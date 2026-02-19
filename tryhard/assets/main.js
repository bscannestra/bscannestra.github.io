const pictureAlarm = document.getElementById('alarm') ;
const pictureTurnOff = document.getElementById('turnoff') ;
const pictureStretch = document.getElementById('stretch') ;
const pictureGetUp = document.getElementById('getup') ;
const pictureThirteen = document.getElementById('imthirteen') ;
const pictureWater = document.getElementById('water') ;
const pictureSeventeen = document.getElementById('imseventeen') ;
const pictureGround = document.getElementById('ground');
const pictureCar = document.getElementById('vroom');
const pictureTwentythree = document.getElementById('imtwentythree');
const allPictures = document.getElementsByClassName('frozenpicture');
const backToTop = document.getElementById('backtotop');

// instantiate the scrollama
const scroller = scrollama();


scroller

	.setup({
		step: ".step",
	})

	.onStepEnter((response) => {

		console.log("enter: ");
		console.log(response);


		// change background colors

		if (response.index >= 3 && response.index < 4 ) {
			document.body.style.backgroundColor = '#F4F4F4';
		} else if (response.index >= 4 && response.index < 5 ) {
			document.body.style.backgroundColor = '#83ABD5';
		} else if (response.index >= 5 && response.index < 6) {
			document.body.style.backgroundColor = '#F4F4F4';
		} else if (response.index >= 6 && response.index < 11) {
			document.body.style.backgroundColor = '#0A0A0A';
		} else if (response.index >= 11 && response.index < 12) {
			document.body.style.backgroundColor = '#f4f4f4';
		} else if (response.index >= 12) {
			document.body.style.backgroundColor = '#0A0A0A';
		} else {
			document.body.style.backgroundColor = '#A5A6A8';
		};



		// hide and show images

		// adds hiding class to images through scrolling

		for (let i=0; i < allPictures.length; i++) {
			allPictures[i].classList.add('hiding');
		};

		// removes hiding class at step cues

		if (response.index == 0) {
			pictureTurnOff.classList.remove('hiding');

		} else if (response.index == 1) {
			pictureStretch.classList.remove('hiding');

		} else if (response.index == 2) {
			pictureGetUp.classList.remove('hiding');

		} else if (response.index == 3) {
			pictureThirteen.classList.remove('hiding');

		} else if (response.index == 4) {
			pictureWater.classList.remove('hiding');

		} else if (response.index == 5) {
			pictureSeventeen.classList.remove('hiding');
		
		} else if (response.index == 7) {
			pictureGround.classList.remove('hiding');

		} else if (response.index == 9) {
			pictureCar.classList.remove('hiding');

		} else if (response.index == 11) {
			pictureTwentythree.classList.remove('hiding');

		}

	})

	.onStepExit((response) => {
		// { element, index, direction }

	});


// reloads the whole page when you click the back to top button

backToTop.addEventListener('click', function(event) {
	location.reload()
});





