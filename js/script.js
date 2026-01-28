// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// diatas dibaca "panggil const tolong carikan saya elemen yang nama selektornya adalah id hamburger-menu",
// jika, kita klik diluar humberger-menu (yang harus jalan yang diklik) dan diluar navbar

/**
 * SISTEM PENGIRIMAN ADUAN KE GOOGLE SHEETS
 */

// Gantilah dengan URL Web App yang didapat dari Google Apps Script
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwylszd9B1kKOQkkPcuWaXIaZHHf-G1eX1Rr-WFGyggB3nPsKpfuN2AC_sbaOgGGTmxRA/exec";
const form = document.getElementById("complaint-form");
const btnSubmit = document.querySelector(".btn-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Animasi tombol saat proses pengiriman
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = "Sedang Mengirim...";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = "Kirim Aduan Sekarang";

      // Notifikasi Sukses
      alert("Laporan Anda telah berhasil terkirim ke sistem kami.");
      form.reset();
    })
    .catch((error) => {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = "Kirim Aduan Sekarang";

      // Notifikasi Gagal
      alert("Terjadi gangguan koneksi. Silakan coba lagi.");
      console.error("Error!", error.message);
    });
});
