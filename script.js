// Get the hamburger icon and the navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class to show/hide the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
