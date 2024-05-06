// Nehmen wir an, du hast eine traditionelle Funktion, die zwei Zahlen addiert.
// Deine Aufgabe ist es, diese Funktion in eine Arrow Function umzuwandeln.
/*
function add(a, b) {
    return a + b;
  }
*/
const add = (a,b) => a+b;
console.log("The Result is: "+ add(10,18));


// Verwende eine Arrow Function in Kombination mit der Array-Methode .filter(),
// um ein Array von Zahlen zu filtern und nur diejenigen Zahlen zurückzugeben, die größer als 10 sind.

let numbers = [5, 11, 8, 20, 7, 15];

const filteredNumbers = numbers.filter(number => number > 10);

console.log("Zahlen größer als 10 sind  "+ filteredNumbers); // Ausgabe: [11, 20, 15]

// Du hast ein Array von StringList:
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Großbuchstaben geschrieben sind.
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Kleinbuchstaben geschrieben sind.

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

const animalsg = animals.map(a=> a.toUpperCase());
const animalsk = animals.map(a=> a.toLowerCase());

console.log("Alle Tiere in Großbuchstaben "+ animalsg);
console.log("Alle Tiere in Kleinbuchstaben "+ animalsk);

// Du hast ein Array von Objekten, bei dem jedes Objekt eine Person mit einem Namen und Alter darstellt.
// Verwende eine Arrow Function mit der .map() Methode, um ein neues Array zu erstellen, das nur die Namen der Personen enthält.

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
const peoplename = people.map(person=>person.name);
console.log("Personen Namen: "+ peoplename); 