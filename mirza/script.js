document.addEventListener("DOMContentLoaded", function () {
  const trickyButtons = document.querySelectorAll(".tricky-btn");

  trickyButtons.forEach((button) => {
    button.addEventListener("mouseenter", moveButton); // Gerakkan tombol saat di-hover
    button.addEventListener("click", moveButton); // Gerakkan tombol saat diklik
  });

  function moveButton() {
    const button = this;

    // Ambil ukuran layar dan ukuran tombol
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Batasi area tengah layar (contoh: 20% hingga 80% dari layar)
    const minX = screenWidth * 0.2;
    const maxX = screenWidth * 0.8 - buttonWidth;
    const minY = screenHeight * 0.2;
    const maxY = screenHeight * 0.8 - buttonHeight;

    // Hitung posisi acak di area tengah
    const newX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const newY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // Atur posisi tombol
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }
});
let audio = document.getElementById("background-audio");

// Fungsi untuk memulai musik
function playAudio() {
  audio.play(); // Memainkan audio
  document.getElementById("play-btn").disabled = true; // Nonaktifkan tombol play setelah musik dimulai
  document.getElementById("stop-btn").disabled = false; // Aktifkan tombol stop
}

// Fungsi untuk menghentikan musik
function stopAudio() {
  audio.pause(); // Menjeda audio
  audio.currentTime = 0; // Mengatur waktu ke awal
  document.getElementById("stop-btn").disabled = true; // Nonaktifkan tombol stop
  document.getElementById("play-btn").disabled = false; // Aktifkan tombol play kembali
}
