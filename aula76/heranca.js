//HERANÇA
//Vamos supor que eu va fazer um sistema de e-comerce, a primeira questão é saber o que vai vender. CAmiseta, Caneca, ...
//Produto -> Aumento de preço, desconto
//Camiseta = cor 
//Caneca = material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantida){
    this.preco += quantida;
}

Produto.prototype.desconto = function(quantida){
    this.preco -= quantida;
}


//Agora quero especializar a função Produto, mas não quero ter que ficar reescrevendo a função e os proptotipos, então faço:

//função construtora
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor //explicado na linha 81
}

/*Se eu fizer isso:
    camiseta.aumento(10) //R$10,00

Simplesmente não daria certo, pois o prototype não esta linkado com camiseta. Então oque faazer? Vou criar um objeto e setar o prototype desse objeto vazio para o prototype do Produto
*/
Camiseta.prototype = Object.create(Produto.prototype)
//linkando o construtor(explicar o que é construtor)
Camiseta.prototype.constructor = Camiseta //Se eu não fizer isso o construtor vai aparecer como 'Produto { nome: 'Regata', preco: 17.5 }'. Agora com isso o construtor vai aprecer corretamente com o nome certo 'Camiseta { nome: 'Regata', preco: 17.5 }'


//sobrescrevendo
Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(100)


/////

function Caneca(nome,preco, material, estoque){
    Produto.call(this, nome, preco); //herança
    this.material = material
    // this.estoque - estoque

    //GET/SET
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //para aparecer
        configurable: false, //para não sobrescrever
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return; //não deixa setar caso não seja numero 
            estoque = valor;
        }
    })
}
//linkando prototype
Caneca.prototype = Object.create(Produto.prototype)
//Definindo o Constructor
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plastico', 5)
caneca.estoque = 100;

console.log(caneca)
console.log(caneca.estoque)
console.log(camiseta)


//A Camiseta é uma especialização de Produto, ou seja, ela herda tudo que Produto tem, mas também pode ter suas coisas especificaas  como "cor"


//explicar a diferença do uso de function e const para a criação do produto (trabalho real)