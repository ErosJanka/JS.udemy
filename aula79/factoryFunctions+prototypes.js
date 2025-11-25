function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`)
        },
        comer(){
            console.log(`${this.nome} está comendo`)
        },
        beber(){
            console.log(`${this.nome} está bebendo`)
        }
    }
    
    //linkando o proptotype no objeto que estou retornando
    return Object.create(pessoaPrototype, {
        nome: { value: nome }, //a avntagem é que posso decidir se a chave é ritable, enumerable, colocar GET, SET
        sobrenome: { value:sobrenome }
    })
}
//não tem a palavra 'new' pois é uma factory funcionr (função normal)
const p1 = criaPessoa('Geovanna', 'Miranda')
console.log(p1) //esse estudo é visto pelo navegador ligado pelo index
/*
{nome: 'Geovanna', sobrenome: 'Miranda'}
    nome: "Geovanna"
    sobrenome: "Miranda"
    [[Prototype]]: Object
*/

//todas as pessoas que eu criar vão usar os metodos, vãolinkar os prototypes.
//Se eu fizer da maneira mais simples:

function criaPessoa2(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        falar(){
            console.log(`${this.nome} está falando`)
        },
        comer(){
            console.log(`${this.nome} está comendo`)
        },
        beber(){
            console.log(`${this.nome} está bebendo`)
        }
    };
}

const p2 = criaPessoa2('Eros', 'Jankosky');
console.log(p2)
/*
{nome: 'Eros', sobrenome: 'Jankosky', falar: ƒ, comer: ƒ, beber: ƒ}
    beber : ƒ beber()
    comer : ƒ comer()
    falar : ƒ falar()
    nome : "Eros"
    sobrenome : "Jankosky"
    [[Prototype]] : Object

*/

//O problema é que a cada pessoa que eu criar ele vai criar esses metodos e isso consome memoria, e pode causar problemas ao usuario e também ao servidor

const p3 = criaPessoa ('Cassia', 'Miranda')
console.log(p3)
/*
p1.falar()
Geovanna está falando
undefined

p2.falar()
Eros está falando
undefined

p3.falar()
Cassia está falando
undefined

percebe que as funç~eos fazem a mesma coisa, mas a criaPessoa é melhor que criaPessoa2
*/

//Melhorando ainda mais o codigo usando 'composição':
const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    },
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    },
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    },
}

const pessoaPrototype = { ...falar, ...comer, ...beber} //copiando com spread operator

function criaPessoa3(nome, sobrenome){
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome }, //a avntagem é que posso decidir se a chave é ritable, enumerable, colocar GET, SET
        sobrenome: { value:sobrenome }
    })
}

const p4 = criaPessoa3('Antonio', 'Floriano')
console.log(p4)