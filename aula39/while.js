//                                              WHILE e DO WHILE

/* Geralmente quando usamos qualquer FOR, geralmente é porque sabemos o tamanho o array por exemplo. Já no WHILE não sabemos e ele vai repetir até quantas vezes foprem necessarios. Ele checa se a condição que usamos vai ser VERDADEIRA, se sim ele vai continuar executando até a condição ser FALSA. a tradução de while é 'enquanto', ou seja, enquanto a condição for verdadeira faça...
Já o DO WHILE ele vai fazer primeiro e depois checar a condição (o while faz ao contrario, ele checa primeiro depois faz)
*/

// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++; //não esquecer nunca de colocar, pois vai fazer um laço infinito. é quando a variavel nunca via chegar no valor 10
// }

//por enquanto isso o for já faz. agora abaixo um exemplo mais real

function random(min, max){ //gerar numeros aleatórios
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max);


//agora quero saber que sempre que gerar um numero aleatório, quero saber quando o número for 10
while (rand != 10){ //tradução: Enquanto o 'rand' for diferente de 10 ele executa o laço
    rand = random(min, max)
    console.log(rand)
} //ele vai executar varias vezes até o numero aleatório for 10

console.log('###########')

do{
    rand = random(min, max)
    console.log(rand)
} while(rand != 10);
//aqui primeiro ele executa o código e depois checa