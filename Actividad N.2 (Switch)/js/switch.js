// Define la función calcularArea
function calcularArea() {
    // Pide al usuario que seleccione una opción (1, 2 o 3)
    var opcion = parseInt(prompt("Selecciona una opción: 1 para el área de un Cuadrado, 2 para el área de un Rectángulo, 3 para el área de un Triángulo"));

    // Utiliza un switch para manejar diferentes casos según la opción seleccionada
    switch (opcion) {
        // Caso 1: Calcular el área de un cuadrado
        case 1:
            // Pide al usuario que ingrese la longitud de un lado del cuadrado
            var ladoCuadrado = parseInt(prompt("Ingresa la longitud de un lado del cuadrado:"));
            // Verifica que el lado del cuadrado no sea 0
            if (ladoCuadrado !== 0) {
                // Calcula el área del cuadrado
                var areaCuadrado = ladoCuadrado * ladoCuadrado;
                // Muestra el resultado en el documento
                document.write("El área del cuadrado es: " + areaCuadrado);
            } else {
                // Si el lado es 0, muestra un mensaje de error
                document.write("Por favor, verifica los datos ingresados.");
            }
            break;
        
        // Caso 2: Calcular el área de un rectángulo
        case 2:
            // Pide al usuario que ingrese la base del rectángulo
            var baseRectangulo = parseInt(prompt("Ingresa la base del rectángulo:"));
            // Pide al usuario que ingrese la altura del rectángulo
            var alturaRectangulo = parseInt(prompt("Ingresa la altura del rectángulo:"));
            // Verifica que tanto la base como la altura no sean 0
            if (baseRectangulo !== 0 && alturaRectangulo !== 0) {
                // Calcula el área del rectángulo
                var areaRectangulo = baseRectangulo * alturaRectangulo;
                // Muestra el resultado en el documento
                document.write("El área del rectángulo es: " + areaRectangulo);
            } else {
                // Si alguno de los valores es 0, muestra un mensaje de error
                document.write("Por favor, verifica los datos ingresados.");
            }
            break;
        
        // Caso 3: Calcular el área de un triángulo
        case 3:
            // Pide al usuario que ingrese la base del triángulo
            var baseTriangulo = parseInt(prompt("Ingresa la base del triángulo:"));
            // Pide al usuario que ingrese la altura del triángulo
            var alturaTriangulo = parseInt(prompt("Ingresa la altura del triángulo:"));
            // Verifica que tanto la base como la altura no sean 0
            if (baseTriangulo !== 0 && alturaTriangulo !== 0) {
                // Calcula el área del triángulo
                var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
                // Muestra el resultado en el documento
                document.write("El área del triángulo es: " + areaTriangulo);
            } else {
                // Si alguno de los valores es 0, muestra un mensaje de error
                document.write("Por favor, verifica los datos ingresados.");
            }
            break;
        
        // Caso por defecto: Opción no válida
        default:
            document.write("Opción no válida.");
    }
}

// Llama a la función calcularArea para ejecutarla
calcularArea();
