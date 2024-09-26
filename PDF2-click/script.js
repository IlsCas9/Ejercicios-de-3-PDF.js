// Selecciona todos los elementos 'li' dentro de la lista
var listItems = document.querySelectorAll("ul li");

// Recorre cada uno de los elementos 'li'
listItems.forEach(function(item) {
    // Agrega un evento de click a cada 'li'
    item.addEventListener("click", function() {
        // Obtiene el id, data-id y data-dial-code del elemento clicado
        var id = item.id;
        var isoId = item.getAttribute("data-id");
        var dialCode = item.getAttribute("data-dial-code");

        // Muestra el alert con la información del elemento clicado
        alert("Elemento Seleccionado:\n" +
              "ID elemento: " + id + "\n" +
              "ISO ID: " + isoId + "\n" +
              "Dial Code: " + dialCode);
    });
});