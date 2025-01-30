// Usando o operador de exponenciação
let base = 2;
let expoente = 3;
let resultado = base ** expoente;
console.log(resultado); // 8

// Usando a função Math.pow()
let resultado2 = Math.pow(base, expoente);
console.log(resultado2); // 8

//Operadores aritimeticos ( +, -, *, /, %, **)
const num1 = 10;
const num2 = 3;
console.log(num1 + num2); // o sinal de + é usado para adição, mas se tiver uma string ele será uma concatenação. ex abaixo
let num3 = '5';
let num4 = '5.2';
console.log(num1 + num3); // O resultado será 105, porque esta pegando o numero 10 e concatenando com a string 5
console.log(num1 ** num2); // o sinal de ** é usado para exponenciação
console.log(num1 % num2); // o sinal de % é usado para pegar o resto da divisão
console.log(num1 / num3); // O resultado será 2, porque o javascript converte a string 5 para numero e faz a divisão

let contador = 0;
if (contador < 5)[ //se o contador for menor que 5, ele vai incrementar o contador +1
    contador ++
]
console.log(contador);

while (contador < 10){ //enquanto o contador for menor que 10, ele vai repetir o bloco de código
    contador++;
}
console.log(contador) //Se deixar dentro do while e apertar F8, ele ira exibir cada numero até chegar no 10

num3 = parseInt(num3);
num4 = Number(num4); //pode usar o parseFloat também, porém o Number é o mais recomendado!!!
console.log(typeof num3);
console.log(num3);
console.log(typeof num4);
console.log(num4);