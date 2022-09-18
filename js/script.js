document.getElementById("menu-bars").addEventListener("click", funciona);
var menu = document.getElementById("menu-desplegable");

function funciona() {
    menu.classList.toggle("menu-bars_active");
}