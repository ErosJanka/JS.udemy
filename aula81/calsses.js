//Criando classes, a classe é a mesma coisa que a função construtora

//Criando classes
class Pessoa{
    //Para receber alguns parametros usamos o seguinte metodo especial(pode não existir se não precisar)
    //Passando parametros
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome= sobrenome
    }


    //colocando metodos
    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

//instanciando a pessoa. instanciar é criar um objeto a partir da classe
const p1 = new Pessoa('Geovanna', 'Miranda'); //NÂO esquecer new
const p2 = new Pessoa2('Eros', 'Jankosky'); 
const p3 = new Pessoa('Cassia', 'Rosario'); 
console.log(p1) 
console.log(p2) 
console.log(p3) 
/*
no terminal:
Pessoa { nome: 'Geovanna', sobrenome: 'Miranda' }

no navegador:
> Pessoa {nome: 'Geovanna', sobrenome: 'Miranda'}
    nome : "Geovanna"
    sobrenome : "Miranda"
    > [[Prototype]] : Object
        > beber : ƒ beber()
        > comer : ƒ comer()
        > constructor : class Pessoa
        > falar : ƒ falar()
        > [[Prototype]] : Object
*/
p1.falar(); //Geovanna está falando


//Fazendo o mesmo com função construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
    //Prototype
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}  

p2.falar(); //vai estar identica a classe
