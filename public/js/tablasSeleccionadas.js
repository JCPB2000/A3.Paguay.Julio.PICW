// Función para mostrar tablas de números pares o impares
function mostrarTablas() {
    // Obtener la opción seleccionada del menú desplegable
    const tipo = document.getElementById("tipoTabla").value;

    // Variable donde se guardará el resultado
    let resultado = "";

    // Validar que el usuario haya seleccionado una opción correcta
    if (tipo !== "pares" && tipo !== "impares") {
        resultado = "Selecciona una opción válida.";
    } else {
        // Recorrer los números del 1 al 10
        for (let i = 1; i <= 10; i++) {
            const esPar = i % 2 === 0; // Determinar si el número es par

            // Condición para mostrar solo pares o impares
            if ((tipo === "pares" && esPar) || (tipo === "impares" && !esPar)) {
                resultado += `Tabla del ${i}:\n`;

                // Generar la tabla de multiplicar del número actual
                for (let j = 1; j <= 10; j++) {
                    resultado += `${i} x ${j} = ${i * j}\n`;
                }

                resultado += "\n"; // Separación entre tablas
            }
        }
    }

    // Mostrar el resultado final en el HTML
    document.getElementById("resultadoTablas").textContent = resultado;
}
