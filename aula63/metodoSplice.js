//              -5         -4         -3       -2        -1
//               0          1          2        3         4
let nomes = ['Eros', 'Geovanna', 'Cassia', 'Cintia', 'Bruno']
let nomes2 = ['Eros', 'Geovanna', 'Cassia', 'Cintia', 'Bruno']

//o primeiro numero é onde quer começar, abaixo seria então no indice 0. Já o segundo parametro quer dizer quantos você quer remover do ARRAY, e  por fim pode receber elementos para adicionar separados por virgula.
// nomes.splice(indice, delete, elem1, elem2, elem2);

//pop remover o ultimo elemento
nomes.splice(4, 1); //quero remover do indice 4, 1 elemento
console.log('     0          1          2           3         ')
console.log(nomes)
let removidos = nomes.splice(3, 1)
console.log(nomes, removidos) //[ 'Eros', 'Geovanna', 'Cassia' ] [ 'Cintia' ] cintia retorna um array mostrando que foi removido, retorna array pois pode remover mais de 1 elemento

removidos = nomes2.splice(-2, 1) //irá retirar apenas o elemento do indice -2 => [ 'Cintia' ]
console.log('     -5         -4         -3       -2        -1')
console.log(nomes2, removidos)
/*se eu quiser remover todos os elementos a partir de um indice eu poderia fazer o seguinte codigo:

removidos = nomes2.splice(-3, Number.MAX_VALUE);
o MAX_VALUE é o meior numero que pode ter
Entçao ele tiraria da Cassia até Bruno.

*/

//Substuir elemento
console.log('     0          1          2        3')
console.log(nomes2)
nomes2.splice(2, 1, 'Elemento1') //tradução: (A partir  do indice 3, apaga 0 elementos, adiciona 'Elemento1')
console.log(nomes2)


//Adicionar Elemento (push)
nomes.splice(nomes.length, 0, 'Adicionei Splice', 'Indicado para mais elemento')
console.log(nomes)