var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%";
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .95;
	console.log("The new speed is " + video.playbackRate)
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .95;
	console.log("The new speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Original time: " + video.currentTime);
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15
	}
	else {
		video.currentTime = 0
		console.log("Start of video")
	}

	console.log("New time: " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false
		this.innerHTML = "Mute"
	}
	else {
		video.muted = true
		this.innerHTML = "Unmute"
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100
	volume.innerHTML = this.value + "%"
	console.log ("The volume is " + video.volume)
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
		
})


document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
		
})








