//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

//1.2
avengers[0] = "IRONMAN";
console.log(avengers);

//1.3
console.log(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

//1.5

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();

console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[4]);

//1.6

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

let elementoFuera = rickAndMortyCharacters3.splice(1,1);
console.log(rickAndMortyCharacters3);
console.log ( elementoFuera);