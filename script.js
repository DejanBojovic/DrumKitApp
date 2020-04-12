const main = document.querySelector('.main');
const button = document.querySelector('#signature');

button.addEventListener('click', function(){
    main.style.visibility = 'visible';
    button.style.display = 'none';
            
});

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            
    if(!audio) return; // stop function from running 

    audio.currentTime = 0; // rewinds audio to start
    audio.play(); // plays audio

    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if its not a transform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);