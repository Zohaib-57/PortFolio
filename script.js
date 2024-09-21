const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const text1 = "Muhammad Zohaib Abbas";
const text2 = "Web Developer";
const line1 = document.querySelector('#name');
const line2 = document.querySelector('#work');
let index1 = 0;
let index2 = 0;

// Typing function for the first line
function typeLine1() {
    if (index1 < text1.length) {
        line1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(typeLine1, 100); 
    } else {
        line1.style.borderRight = 'none';
        setTimeout(typeLine2, 500);
    }
}

// Typing function for the second line
function typeLine2() {
    if (index2 < text2.length) {
        line2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeLine2, 100);
    } else {
        line2.style.borderRight = 'none';
    }
}

document.addEventListener("DOMContentLoaded", typeLine1,typeLine2);
