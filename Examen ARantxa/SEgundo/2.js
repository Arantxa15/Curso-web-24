let colores = document.getElementById('colores');
let color = document.getElementById('color');

function sleccionarColor() {
    color.style.backgroundColor = this.value;
    color.textContent = this.value;
}
document.getElementById('colores').addEventListener("change", sleccionarColor);
