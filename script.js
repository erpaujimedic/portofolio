function toggleContent(id) {
    const fullText = document.getElementById(`full-text-${id}`);
    const excerpt = document.getElementById(`excerpt-${id}`);
    const button = document.querySelector(`#full-text-${id} + .btn`);

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        excerpt.style.display = "none";
        button.textContent = "Tutup Artikel";
    } else {
        fullText.style.display = "none";
        excerpt.style.display = "block";
        button.textContent = "Baca Selengkapnya";
    }
}

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
