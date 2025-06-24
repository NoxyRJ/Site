
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

// Simples contador de visitas local (não funciona entre dispositivos)
let count = localStorage.getItem("visitas") || 0;
count++;
localStorage.setItem("visitas", count);
document.getElementById("count").textContent = count;
