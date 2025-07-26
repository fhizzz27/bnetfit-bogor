// === SLIDER ===
let slideIndex = 0;
const slides = document.querySelector("#slides");
const totalSlides = slides.children.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Ganti slide otomatis tiap 5 detik
setInterval(nextSlide, 5000);

// === KONTAK WHATSAPP ===
function contactWhatsapp(paket) {
  const nomor = "6285870342999";
  const pesan = encodeURIComponent(`Halo kak, saya tertarik dengan ${paket}. Mohon info lebih lanjut ya!`);
  const url = `https://wa.me/${nomor}?text=${pesan}`;
  window.open(url, "_blank");
}

// === TOGGLE MODE TERANG/GELAP ===
const toggleBtn = document.getElementById('theme-toggle');

// Saat halaman dimuat, cek localStorage
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = '🌞';
} else {
  toggleBtn.textContent = '🌙';
}

// Saat tombol diklik
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌞';
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem("theme", "dark");
  }
});


  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("active");
    });
  });

  const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');

chatToggle.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});



