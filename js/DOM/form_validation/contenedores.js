// Seleccionamos los divs y les damos un evento a todos
const divs = document.querySelectorAll('.contenedor div');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        let cuadro = this;
        cuadro.style.backgroundColor = 'dodgerblue';

        setTimeout(function() {
            cuadro.style.backgroundColor = 'white';
        }, 1500);
    })
    
}