function moverCaja() {
    let div = document.querySelector('.caja');
    div.classList.toggle("mover");
}
document.getElementById('btn').addEventListener("click", moverCaja);