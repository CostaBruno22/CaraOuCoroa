var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById("backgroundAudio");
var audioSource = audioContext.createMediaElementSource(audioElement);
audioSource.connect(audioContext.destination);

document.body.addEventListener("click", function () {
  audioContext.resume().then(function () {
    console.log("Áudio iniciado após interação do usuário.");
  });
  document.body.removeEventListener("click", this);
});

let heads = 0;
let tails = 0;
let coin = document.getElementById("coin"); // Alteração aqui
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  if (!flipBtn.disabled) {
    coin.style.animation = "none";
    let i = Math.floor(Math.random() * 2);
    if (i) {
      coin.style.animation = "spin-heads 3s forwards";
      heads++;
    } else {
      coin.style.animation = "spin-tails 3s forwards";
      tails++;
    }
    disableButton();
  }
});

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
    updateStats();
  }, 3000);
}

function updateStats() {
  document.querySelector(".heads-counts").textContent = `Caras: ${heads}`;
  document.querySelector(".tails-counts").textContent = `Coroas: ${tails}`;
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
