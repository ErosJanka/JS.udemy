//Objetos - Lembrete: se tiver [] é array. se tiver {} é objeto

/*
Ao invés de fazer assim:


const nome01 = 'Eros';
const sobrenome01 = 'Jankosky';
const idade01 = 25;

const nome02 = 'Carlos';
const sobrenome02 = 'Lopes';
const idade02 = 37;

há uma maneira de agrupar para uma pessoa as informações
*/


/* 
continua não sendo pratico, mas é uma forma de montar um objeto

const pessoa1 = {
    nome: 'Eros',
    sobrenome: 'Jankosky',
    idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
*/


/*
//funcao que cria pessoa

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome, //quando repete pode colocar epenas nome, sobrenome, idade. ao invés de nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa ('Eros', 'Jankosky', 25)
const pessoa2 = criaPessoa ('Carlos', 'Lopes', 37)
const pessoa3 = criaPessoa ('Maria', 'Joaquina', 19)
*/

const pessoa1 = {
    nome: 'Eros',
    sobrenome: 'Jankosky',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`) //O this NESSE cado representa o pessoa1
    }
}

pessoa1.fala();