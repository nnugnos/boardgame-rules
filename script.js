function playMusic(name) {
  const bgm = document.getElementById("bgm");
  bgm.src = `${name}.mp3`;  // music/ 빼고 경로 설정
  bgm.play();
}

function toggleMusic() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}

function saveRules() {
  const rules = document.getElementById("rulesBox").value;
  alert("규칙이 저장되었습니다!\n\n" + rules);
}
