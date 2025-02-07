// Escreva uma funcão que recebe um numero e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio Número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100 (usar um laço ou um looping qualquer)

function numeroQualquer(){
    const n = 1
    while (n <= 100){
        const n = 15
        if(typeof n === 'number'){
            console.log(typeof n)
            if( n % 3 === 0 && n % 5 === 0){
                console.log(`${n} = fizzBuzz`)
            } else if (n % 3 === 0){
                console.log(`${n} = fizz`)
            } else if (n % 5 === 0){
                console.log(`${n} = Buzz`)
            }else{
                console.log(`${n}`)
            }
        
        }else{
            console.log(`[ERRO]: o valor é = ${typeof n}`)
        }
        
        n+1
    }
}

numeroQualquer()


