//               0123456789
let umaString = 'Um "texto"'; //Ou "um \"texto\""

console.log(umaString);
console.log(umaString[4]);

let outraString = 'Outro texto, mas com a mesma palavra texto.';
console.log(outraString.indexOf('texto', 10)); //Procura a palavra a partir do índice 10

console.log(umaString.length); //Tamanho da string
console.log(outraString.length);

console.log(umaString.slice(3, 10)); //Pega do índice 3 ao 8. Dica, coloque o ultimo numero +1 para pegar a palavra inteira
console.log(outraString.slice(-6)); //Pega os 5 últimos caracteres
console.log(outraString.slice(-6, -1)); //Pega os 5 últimos caracteres, menos o último
console.log(outraString.split(' ')); //Divide a string em um array, separando por espaço
console.log(outraString.split('t')); //Divide a string em um array, separando por 't'
console.log(outraString.split(' ', 3)); //Divide a string em um array, separando por espaço, e pega os 3 primeiros elementos
console.log(outraString.toUpperCase()); //Coloca a string em maiúsculo
console.log(outraString.toLowerCase()); //Coloca a string em minúsculo