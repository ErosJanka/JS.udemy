//é uma função que ela mesma se chama de volta, pareciso com estruturas de repetição

function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max)
}

recursiva(0)