// you need to press musical-note button in order to acces keys 
const keysDiv = document.querySelector(".keys"); // keys section
const button = document.querySelector(".signature"); // button with musical note

// before pressing the button all the keys are invisible
// after pressing button becomes invisible and keys are showed
button.addEventListener('click', function(){
    keysDiv.style.visibility = "visible";
    button.style.display = "none";      
});

// function that gathers information about which key user presses and then plays the appropriate sound
function playSound(e) {
    // getting the audio element with keyCode of the pressed key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // getting the div element that is visual representation of the pressed key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     
    // if audio's keyCode is not connected to one of the pressed letters it is assigned to null and function should be stopped
    if(!audio) {
        return;
    }

    // rewinds audio to start in order not to glitch when user presses the key multiple times fast
    audio.currentTime = 0;
    // plays audio connected to the key
    audio.play();
    // adding class "playing" to the pressed key for the scale and color change effects
    key.classList.add('playing');

    // removing class "playing" after 0.2s because that is when transition finishes
    setTimeout(function() {
        key.classList.remove("playing");
    }, 200)
}

// adding event listener on window object to listen for keypress of the user
window.addEventListener('keydown', playSound);