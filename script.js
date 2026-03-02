const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Handle Theme Switch
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Simpan ke local storage
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('diaww-theme', mode);
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

// Update tahun otomatis (biar ga lupa)
document.getElementById('year').textContent = new Date().getFullYear();


// Tambahkan ini di script.js
document.querySelector('.email').parentElement.addEventListener('click', function(e) {
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


// Load saved theme
window.onload = () => {
    const savedMode = localStorage.getItem('diaww-theme');
    if(savedMode === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Efek haptik sederhana pada tombol
document.querySelectorAll('.ios-item').forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.style.opacity = "0.7";
    });
    btn.addEventListener('touchend', () => {
        btn.style.opacity = "1";
    });
});
