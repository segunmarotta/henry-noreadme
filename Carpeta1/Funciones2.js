function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;  
};

function otraFuncion() {
    return(
            "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
            cuidadoConElConsoleLog('camilo')
        );
};

function cuidadoConElReturn (nombre) {
    return nombre; //todo lo que este por debajo del ruturn no se va a ejecutar
    // el RETURN termina con la funcion
    console.log(nombre);
};