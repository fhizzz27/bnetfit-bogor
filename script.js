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

setInterval(nextSlide, 5000); // Slide otomatis tiap 5 detik

function contactWhatsapp(paket) {
  const nomor = "6285870342999";
  const pesan = encodeURIComponent(`Halo kak, saya tertarik dengan ${paket}. Mohon info lebih lanjut ya!`);
  const url = `https://wa.me/${nomor}?text=${pesan}`;
  window.open(url, "_blank");
}
