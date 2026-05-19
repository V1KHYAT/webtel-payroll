const switchPills = document.querySelectorAll('.switch-pill');
const viewTabs = document.querySelectorAll('.view-tab');
const screens = document.querySelectorAll('.screen');

function setActiveGroup(buttons, activeButton) {
    buttons.forEach(button => button.classList.toggle('is-active', button === activeButton));
}

function showScreen(name) {
    screens.forEach(screen => {
        screen.classList.toggle('is-active', screen.dataset.screen === name);
    });
}

switchPills.forEach(button => {
    button.addEventListener('click', () => setActiveGroup(switchPills, button));
});

viewTabs.forEach(button => {
    button.addEventListener('click', () => {
        setActiveGroup(viewTabs, button);
        showScreen(button.dataset.view);
    });
});

showScreen('home');
if (window.lucide) {
    lucide.createIcons();
}