let imagen = document.getElementById('perro')
let imagenOriginal = imagen.src;
let imagenNueva = 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'

function cambiarImagen() {
    imagen.src = imagenNueva;

}
imagen.addEventListener("mouseover", cambiarImagen);

function restaurarImagen() {
    imagen.src = imagenOriginal;

}
imagen.addEventListener("mouseout", restaurarImagen);

