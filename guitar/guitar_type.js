function playAudio() {

	var text = document.getElementById("text_input").value.toLowerCase();
	// var text_elem = document.getElementById("text_input");
	text_animation = document.getElementById("text_animation");
	var num_letters = text.length;
	var index = 0;
	var audio = new Audio();

	audio.src = "audio/mp3files/fade/" + text[0] + ".mp3";
	index = index + 1;
	document.getElementById("text_input").style.display = "none";
	text_animation.style.display = "flex";
	text_animation.style.color="#cccccc";
	text_animation.innerHTML = '<span style="color: black;">'+text[0]+'</span>' + text.substring(1, num_letters);
	
	audio.play();

	audio.onended = function() {
	    if(index < num_letters) {
	        text_animation.innerHTML = text.substring(0,index) + '<span style="color: black;">'+text[index]+'</span>' + text.substring(index+1,num_letters);
	        audio.src= "audio/mp3files/fade/" + text[index] + ".mp3";
	        audio.play();
	        index++;
	    }

	    else {
	    	document.getElementById("text_input").style.display = "flex";
			text_animation.style.display = "none";
	    }
	}



};

function playLetter(letter) {

	var audio = new Audio();
	audio.src="audio/mp3files/fade/" + letter + ".mp3";
	audio.play();

}