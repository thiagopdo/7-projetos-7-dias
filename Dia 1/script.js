document.body.addEventListener("keyup", () => {
	playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
	let song = document.querySelector("#input").value;

	if (song !== "") {
		let songArray = song.split("");

		playComposition(songArray);
	}
});

function playSound(sound) {
	let = audioEl = document.querySelector(`#s_${sound}`);
	const keyEl = document.querySelector(`div[data-key="${sound}"]`);

	if (audioEl) {
		audioEl.currentTime = 0;
		audioEl.play();
	}

	if (keyEl) {
		keyEl.classList.add("active");

		setTimeout(() => {
			keyEl.classList.remove("active");
		}, 300);
	}
}

function playComposition(songArray) {
	let wait = 0;

	for (let songItem of songArray) {
		setTimeout(() => {
			playSound(`key${songItem}`);
		}, wait);

		wait += 250;
	}
}
