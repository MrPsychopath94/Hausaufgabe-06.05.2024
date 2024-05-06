let numbers = [5, 11, 8, 20, 7, 15];

let add = (a, b) => a + b;

document.getElementById("demo").textContent = add(4, 5);

// Verwende die Filter-Methode mit einer Arrow Function
let filteredNumbers = numbers.filter((number) => number > 10);

console.log(filteredNumbers);

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

let animalsUppercase = animals.map((animal) => animal.toUpperCase());
console.log(animalsUppercase); // Ausgabe: ["LION", "TIGER", "ELEPHANT", "GIRAFFE", "ZEBRA"]

const animalsLowercase = animals.map((animal) => animal.toLowerCase());
console.log(animalsLowercase); // Ausgabe: ["lion", "tiger", "elephant", "giraffe", "zebra"]

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = people.map((person) => person.name);
console.log(names); // Ausgabe: ["Alice", "Bob", "Charlie"]
