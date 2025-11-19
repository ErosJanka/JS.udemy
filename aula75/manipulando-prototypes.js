// construtora de objetos que seria -> new Object e todas tem um prototype -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};


// Se eu quiser que o meu __proto__ seja o meu objA:
const objB = {
    chaveB: 'B'
    // __proto__: objA
};

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA) //mostra 'A'

/*
Se eu colocar no console do naavegador 'objB':

------------------------
objB
------------------------
{chaveB: 'B'}
    chaveB :  "B"
    [[Prototye]] : Object
------------------------
*/

//Se eu quiser posso escalonar isso com mais objetos e ainda sim acessar a chave A(pode ser metodos ou qualquer outra coisa)

const objC = new Object();
objC.chaveC = 'C'; //mesma coisa dos de cima (A, B)

Object.setPrototypeOf(objC, objB)
/*
------------------------
objC
------------------------
{chaveC: 'C'}
    chaveC : "C"
    [[Prototype]] : Object
------------------------    
        chaveB : "B"
        [[Prototype]] : Object
------------------------        
            chaveA : "A"
            [[Prototype]] : Object
*/

/*
Se eu por algum acaso ligar o C diretamente no A eu não terei acesso ao B. 
então facilmente poderia ver isso usando:
console.log(objC.chaveA) -> mostrará 'A' 
mas se eu colocar 
console.log(objC.chaveB) -> mostrará 'undefined'
pois eu ja fui para o C diretamente para o A
*/

/*
IMPORTANTE

Não é recomendado usaar o __proto__. no Próprio site da MDN avisa isso, aqui é utilizado apenas como didatico.

Então se quiser acessar o __proto__ de um objeto que seria desse jeito:
objA.__proto__

faça: (usando o metodo GET):
Object.getPrototypeOf(objA)

E se quiser configurar use o (SET):
Object.setPrototypeOf(objB, objA)

*/

//trabalhando com as nossas funções construtoras, até agora foram coisas literais
 function Produto (nome, preco) {
    this.nome = nome
    this.preco = preco
}

//não fazendo mais metodos dentro da function, agora faremos prototipe

//metodo de dar desconto:
Produto.prototype.desconto = function(percentual){ 
    this.preco = this.preco - (this.preco * (percentual / 100))
};

//metodo de dar aumentar o preço:
Produto.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100))
};


const p1 = new Produto('camiseta', 50);
p1.desconto(10) //10% de desconto
p1.aumento(15) //aumenta 15%
console.log(p1)


//Imagina que eu queira pegar um objeto do produto e reaproveitar as funções (prototipos)

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
//não consigo usar o aumento ou desconto direto no p2 -> p2.desconto(10) pois não existe dentro do p2

//Então vou usar o SET
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10) //agora funciona pois usei o SET
console.log(p2)

//mas só em literal que se usa o SET, podemos ver que se eu fizer um new Produto funciona normalmente
const p3 = new Produto('Calça', 80);
p3.desconto(10)
console.log(p3)

//outra maneira de aproveitar o Prototype é já criar o objeto setando o prototype
const p4 = Object.create(Produto.prototype);
p4.preco = 113;
p4.aumento(10)
console.log(p4)

//TAMBÉM:
const p5 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 48
    }
});

p5.aumento(10)
console.log(p5)

