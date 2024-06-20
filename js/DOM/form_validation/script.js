// Extraer el contenido de un input y  guardar en una variable
// Tomamos las dos contraseñas :
// Comprobamos que tengan más de 4 caracteres
// Que sean igaules
// En caso de que no cumplan estas condiciones, imprimir mensaje en pantalla donde se indique el error (p id= 'mensaje') 

// Guardar párrafo en una variable
let mensaje = document.getElementById("mensaje");


function comprobar() {
    // Al pulsar el botón guardamos las contraseñas en variables

    let pass1 = document.getElementById("fpass1").value;
    let pass2 = document.getElementById("fpass2").value;
    // Value es el contenido que escribe el usuario dentro del input

    // Comprobar que son igaules
    if (pass1 == pass2) {
        // Imprimir en pantalla un mensaaje que indique que las contraseñas coinciden
        mensaje.innerHTML = 'La contraseña es correcta';

    } else {
        // Imprimir en pantalla un mensaaje que indique que las contraseñas NO coinciden
        mensaje.innerHTML = 'La contraseña no es correcta';
    }

    if (pass1.length > 3 && pass2.length > 3) {
        // Comprobar que son iguales
        if (pass1 == pass2) {
            // mensaje que indique que las caracteres coinciden
            mensaje.innerHTML = 'Coinciden los caracteres';

        } else {
            // mensaje que indique que los caracteres NO coinciden
            mensaje.innerHTML = 'No coinciden los caracteres';
        }
    } else {
        mensaje.innerHTML = 'Las contraseñas deben de tener al menos 4 caracteres'
    }

}
