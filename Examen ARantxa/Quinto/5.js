let formulario = document.getElementById('formulario');

function validarEnvio(event) {
    event.preventDefault();
    let nombrE =document.getElementById('nombre').value;
    let edaD =document.getElementById('edad').value;
    let intereS =document.getElementById('interes').value;


    let validarNombre = nombrE !== "";
    let validarEdad = Number.isInteger(parseInt(edaD)) && parseInt(edaD) < 18;
    let validarInteres = intereS !== "";

    if (validarNombre && validarEdad && validarInteres) {
        formulario.submit();
    }
    mostrarError('error-nombre',validarNombre);
    mostrarError('error-edad',validarNombre);
    mostrarError('error-interes',validarNombre);    
     
}
  
 