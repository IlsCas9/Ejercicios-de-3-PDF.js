// Mostrar la posición del ratón
document.addEventListener('mousemove', function(event) {
    // las coordenadas del ratón respecto a la página
    var posX = event.pageX;
    var posY = event.pageY;

    // Actualizar el contenido del div con la posición del ratón
    var mousePositionDiv = document.getElementById('mousePosition');
    mousePositionDiv.textContent = 'Página [' + posX + ', ' + posY + ']';
});

// Detectar la tecla presionada
document.addEventListener('keydown', function(event) {
    // Obtener el carácter de la tecla presionada
    var key = event.key;

    // Actualizar el contenido del div con la tecla presionada
    var keyPressedDiv = document.getElementById('keyPressed');
    keyPressedDiv.textContent = 'Carácter [' + key + ']';
});