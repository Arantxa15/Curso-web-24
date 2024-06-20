// Seleccionamos los elementos con clase diapositivas y nos retorna un array

const diapositivas=document.getElementsByClassName('diapositivas')

// el indice cuenta del 1 al 5

let indice=1;

//vamos al array y mostramos uno de los elementos

diapositivas[indice-1].style.display='block';

function cambiarDiapositiva(valor, direccion) {

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i< diapositivas.length; i++) {
       diapositivas[i].style.display='none';
    }

    console.log('has pulsado la flecha '+ direccion)




    //cambiamos el indice segun la flecha que pulsamos
    indice+=valor;
    
    // corregimos el indice esta funciÃ³n sirve(para que cuando termine la ultima diapositiva, el bucle vuelva a empezar desde la primera.

    if (indice <1) { indice= diapositivas.length};
    if (indice >diapositivas.length) { indice=1};

        
    


    //mostramos la nueva diapositiva
    diapositivas[indice-1].style.display='block';
    
}

function puntoDiapositiva(punto){
    //seleccionamos una diapositiva dependiendo del circulo que pulsemos

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i< diapositivas.length; i++) {
        
        diapositivas[i].style.display='none';
     }
 
     //cambiamos el indice segun la flecha que pulsamos

     indice=punto;
     
      
     
 
 
     //mostramos la nueva diapositiva
     diapositivas[indice-1].style.display='block';
     
 }
 
 // pendiente:corregir fallos y optimizar el codigo(no repetido)