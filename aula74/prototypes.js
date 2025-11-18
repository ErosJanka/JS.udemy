/*
JAvaScript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.

Definição de protitipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez. Servindo de modelo ou molde par futura produções.

Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade PROTOTYPE da função construtora que foi usada par cria-lo. Quando tentamos acessar um membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> milde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => 'ORIGINAL: ', this.nome + ' ' + this.sobrenome;
}

//instancia
const pessoa1 = new Pessoa('Geovanna', 'M.'); //<- Pessoa =Função construtora
const pessoa2 = new Pessoa('Eros', 'J.'); // <- Pessoa Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data)
/* note que no console quando vemos no espaaço de 'pessoa' tem: nome, sobrenome e nomeCompleto. Mas quando olhamos na 'data' não há nada alem da data, mas como conseguimos fazer 'data.getFullYear()' ou 'data.toLocaleDateString()'. Como conseguimos fazer isso se não tem nada dentro do objeto? 

Na verdade se olharmos bem tem uma propriedade (__proto__) que não esta debtro do objeto 'data'. Ele esta na verdade no objeto 'pai', onde não precisa ficar criando varios metodos, ele joga para o proto que fica dentro do pai do objeto.

Se olharamos dentro do (__proto__) do objeto data conseguimos olhar os metodos getFullYear e assim por diante. 

Da onde vem esse __proto__? o jS já linka para mim automaticamente uma propriedade da função construtora chamada PROTOTYPE
*/

Pessoa.prototype.estouAqui = 'hahaha'; 
/*
quando olhamos no console do navegador o objeto pessoa não tem nada do 'estouAqui', mas se digitarmos por exemplo 'pessoa1.estouAqui' vai aparecer 'hahaha', ou seja, esta dentro do objeto pessoa1, ou seja, se olhar dentro do __proto__ o 'estouAqui' vai estar lá. Lembrando que esse __proto__ é o mesmo que Pessoa.prototype, le só esta linkado para mim automaticamente. 

Então tanto a pessoa1 quanto a pessoa2 tem o 'estouAqui' sem eu precissar ficar colocando
é interessante usar quando estiver metodos assim que fazem a mesma coisa para todos os objetos (não atributos, mas metodos). ou seja, posso tirar o 'this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;' e colocar no PROTOTYPE
*/

//abaixo é como colocar o metodo no prototype (irei manter o nomeCompleto para exemplo)

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}; 
/* Uma coisa interessante: Quando olhamos no console do navegador podemos perceber que o ORIGINAL esta sendo exibido quando a gente digita por exemplo 'pessoa1.nomeCompleto'. MAs por que? porque ele pesquisa primeiro no objeto PAI que esta dentro da função e depois pegha no __proto__. Se eu deixar comentado dentro da função construtora o nomeCompleto ai sim iramostrar corretamente do __proto__. Para que isso? Para melhorar a perfomace, pois de tiver milhares de usuarios não será preciso ter varios metodos

Caminho que o motor do Js percorre até achar:

   1°              2°                   3°
pessoa1 --> Pessoa.prototype --> Object.prototype
*/


