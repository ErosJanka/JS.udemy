/*
Sabemos que as strings são indexadas, mas os Arrays também são, só que tem uma diferença, não são indexados pelo valor igual a string. são indexados por elemento.
ex.
  0       1        2
['Luiz', 'Maria', 'João']

então se eu quiser acessar um nome, basta fazer igual fazemos para procurar uma letra da string

ex. console.log(alunos[1]); //irá retornar o nome Maria
*/

// ex.        0123
const nome = 'Eros';
console.log(nome[0]); //Para acessar a letra 0 da string

//Se colocar apenas nomes, coloque apenas nomes, não coloque numeros, objetos (ex. 1, true, null)
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[1]);

//Se eu quiser editar um anulo
alunos[0] = 'Eros'
console.log(alunos)

//posso adicionar um não existente também, mas é muito complicado caso o array for grande
alunos[3] = 'Luiza'
console.log(alunos)

//para saber o tamanho do array
console.log(alunos.length)

//então para não se consfundir e não substituir um nome se você só quiser acrescentar:
alunos[alunos.length] = 'Carlos'; //Desse modo irá sempre adicionar e não substituir.

//mas tem uma funçao que faz esatamente isso(melhor)
alunos.push('Otavio');
console.log(alunos);

//Se eu quiser adicionar no começo ao inves do final
alunos.unshift('Beto');
console.log(alunos);

//Remover elementos (de trás pra frente)/ use .shift se quiser remover do começo
alunos.pop();
console.log(alunos)

//Mostrar os removidos
const removido = alunos.pop()
console.log(removido)
console.log(alunos)

//Saber se é um array
console.log(alunos instanceof Array);