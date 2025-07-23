const pessoa = {
    nome: 'Eros',
    sobrenome: 'Jankosky'
}
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa['nome']) // é bom para colocar um valor dinamico. Exemplo abaixo

const chave = 'nome'
console.log(pessoa[chave]) //se eu mudar aa chave para sobrenome será melhor.

///////////////////////////////////////////////////////////////////////////////////////////

//construtor do objeto
const pessoa1 = new Object();

pessoa1.nome = 'Geovanna'
pessoa1.sobrenome = 'Miranda'

console.log(pessoa1.nome)

///////////////////////////////////////////////////////////////////////////////////////////

const pessoa2 = new Object()
pessoa2.nome = 'Eros'
pessoa2.sobremonome = 'Jankosky',
pessoa2.idade = 25

delete pessoa2.nome //deletar um parametro do objeto
console.log(pessoa2)


///////////////////////////////////////////////////////////////////////////////////////////

//colocando função dentro de um objeto

const pessoa3 = new Object()
pessoa3.nome = 'Geovanna'
pessoa3.sobremonome = 'Miranda'
pessoa3.idade = 24
pessoa3.falarNome = function(){
    return(`${this.nome} está falando seu nome`) //O this.nome é o mesmo que falar pessoa3.nome
}
pessoa3.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa3.getDataNascimento())

for (let chave in pessoa3){
    console.log(pessoa3[chave])
}


///////////////////////////////////////////////////////////////////////////////////////////

//se eu quero ficar toda hora criando um cliente posso fazer o seguinte:
// Factory  function / Constructor function / classes


//factory function
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Eros', 'Nuspl')
console.log(p1.nomeCompleto())


//Constructor function
function Pessoa(nome, sobremonome){
    this.nome = nome;
    this.sobremonome = sobremonome
}

//o que a palavra new faz?
// a palavra vai criar um obj vazio {} <- this e atrela a palavra this no objeto
const p2 = new Pessoa('Geovanna', 'Oliveira')
const p3 = new Pessoa('Geovanna', 'Linda')
Object.freeze(p3) //não podeá alterar o objeto p3

console.log(p2)
console.log(p3)
