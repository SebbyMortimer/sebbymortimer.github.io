function playAudio(img) {
	const audio = document.getElementById("background-music");
	const source = document.getElementById("music-source");
	
	source.src = "../audio/" + img.src.replace(/^.*[\\\/]/, "").replace("jpg", "mp3");
	audio.load();
	audio.play();
}