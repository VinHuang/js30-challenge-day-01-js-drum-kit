window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const sounds =Array.from(document.querySelectorAll('audio'));
const drumRoot = "https://raw.githubusercontent.com/VinHuang/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/";
const drumSounds = {
  "65": "clap.wav",
  "83": "hihat.wav",
  "68": "kick.wav",
  "70": "openhat.wav",
  "71": "boom.wav",
  "72": "ride.wav",
  "74": "snare.wav",
  "75": "tom.wav",
  "76": "tink.wav"
};

function init() {
  sounds.forEach( snd => snd.src = drumRoot + drumSounds[snd.getAttribute('data-key')])
}

init();