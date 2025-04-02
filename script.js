// Efek scroll untuk mengubah warna navbar saat menggulir
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
});

// Lightbox untuk portofolio
const projectCards = document.querySelectorAll('.project-card img');

projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.src;
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${imgSrc}" alt="Project Image"><span class="close">X</span>`;
        document.body.appendChild(lightbox);

        // Menutup lightbox saat diklik
        const closeBtn = lightbox.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});

// Menambahkan animasi scroll untuk timeline
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < windowHeight - 150) {
            item.querySelector('.timeline-content').classList.add('active');
        }
    });
});

