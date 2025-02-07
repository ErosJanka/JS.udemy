// Escreva uma funcão que recebe um numero e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio Número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100 (usar um laço ou um looping qualquer)


function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0) return `${num} fizzBuzz`;
    if (num % 3 === 0) return `${num} fizz`;
    if (num % 5 === 0) return `${num} Buzz`;
    if (num % 3 !== 0 || num % 5 !== 0) return num;
}

function checagem(tipo){
    tipo = typeof tipo === 'number' ? 'number' : '[ERRO] string'
    return tipo
}


function final(numero){
    if (checagem(numero) === 'number'){
        while(numero <= 100){
            console.log(fizzBuzz(numero))
            numero++
        }
    } else {
        console.log(checagem(numero));
    }
}

let numero = 1
final(numero)
