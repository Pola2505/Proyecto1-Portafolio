const cerrar = document.querySelector('#cerrar');
const menu = document.querySelector('#menu');
const abrir = document.querySelector('#abrir');

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    menu.classList.remove("visible");
})



