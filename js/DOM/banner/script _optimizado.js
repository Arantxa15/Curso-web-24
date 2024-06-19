// Seleccionamos los elementos con clase diapositivas y nos retorna un array

const diapositivas=document.getElementsByClassName('diapositivas')

// el indice cuenta del 1 al 5

let indice=1;

//vamos al array y mostramos uno de los elementos

diapositivas[indice-1].style.display='block';

function cambiarDiapositiva(x) {

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i< diapositivas.length; i++) {
       diapositivas[i].style.display='none';
    }

    //cambiamos el indice segun la flecha que pulsamos
    indice+=x;
    
    // corregimos el indice

    if (indice <1) { indice= diapositivas.length};
    if (indice >diapositivas.length) { indice=1};

        
    


    //mostramos la nueva diapositiva
    diapositivas[indice-1].style.display='block';
    
}

function establecerDiapositiva(x){
    //seleccionamos una diapositiva dependiendo del circulo que pulsemos

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i< diapositivas.length; i++) {
        diapositivas[i].style.display='none';
     }
 
     //cambiamos el indice segun la flecha que pulsamos
     indice=x;
     
      
     
 
 
     //mostramos la nueva diapositiva
     diapositivas[indice-1].style.display='block';
     
 }
 
 // pendiente:corregir fallos y optimizar el codigo(no repetido)
