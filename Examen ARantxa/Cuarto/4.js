let imagen = document.getElementById('perro');
let imagenOriginal = imagen.src;
let imagenNueva = "https://img.freepik.com/fotos-premium/perros-encantadores-fondo-blanco-aislado_1000823-8538.jpg";


function cambiarImagen() {
    imagen.src = imagenNueva;
}
imagen.addEventListener("mouseover", cambiarImagen);


function restaurarImagen() {
    imagen.src = imagenOriginal;
}
imagen.addEventListener("mouseout", restaurarImagen);


function fechaActual() {
    let ahora = new Date();

    let opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let fechaH = ahora.toLocaleDateString('es-ES', opciones);
    document.getElementById('hora').textContent = fechaH;
}
setInterval(fechaActual, 1000);