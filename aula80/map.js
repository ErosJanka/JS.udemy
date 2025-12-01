//Objeto Map()

//Array de objetos
const pessoas = [
    { id: 3, nome: 'Geovanna'},
    { id: 2, nome: 'Eros'},
    { id: 1, nome: 'Antonio'},
];

const novasPessoas = {};

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
}
console.log(novasPessoas)
/*
{
  '1': { id: 1, nome: 'Antonio' },
  '2': { id: 2, nome: 'Eros' },
  '3': { id: 3, nome: 'Geovanna' }
}

Aqui temos dois grandes problmeas:
1. os ID converteram para String e precisava ser Number
2. Ordem foi alterada
*/

//Então utilizaremos o Map()
const novasPessoas2 = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas2.set(  id, { ...pessoa })
}
console.log(novasPessoas2)
/*
Map(3) {
  3 => { id: 3, nome: 'Geovanna' },
  2 => { id: 2, nome: 'Eros' },
  1 => { id: 1, nome: 'Antonio' }
}
*/

console.log(novasPessoas2.get(2)) //{ id: 2, nome: 'Eros' }

//posso iterar sobre o mapa que retorna um Array
for (const pessoa of novasPessoas2){
    console.log(pessoa)
}
/*
[ 3, { id: 3, nome: 'Geovanna' } ]
[ 2, { id: 2, nome: 'Eros' } ]
[ 1, { id: 1, nome: 'Antonio' } ]
*/

//destructin
for (const [identifier, { id, nome }] of novasPessoas2){
    console.log(identifier, id, nome)
}
/*
3 3 Geovanna
2 2 Eros
1 1 Antonio

identifier é o mesmo que o Id
*/

for (const pessoas of novasPessoas2.keys()){
    console.log(pessoas)
    /*
        3
        2
        1     
    */

}