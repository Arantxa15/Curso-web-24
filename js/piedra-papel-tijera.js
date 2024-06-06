let jugada; //variable del jugador 1
let jugadaCPU; //variable del jugador 2


// opciones ha elegir en el juego
const opciones = [

    'piedra',
    'papel',
    'tijera'
]

// elegir el jugador deseado
function elegir(jugada) {

    // jugador seleccionado
    console.log('Has elegido ' + jugada);

    // jugador contrario
    let jugadaCPU = elegirCPU();

    // comparar las dos jugadas y determinar un ganador
    let resultado = comparar(jugada, jugadaCPU);
    console.log(resultado);
}

function elegirCPU() {

    // elegir número random 0-2, elige una opción entre las 3 posibilidades que hay
    let aleatorio = Math.floor(Math.random() * 3);

    // Opciones [numeros random], el jugador contrario, elige una opción
    let jugadaCPU = opciones[aleatorio];

    // console.log( jugador contrario ha elegido una opción entre 'piedra', 'papel o 'tijera')
    console.log('La CPU ha elegido' + " " + jugadaCPU);


    // retornar el dato para que salga de la funcion
    return jugadaCPU;


}
// comparación de jugadas, depende del caso 'ha ganado', 'ha perdido' o 'hay empate'
function comparar(jugada, jugadaCPU) {

    switch (true) {
        // empate entre ambos jugadores
        case (jugada === jugadaCPU):
            return "Hay un empate";

        // jugadas ganadas
        case (jugada == 'piedra' && jugadaCPU == 'tijera'):
            return "Ha ganado";
        case (jugada == 'papel' && jugadaCPU == 'piedra'):
            return "Ha ganado";
        case (jugada == 'tijera' && jugadaCPU == 'papel'):
            return "Ha ganado";

        // si no se da el caso, son jugadas perdidas
        default:
            return "Has perdido";
    }
}
