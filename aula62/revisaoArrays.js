// indice:       0         1          2
const nomes = ['Eros', 'Geovanna', 'Cassia']

nomes[2] = 'joão' //alterei indice 2

console.log(nomes) //[ 'Eros', 'Geovanna', 'joão' ]

delete nomes[2]
console.log(nomes) //[ 'Eros', 'Geovanna', <1 empty item> ]

///////////////////

const nomes2 = new Array('Eros', 'Geovanna', 'Cassia') //construtor (não muito utilizado)
console.log(nomes2) //[ 'Eros', 'Geovanna', 'Cassia' ]

//valor por referencia, se eu quiser copiar os dados para uma nova variavel uso sprat

const novo = [...nomes]
novo.pop() //tudo que eu faço em NOVO não reflete em nomes
console.log(novo)

console.log(nomes.length) //qual é o tamanho do array, ele retorna 3 pois tem 3 elementos

const removido = nomes2.pop() //para mostrar os elementos removidos
console.log(nomes2, removido)
const removePrimeiroIndice = nomes.shift()
console.log(nomes, removePrimeiroIndice)

nomes.push('Adicionei') //colocar mais um item no Array no final do indice
nomes.unshift('Miranda') //adicionei no inicio do Array
console.log(nomes)

//                 0        1           2        3         4
const nomes3 = ['Eros', 'Geovanna', 'Cassia', 'Bruno', 'Antonio']
let fatiar = nomes3.slice(1,3)
console.log(fatiar) //[ 'Geovanna', 'Cassia' ]

fatiar = nomes3.slice(0, -1) //vai pegar todos os nomes menos o ultimo
console.log(fatiar) //[ 'Eros', 'Geovanna', 'Cassia', 'Bruno' ]


/////////////////////////////

const stringParaArray= 'Eros Nuspl oliveira Jankosky'
const nome = stringParaArray.split(' ') //split separa a string para o array através do espaço, mas pode ser outras coisas
//obs> Se eu tirar o espaço ele vai pegar cada letra
console.log(nome) //[ 'Eros', 'Nuspl', 'oliveira', 'Jankosky' ]

////////////////////////////

const arrayParaString = [ 'Eros', 'Nuspl', 'oliveira', 'Jankosky' ]
const paraString = arrayParaString.join(' ') //Se eu colocar ', '. O nome fica Eros, Nuspl, oliveira, Jankosky
console.log(paraString) //Eros Nuspl oliveira Jankosky