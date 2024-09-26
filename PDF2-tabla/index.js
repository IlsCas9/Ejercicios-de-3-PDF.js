var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
];

// el cuerpo de la tabla
var tableBody = document.querySelector("#personTable tbody");

// Generar las filas de la tabla con los datos del arreglo
personArr.forEach(function(person) {
    // Crear una fila
    var row = document.createElement("tr");

    // Crear y agregar celdas a la fila
    var cellId = document.createElement("td");
    cellId.textContent = person.personId;
    row.appendChild(cellId);

    var cellName = document.createElement("td");
    cellName.textContent = person.name;
    row.appendChild(cellName);

    var cellCity = document.createElement("td");
    cellCity.textContent = person.city;
    row.appendChild(cellCity);

    var cellPhone = document.createElement("td");
    cellPhone.textContent = person.phoneNo;
    row.appendChild(cellPhone);

    // Agregar la fila al cuerpo de la tabla
    tableBody.appendChild(row);
});