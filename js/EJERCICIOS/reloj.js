function mostrarHora() {
    // declarar variables para guardar la hora
    // guardar fecha actual
    let fecha = new Date()

    // guardar hora, minutos y segundos
    let hora = fecha.getHours(); // 0 -23
    let minutos = fecha.getMinutes(); // 0 -59
    let segundos = fecha.getSeconds(); // 0 -59
    let formato = "AM";
    // construir el string para mostrar la hora
    // corregir los número del string
    if (hora > 12) {
        // cambiar el foramto dependiendo de la hora
        hora = hora - 12;
        // por ejemplo, si la hora es = 13, se cambia a 1PM
        formato = "PM";
    };
    if (hora < 10) {hora = "0" + hora};
    if (minutos < 10) {minutos = "0" + minutos};

    // variable = (condición if) ? valor si es verdadero : valor si es falso
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    let reloj = hora + ":" + minutos + ":" + segundos + formato;
    // imprimir información en pantalla
    // identificar el div donde vamos a meter la info
    let pantalla = document.getElementById('pantalla');
    // meter la info en el div
    pantalla.innerHTML = reloj;
    // actualizar la función y, por tanto la hora, cada segundo
    setTimeout(mostrarHora, 1000);
    // setTimeout realiza una cuenta atrás en ms, en este caso 1000 o 1 segundo
    // Al finalizar la cuenta atrás, ejecuta la función que le hemos indicado

}
// ejecutamos la función
mostrarHora();