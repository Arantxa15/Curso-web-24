let fondo = document.getElementById('fondo');
let divs = document.querySelectorAll('.miColor');

function cambiarColor() {
    fondo.style.backgroundColor = this.style.backgroundColor;
}

divs[0].addEventListener("mouseover", cambiarColor);
divs[1].addEventListener("mouseover", cambiarColor);
divs[2].addEventListener("mouseover", cambiarColor);
divs[3].addEventListener("mouseover", cambiarColor);
divs[4].addEventListener("mouseover", cambiarColor);
