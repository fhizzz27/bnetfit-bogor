document.getElementById('formPelanggan').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const alamat = document.getElementById('alamat').value;
  const telepon = document.getElementById('telepon').value;
  const email = document.getElementById('email').value;
  const paket = document.getElementById('paket').value;

  const pesan = `Halo Admin, saya ingin mendaftar layanan internet dengan data berikut:\n\nNama: ${nama}\nAlamat: ${alamat}\nNo Telepon: ${telepon}\nEmail: ${email}\nPaket: ${paket}`;

  const nomorAdmin = "6285870342999"; // Ganti nomor admin di sini (format internasional tanpa +)

  const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});
