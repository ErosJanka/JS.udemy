//Validando CPF (algoritimo)


//705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  6  5  4  3  2  
70 0 40 28  48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito) -> importante, se o digito for maior que 9 ele é 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x 
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0 10

11 - (284 % 11) = 2 (segundo digito)
se o digito for maior que 9 ele é 0

A conta TOTAL 70 0 40 28  48 20 16 15 0 = 237 ela é feita com reduce
depois de fazer a conta deveremos concatenar os 9 primeiros digitos com os 2 ultimos.
depois disso deveremos comparar o CPF original que nos foi mandado para ver se é igual

705.484.450-52 === 705.484.451-52 = false 

utilizado reduce do array, expressão popular do replace

preciso receber o CPF como string
por que? Pois o CPF pode começar com 0 e dar problema na hora da conta.
Mas na hora de fazer conta não esqueça de converter a string para Number
*/

let cpf = '705.484.450-52'
//usando express~]ao popular para remover os pontos
let cpfLimpo = cpf.replace(/\D+/g, ''); //isso é uma representação numerica que representa qulaquer coisa que não é um numero. Ou seja, tudo que não for um numero ele é subistituido por nada 

console.log(cpfLimpo) //constinua sendo uma string

//eu não consigo fazer o 'cpfLimpo.map' então é melhor ser feito com REDUCE. então deveremos converter para um ARRAY
cpfArray = Array.from(cpfLimpo)
console.log(cpfArray.map(el => el))

