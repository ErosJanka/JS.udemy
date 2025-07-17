// Filter(filtrar), Map(modificar), Reduce(Reduzir)

//Retorne os numeros maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor){
    return valor > 10
    /*
    O jeito de cima já faz  o mesmo
    if(valor > 10) {
        return true;
    } else{
        return false;
    }
    */
}

const filtro = numeros.filter(callbackFilter) // o Filter Requer que retorne um bolean (Verdadeiro, Falso)
console.log(filtro)


//posso também criar uma função anonima  ==>
const anonimoFiltro = numeros.filter(function (valor){
    return valor > 10
})
console.log(anonimoFiltro)

//Com arrowFunction
const arrowFunction = numeros.filter(valor => {
    return valor > 10
})
console.log(arrowFunction)

//Se a arrow function tiver apenas uma linha pode tirar os cochetes {}
const simplifica = numeros.filter( valor => valor > 10)
console.log(simplifica)









//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
    { nome: 'Eros', idade: 25},
    { nome: 'Geovanna', idade: 24},
    { nome: 'Cassia', idade: 53},
    { nome: 'CintiA', idade: 43},
    { nome: 'Antonio', idade: 64},
    { nome: 'Bruno', idade: 33},
];


const maisCincoLetras = pessoas.filter(obj => obj.nome.length > 5)
console.log(maisCincoLetras) //Exclui Eros e Bruno

const cinquentaAnos = pessoas.filter(idad => idad.idade > 50)
console.log(cinquentaAnos)

const terminaA = pessoas.filter(letra => letra.nome.toLowerCase().endsWith('a'))
console.log(terminaA)
//toLowerCase é para garantir que a letra esteja minuscula, tanto que CintiA retorna só por causa desse metodo. 