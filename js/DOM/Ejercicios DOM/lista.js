 // Lo primero es identificar a la lista.
 let lista = document.getElementById('lista');

 // definir los elementos que vamos a agregar.
 const frutas = [
     'piña',
     'mango',
     'kiwi',
     'sandía',
     'melocotón'
 ];
//  Creamos un contador para ir tomando distintos elementos del array.
 let contador = 0;
 

function agregarLista() {
    // Tomamos el texto del array
    let texto = frutas[contador];

    // construimos el elemento li
    let elemento = document.createElement('li');

    // Le añadimos el contenido
    elemento.innerHTML = texto;

    // Lo agrgamos ala lista
    lista.appendChild(elemento);

    // Aumentamos el contador para que tome otro elemento array
    contador++;

    // Reiniciar el contador si se acaba el array
    if (contador >= frutas.length) {
        contador = 0;
    }
}