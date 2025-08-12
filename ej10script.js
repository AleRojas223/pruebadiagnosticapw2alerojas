document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos referencia al botón
    const btnSumar = document.getElementById('btnSumar');
    
    // Agregamos el evento click al botón
    btnSumar.addEventListener('click', sumarNumeros);
});

function sumarNumeros() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    
    // Validar que los valores sean números
    if (isNaN(num1)) {
        alert("Por favor ingrese un número válido en el primer campo");
        return;
    }
    
    if (isNaN(num2)) {
        alert("Por favor ingrese un número válido en el segundo campo");
        return;
    }
    
    // Realizar la suma
    const resultado = num1 + num2;
    
    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <strong>Resultado:</strong> ${num1} + ${num2} = ${resultado}
    `;
}