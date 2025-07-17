const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9])
// ... pode ser considerado RESTO
//... nesse caso ele é chamado de Spread que vai espalhar o Array
const a = [...a1, ...a2, ...[7, 8, 9]] //no caso desse array dentro se eu não usar o spread ele entra como literal ARRAY
console.log(a3)
console.log(a)

//concat também funciona para String, Number e Objetos
let nome1 = 'Eros '
let nome2 = 'Jankosky'
const nome = nome1.concat(nome2)
console.log(nome)
