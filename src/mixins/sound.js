window.AudioContext = window.AudioContext || window.webkitAudioContext;

// TODO: use filename, not file
export async function loadSound(file, volume=1) {
  window.soundContext = new AudioContext();

  const reader = new FileReader();
  reader.onload = function(evt) {
    const decoded = window.soundContext.decodeAudioData(evt.target.result);
    console.log(decoded)
  };
  reader.readAsText(new File(file));
}

export function playSound(sound, repeat=false) {
  return
}

export function stopSound(sound) {
  return
}

export function loadMusic(file, volume=1) {
  window._graphics.audioElement = document.createElement('audio')
  window._graphics.audioElement.setAttribute('src', file)

  window._graphics.musicContext = new AudioContext();
  
  // vol
  const gainNode = window._graphics.musicContext.createGain();
  gainNode.gain.value = volume

  const track = window._graphics.musicContext.createMediaElementSource(window._graphics.audioElement);
  track.connect(gainNode).connect(window._graphics.musicContext.destination);
}

export function playMusic(repeat=false) {
  window._graphics.musicContext.resume()
  window._graphics.audioElement.loop = repeat
  window._graphics.audioElement.play()
}

export function stopMusic() {
  window._graphics.audioElement.load()
}