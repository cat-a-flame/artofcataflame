document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const siteHeader = document.getElementById('siteHeader');
    const menuIcon = document.getElementById('menuIcon');

    menuToggle.addEventListener('click', function() {
        siteHeader.classList.toggle('open');
        if (siteHeader.classList.contains('open')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    document.querySelectorAll('.portfolio-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            lightboxImg.src = this.href;
            lightbox.classList.add('visible');
        });
    });
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('visible');
        lightboxImg.src = '';
    });
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightboxClose.click();
        }
    });
});
