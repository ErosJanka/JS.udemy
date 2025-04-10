//tem um recurso que faz quase que pausar o codigo no meio dele.

function* geradora1(){
    //Imagina um codigo aqui :D
    yield 'Valor1'; //quase igual ao return
    //Imagina um codigo aqui :D
    yield 'Valor2'; 
    //Imagina um codigo aqui :D
    yield 'Valor3';

} 
//na primeira vez que chamar a função ele vai retornar o Valor1, na proxima vez que chamar, vai retornar Valor2

const g1 = geradora1()
console.log(g1.next())
/*
RETORNA: { value: 'Valor1', done: false }

value é onde está o valor
done: false pergunta de terminou o gerador, nesse caso não pois tem mais valores para obter
*/

console.log(g1.next().value) //Valor2
console.log(g1.next().value) //Valor3
console.log(g1.next()) //{ value: undefined, done: true }, ou seja, acabou 

function* geradora2(){
    //Imagina um codigo aqui :D
    yield 'Valor1'; //quase igual ao return
    //Imagina um codigo aqui :D
    yield 'Valor2'; 
    //Imagina um codigo aqui :D
    yield 'Valor3';

} 


console.log("           /////           ")

const g2 = geradora2()
for (let valor of g2){
    console.log(valor)
}
//o for sabe exaatmente quando a execução termina, ele executa e mostra os valores até terminar

function* contador(){
    let i = 0
    while (true){
        yield i;
        i++
    }
}

console.log("           /////           ")

const c = contador()
console.log(c.next().value) //0
console.log(c.next().value) //1
console.log(c.next().value) //2
console.log(c.next().value) //3
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)

console.log("           /////           ")

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3()
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4()
for(let valor of g4){
    console.log(valor)
}

console.log("           /////           ")

function* geradora5() {
    yield function(){
        console.log('Vim do y1')
    }

    //imagine mais codigo

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()