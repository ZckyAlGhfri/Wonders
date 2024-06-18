// Toggle Class Hamburger
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

  // Toggle Search Box
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
};

// Remove
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
document.addEventListener('click', function(e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.member');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const slideContainer = document.getElementById('slide-container');
    slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inisialisasi slide pertama
showSlide(currentIndex);
