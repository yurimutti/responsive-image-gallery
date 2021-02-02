const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeACtiveClasses();
        panel.classList.add('active');
    });
});

function removeACtiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}