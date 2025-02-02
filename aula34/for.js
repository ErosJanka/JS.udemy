//Classico. (1° criar uma variavel de controle; 2° criar uma condição que vai parar o laço; 3e incrementar ou decrementar a variavel de controle)
for (let i = 0; i <= 5; i++){ //de 1+1
    console.log(`Linha ${i}`);
}

for (let i = -100; i <= 100; i += 10){ //de 10+10
    console.log(i)
}

for (let i = 500; i >= 400; i -= 10){ //de 10-10
    console.log(`lista ${i}`)
}

for (let i = 0; i <= 10; i++){
    //const par =  i % 2 === 0; //falando se o numero dividido por ele mesmo da 0 ele é par
    const numero = i % 2 === 0 ? 'par' : 'impar'; //operação ternaria (if simplificado)
    console.log(i, numero)
}

const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){ //frutas.length é para saber o tamanho no array. que no caso aqui é 3
    console.log(`Indice ${i} = ${frutas[i]}`) //vai fazer frutas[0] depois frutas[1], etc. Será mostrado o valor atribuido em cada indice
}

