function funcaoA (){
    console.log('Opa')
}

funcaoA('valor'); //Teoricamente não era para exibir o console e sim um erro, pois estou passando um parametro na chamada da funçaõ, mas na declaração não há parametro


//Mas onde está esse parametro? Esta no argumento: ex.
function argumentos(){
    console.log(arguments)
}
argumentos(1, 2, 3, 4) //Aparece assim: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }. o n° 1 esta no objeto 0 e assim por diante 



//podemos utilizar essa função para uma soma por exemplo. 
function soma (){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

soma(1, 2, 3); //vai somar essses números


function funcaoB(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}
funcaoB(1, 2, 3, 4, 5, 6, 7) //consigo colocar mais valores aqui. Mas não posso colocar menos, o restante dará undefined
funcaoB(1, 2, 3) //1 2 3 undefined undefined undefined


function funcaoC(a, b){
    console.log(a + b)
}
funcaoC(2) //esse 2 é o valor apenas o 'a', como o 'b' dá undefined o resultado é NaN. O que eu poderia fazer caso eu queira colocar um valor de 'b' caso eu não passe um parametro para 'b': b=b || 0; (B existe? se não ele retorna 0(metodo antigo))

//Um jeito mais moderno de fazer uma pré definição de um parametro caso não tnha valor:
function funcaoD(a, b=2){
        console.log(a + b)
    }
funcaoD(3)// Retorna 5 pois 'a'= 3

function funcaoE(a, b=2, c=4){
    console.log(a + b + c)
}
funcaoE(3,undefined,20) //caso eu queria que o b mantesse o valor pré-definido, terei que colocar como undefined, então a=3 b=2 c=20

//atribuição via desestruturação
function funcaoF({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
// let obj = {nome: 'Eros', sobrenome:'Jankosky', idade: 25}// também posso fazer assim
funcaoF({nome: 'Eros', sobrenome:'Jankosky', idade: 25});

//desestruturação de Array
function funcaoG([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let obj = ['Eros', 'Nuspl', 25]
funcaoG(obj)


function conta(operador, acumulador, ...numeros){ //... é o resto do operador, ou seja, todo o resto depois do acumulador sera o resto de numeros, ou seja, todo valor após acumulador será 'numeros'
    for(let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
        
    }
    console.log(acumulador)
}
conta('+', 1, 20,30,40,50)


