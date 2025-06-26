
const music = document.getElementById("bg-music");
const volumeBtn = document.getElementById("volume");

volumeBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    volumeBtn.textContent = "🔊";
  } else {
    music.pause();
    volumeBtn.textContent = "🔇";
  }
});