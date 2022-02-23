const navegacion = document.querySelector(".header-nav");

document.addEventListener("scroll", () => {
    const valor_scroll = window.scrollY;
    if (valor_scroll > 50) {
        navegacion.style.backgroundColor = "#fff";
    } else {
        navegacion.style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    }
});

const menu = document.querySelector(".menu");
const header_center = document.querySelector(".display");
const close_boton = document.querySelector(".close");
const imagen = document.querySelector(".imagen");
const oscuridad = document.querySelector(".oscuridad");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    header_center.classList.toggle("active");
});

close_boton.addEventListener("click", () => {
    header_center.classList.remove("active");
});

const item = document.querySelectorAll(".header-nav-center a");

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
        menu.classList.remove("active");
        header_center.classList.remove("active");
    });
}
