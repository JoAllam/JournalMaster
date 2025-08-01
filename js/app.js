let root = document.documentElement;
let toggle = document.getElementById("switch");
let oranges = document.getElementsByClassName('even');

toggle.addEventListener("change", () => {
    root.classList.toggle('dark');
    for (let orange of oranges) {
        orange.style.color = 'black';
    }
});
