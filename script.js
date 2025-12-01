function playAudio(img) {
	const audio = document.getElementById("background-music");
	const source = document.getElementById("music-source");
	
	source.src = "../audio/" + img.src.replace(/^.*[\\\/]/, "").replace("jpg", "mp3");
	audio.load();
	audio.play();
}

function checkSeasonal() {
    const d = new Date();
    if (d.getMonth() == 9 && d.getDate() > 24 && d.getDate() < 32) { // check if month is october (getMonth starts at 0) and its the week leading to halloween
        document.body.style.setProperty("--bg-image", 'url("images/SteampunkAirshipHalloween.gif")');
        document.body.style.color = "#d72700";
        document.querySelectorAll('h1, h2').forEach(tag => {
            tag.style.fontFamily = "MonsterMash";
            tag.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
        });
        document.querySelectorAll('p, ul').forEach(tag => {
            tag.style.color = "#f48e55";
        });
        document.querySelectorAll('main, .textBackground').forEach(tag => {
            tag.style.backgroundColor = "#160025";
        });
        document.querySelector('footer').style.backgroundColor = "#000000";
    }
}

checkSeasonal();