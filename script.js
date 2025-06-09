
const musicFiles = {
  sangsahwa: "music/sangsahwa.mp3",
  shaman: "music/shaman.mp3",
  forest: "music/forest.mp3",
  changgwi: "music/changgwi.mp3"
};

const bgm = document.getElementById("bgm");

function playMusic(name) {
  if (musicFiles[name]) {
    bgm.src = musicFiles[name];
    bgm.play();
  }
}

function toggleMusic() {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}

function saveRules() {
  const rules = document.getElementById("rulesBox").value;
  localStorage.setItem("gameRules", rules);
  alert("규칙이 저장되었습니다!");
}

function loadRules() {
  const saved = localStorage.getItem("gameRules");
  if (saved) {
    document.getElementById("rulesBox").value = saved;
  }
}

window.onload = function () {
  loadRules();
  playMusic("sangsahwa");
};
