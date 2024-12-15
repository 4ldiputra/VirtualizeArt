// Fungsi untuk mengecek status login
function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

// Fungsi untuk login
document.querySelector(".login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        
        // Simpan status login ke localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username); // Opsional: Simpan nama pengguna

        // Arahkan ke halaman Home
        window.location.href = "home.html";
    } else {
        alert("Please fill out both fields.");
    }
});

// Fungsi untuk menangani navigasi ke halaman Exhibitions
document.querySelector(".view-exhibitions")?.addEventListener("click", function () {
    if (isUserLoggedIn()) {
        // Jika sudah login, arahkan ke halaman exhibitions
        window.location.href = "exhibitions.html";
    } else {
        // Jika belum login, tampilkan alert dan arahkan ke halaman login
        alert("Please log in to view exhibitions.");
        window.location.href = "login.html";
    }
});

// Fungsi untuk logout
document.getElementById("logoutButton")?.addEventListener("click", function () {
    // Hapus status login dari localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    alert("You have successfully logged out.");
    window.location.href = "login.html"; // Arahkan ke halaman login
});

// Proteksi halaman Exhibitions
if (window.location.pathname.includes("exhibitions.html")) {
    if (!isUserLoggedIn()) {
        alert("You must log in to access this page.");
        window.location.href = "login.html"; // Arahkan ke halaman login
    }
}

// Handle Reset Password
document.getElementById("resetPasswordForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (email) {
        alert(`Password reset instructions sent to ${email}`);
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } else {
        alert("Please enter a valid email address.");
    }
});

// Handle Reset Password Button
document.getElementById("forgotPassword")?.addEventListener("click", function () {
    window.location.href = "resetpassword.html";
});

// Slider Functionality
let currentSlide = 0;
function moveSlides(direction) {
    const slides = document.querySelectorAll(".image-slide");
    const totalSlides = slides.length;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll(".image-slide");
    const newTransformValue = -currentSlide * 100;
    document.querySelector(".image-slider").style.transform = `translateX(${newTransformValue}%)`;
}
document.addEventListener("DOMContentLoaded", updateSlider);


// Simulasi status login
// Ganti logika ini sesuai dengan sistem autentikasi Anda (misalnya dari localStorage atau token)
function isUserLoggedIn() {
    // Contoh: ambil status login dari localStorage
    return localStorage.getItem("isLoggedIn") === "true";
}

// Event listener untuk tombol "View All Exhibitions"
document.getElementById("viewExhibitions").addEventListener("click", function () {
    if (isUserLoggedIn()) {
        // Jika pengguna sudah login, arahkan ke halaman exhibitions
        window.location.href = "exhibitions.html";
    } else {
        // Jika pengguna belum login, arahkan ke halaman login
        alert("You must log in to view exhibitions.");
        window.location.href = "login.html";
    }
});




