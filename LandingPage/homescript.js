// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((menuItem) => {
        const img = menuItem.querySelector('.menu-img');
        const gifSrc = img.getAttribute('data-gif');
        const staticSrc = img.getAttribute('src');

        menuItem.addEventListener('mouseenter', () => {
            img.src = gifSrc; // Start playing the GIF
        });

        menuItem.addEventListener('mouseleave', () => {
            img.src = staticSrc; // Revert to the static image
        });
    });
});

