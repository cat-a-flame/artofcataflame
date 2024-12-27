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
});