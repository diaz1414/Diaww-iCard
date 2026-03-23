const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Handle Theme Switch
themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode', !isLight);

    const icon = themeToggle.querySelector('i');
    if (isLight) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('diaww-theme', 'light');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('diaww-theme', 'dark');
    }
});

const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const seeMoreBtn = document.getElementById('seeMoreBtn');
const extraLinks = document.getElementById('extraLinks');

seeMoreBtn.addEventListener('click', () => {
    // Toggle class active buat munculin tombol
    extraLinks.classList.toggle('active');

    // Toggle class open buat muter icon panah
    seeMoreBtn.classList.toggle('open');

    // Ganti teks tombol
    const span = seeMoreBtn.querySelector('span');
    if (extraLinks.classList.contains('active')) {
        span.textContent = 'Show Less';
    } else {
        span.textContent = 'See More';
    }
});

// --- YEAR AUTOMATION ---
document.getElementById('year').textContent = new Date().getFullYear();


// Tambahkan ini di script.js
document.querySelector('.email').parentElement.addEventListener('click', function (e) {
    e.preventDefault();
    window.open('mailto:ferdiazprasida@gmail.com', '_blank');
});


const island = document.getElementById('islandMain');
const islandText = document.getElementById('islandText');

// Daftar kata-kata yang akan muncul berurutan
const messages = [
    '<i class="fa-solid fa-face-smile-wink"></i> <span>Hello!</span>',
    '<i class="fa-solid fa-user-check"></i> <span>Ferdiaz Rifqi</span>',
    '<i class="fa-solid fa-code"></i> <span>Hello World!</span>'
];

let currentIndex = 0;

island.addEventListener('click', (e) => {
    // Stop propagasi agar tidak memicu event di luar (pencet luar)
    e.stopPropagation();

    // Animasi fade out
    islandText.classList.add('island-fade');

    setTimeout(() => {
        // Ganti index pesan
        currentIndex = (currentIndex + 1) % messages.length;
        islandText.innerHTML = messages[currentIndex];

        // Animasi fade in
        islandText.classList.remove('island-fade');
    }, 200);
});

// Fitur: Klik di luar Island akan mengembalikan teks ke "Hello!"
document.addEventListener('click', () => {
    if (currentIndex !== 0) {
        islandText.classList.add('island-fade');
        setTimeout(() => {
            currentIndex = 0;
            islandText.innerHTML = messages[0];
            islandText.classList.remove('island-fade');
        }, 200);
    }
});


// --- STAGGERED ENTRANCE ANIMATION ---
function initStagger() {
    const items = document.querySelectorAll('.ios-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) scale(0.95)';

        setTimeout(() => {
            item.style.transition = 'all 0.8s cubic-bezier(0.2, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
        }, 150 + (index * 60)); // Faster stagger
    });
}

// Run after a slight delay to ensure browser readiness
setTimeout(initStagger, 100);

// --- FOOTER SCROLL TO TOP ---
document.querySelector('.footer-badge').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Load saved theme
window.onload = () => {
    const savedMode = localStorage.getItem('diaww-theme');
    const icon = themeToggle.querySelector('i');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}
