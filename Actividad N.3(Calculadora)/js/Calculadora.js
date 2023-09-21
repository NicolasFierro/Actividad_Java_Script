function calcularOperacion() {
    // Solicita al usuario que seleccione una operación
    var opcion = parseInt(prompt("Selecciona una operación:\n1 para Suma\n2 para Resta\n3 para Multiplicación\n4 para División\n5 para Mayor\n6 para Menor"));

    // Utiliza un switch para manejar las diferentes operaciones según la opción ingresada
    switch (opcion) {
        case 1: // Suma
            // Solicita al usuario ingresar dos números
            var num1 = parseFloat(prompt("Ingresar el primer número:"));
            var num2 = parseFloat(prompt("Ingresar el segundo número:"));
            // Realiza la suma de ambos numeros
            var resultado = num1 + num2;
            // Muestra el resultado de la suma en una alerta
            alert("El resultado de la suma es: " + resultado);
            break;

        case 2: // Resta
            // Solicita al usuario ingresar dos números
            var num1 = parseFloat(prompt("Ingresar el primer numero: "));
            var num2 = parseFloat(prompt("Ingresar el segundo numero: "));
            // Realiza la resta de ambos numeros
            var resultado = num1 - num2;
            // Muestra el resultado de la resta en una alerta
            alert("El resultado de la resta es: " + resultado);
            break;

        case 3: // Multiplicación
            // Solicita al usuario ingresar dos números
            var num1 = parseFloat(prompt("Ingresar el primer numero: "));
            var num2 = parseFloat(prompt("Ingresar el segundo numero: "));
            // Realiza la multiplicación de ambos numeros
            var resultado = num1 * num2;
            // Muestra el resultado de la multiplicación en una alerta
            alert("El resultado de la multiplicación es: " + resultado);
            break;

        case 4: // División
            // Solicita al usuario ingresar dos números
            var num1 = parseFloat(prompt("Ingresar el primer numero: "));
            var num2 = parseFloat(prompt("Ingresar el segundo número: "));
            // Realiza la división de ambos numeros
            var resultado = num1 / num2;
            // Muestra el resultado de la división en una alerta
            alert("El resultado de la división es: " + resultado);
            break;

        case 5: // Mayor o menor
            // Solicita al usuario ingresar dos números
            var num1 = parseFloat(prompt("Ingresar el primer numero: "));
            var num2 = parseFloat(prompt("Ingresar el segundo numero: "));
            // Compara los números y muestra un mensaje en función de cuál es mayor o si son iguales
            if (num1 > num2) {
                alert(num1 + " es mayor que " + num2);
            } else if (num2 > num1) {
                alert(num2 + " es mayor que " + num1);
            } else {
                alert("Los números son iguales.");
            }
            break;

        default:
            // En caso de que la opción ingresada no sea válida, muestra un mensaje de error
            alert("Opción no válida.");
    }
}

// Llama a la función para ejecutar el código
calcularOperacion();
