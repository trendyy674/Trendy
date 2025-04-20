// script.js

// Example of adding interactivity: Toggle visibility of sections
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('collapsed');
    });
});
