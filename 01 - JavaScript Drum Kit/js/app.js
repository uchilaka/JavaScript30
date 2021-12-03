function playSound(button, track) {
  track.currentTime = 0;
  track.play();
  if(button) button.classList.add('playing');
}

function resetButton(button, ev = null) {
  if(!ev || ev.propertyName !== 'transform') return
  button.classList.remove('playing');
}

function buttonByCode(keyCode) {
  return document.querySelector(`div.key[data-key="${keyCode}"]`)
}

function soundByCode(keyCode) {
  return document.querySelector(`audio[data-key="${keyCode}"]`)
}

function setup() {
  const buttons = document.querySelectorAll('.key[data-key]')
  buttons.forEach(button => {
    const keyValue = button.getAttribute('data-key')
    const track = soundByCode(keyValue)
    // Remove button animation class on mouseup
    button.addEventListener('transitionend', ev => resetButton(button, ev))
    // Play the sound on button press
    button.addEventListener('click', () => playSound(button, track))
  })
}

setup();

window.addEventListener('keydown', ev => {
  const audioTrack = soundByCode(ev.keyCode)
  if(!audioTrack) return
  button = buttonByCode(ev.keyCode)
  playSound(button, audioTrack)
})
