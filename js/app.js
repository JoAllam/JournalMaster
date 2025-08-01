let body = document.body;
let toggle = document.getElementById("switch");
toggle.addEventListener("click", () => {
    body.classList.toggle('dark');
    console.log(body.className)
});
