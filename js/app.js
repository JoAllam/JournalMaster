let root = document.documentElement;
let toggle = document.getElementById("switch");

toggle.addEventListener("change", () => {
    root.classList.toggle('dark');
});
