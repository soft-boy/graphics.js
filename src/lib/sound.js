window.AudioContext = window.AudioContext || window.webkitAudioContext;

// TODO: use filename, not file
export async function loadSound(file, volume=1) {
  window.soundContext = new AudioContext();

  let sound = await fetch(file)
  sound = await sound.arrayBuffer()

  const buffer = await window.soundContext.decodeAudioData(sound)
  return {
    buffer,
    sources: []
  }
}

export function playSound(sound, repeat=false) {
  const source = window.soundContext.createBufferSource();
  source.buffer = sound.buffer;
  source.loop = repeat;
  source.connect(window.soundContext.destination);
  source.start(0);

  sound.sources.push(source)
}

export function stopSound(sound) {
  sound.sources.forEach((src) => src.stop(0))
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