// 1. Tiene dos arreglos de String clientes y empleados y se desea combinar para crear un arreglo de contactos ¿Que metodo seria el mas adecuado para estav tarea
// Ejemplo probando los metodos(concat, join, push,splice)
var clientes = ["Ana", "Luis"];
var empleados = ["Sofia", "Carlos"];

// concat este metodo se utiliza para unir dos o mas arreglos en este ejemplo lo quw hizo fue crear un nuevo arreglo sin modificar los originales
var contactos = clientes.concat(empleados);
console.log(contactos); // ["Ana", "Luis", "Sofia", "Carlos"]

// join se utiliza para unir todos los elementos de un arreglo a una cadena
var contactos = clientes.join(",");
console.log(contactos); // "Ana, Luis"

//push este metodo agrega dos o mas elementos al final de un arreglo y devuelve la longitud del arreglo
var contactos = clientes.slice(); // copia clientes para no modificar el original
contactos.push(...empleados);
console.log(contactos); // ["Ana", "Luis", "Sofia", "Carlos"]

// splice 
var contactos = clientes.slice(); // copia clientes
contactos.splice(contactos.length, 0, ...empleados);
console.log(contactos); // ["Ana", "Luis", "Sofia", "Carlos"]
/** Resultado */
// metodo concat por que puede combinar los arreglos sin modificicar y crea el arreglo

// 2. Tenemos este arreglo
var numbers = [5, 32, 43, 4];
// para resolver esto tenemos que agregar una nueva variable para alojar el resultado de la funccion filter 
var numbers = [5, 32, 43, 4];
var evenNumbers = numbers.filter(function(n) { return n % 2 == 0; });
console.log(evenNumbers); // [32, 4]
// Da este resultado por que son los numeros pares del arreglo original, la funcion del filter reviso cada elemnto

// 3. Genera la funcion en javascript que filtre a las personas menos de 35 años 
var people = [
  {id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 31},
  { id: 3, name: " Peter", age: 55}
];
var under35 = people.filter(person => person.age < 35);
console.log(under35); // "John, Jane"
/** Resultado */
// John y Jane es resultado por que este codigo creo un nuevo arreglo  llamado under 35 que solo te pondra a quienes son menores de 35

// 4. Genera la funcion para obtener el numero de veces que aparece cada nombre

let people2 = [
  { name: "bob", id: 1},
  { name: "john", id: 2}, 
  { name: "alex", id: 3},
  { name: "john", id: 3}
]; 

function countNames(peopleArray) {
  let nameCounts = {};
  
  peopleArray.forEach(person => {
    if (nameCounts[person.name]) {
      nameCounts[person.name]++;
    } else {
      nameCounts[person.name] = 1;
    }
});
return nameCounts;
}
console.log(countNames(people));  //  { John 1, Jane: 1, Peter: 1}
// la funcion nameCounts lleva el conteo de cada mombre, se recorre el arreglo con  el forEach y se verifica si el nombre ya esta en nameCounts y tambien esa funcion devuelve el objeto que contiene los nombres y sus conteos

// 5. Genera la function para imprimir en consola el numero maximo y el numero minimo
var myArray = [1, 2, 3, 4];

function imprimirMaxMin(array) {
  var max = Math.max(...array);
  var min = Math.min(...array);
  console.log("Numero maximos:", max); // ["Numero maximos", 4]
  console.log("Numero minimo:", min); // ["Numero minimo", 1]

}

imprimirMaxMin(myArray);
// la funciones Math.max y Math.min nos ayudan a encontrar el numero maximo y el numero minimo

// 6. Generar la funcion para pasar cada elemento 'key' a un arreglo y ordenarlos segun su valor 
var object = {
  key1: 10,
  key2: 3,
  key3: 40,
  key4: 20
};

function ordenarValores(obj) {
  var valores = Object.values(obj);
  valores.sort(function(a, b) {
    return a -b;
  });
return valores;

}

var resultado = ordenarValores(object);
console.log(resultado); // {3, 10, 20, 40}

// el object.values(obj) extrae los valores del objeto y los convierte en un arreglo luego el sort se usa para ordenar los valores en orden ascendente y nos da ese resultado
