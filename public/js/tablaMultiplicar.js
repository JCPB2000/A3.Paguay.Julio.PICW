// Función que genera y muestra la tabla de multiplicar
function mostrarTabla() {
    // Obtener el número ingresado por el usuario
    const numero = Number(document.getElementById("numeroTabla").value);
    
    let resultado = "";

    // Generar la tabla del 1 al 12
    for (let i = 1; i <= 12; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Mostrar el resultado en el área correspondiente
    document.getElementById("resultadoTabla").textContent = resultado;
}