document.addEventListener('DOMContentLoaded', function() {
	const audio = document.getElementById('background-music');
	audio.volume = 0.5;

	function playMusic() {
		// Ensure this function runs after a meaningful user interaction
		audio.play().then(() => {
			console.log('Autoplay allowed');
			// Remove event listeners after the first successful interaction
			document.removeEventListener('click', playMusic);
			document.removeEventListener('keydown', playMusic);
		}).catch(error => {
			console.error('Autoplay was prevented:', error);
		});
	}

	// Add event listeners for user interaction
	document.addEventListener('click', playMusic);
	document.addEventListener('keydown', playMusic);
});