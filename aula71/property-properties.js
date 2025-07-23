// defineProperty - definePropeties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chav, faz com que no console mostre  estoque: 3
        value: estoque, //valor da chave
        writable: false, //posso alterar esse valor? 'true ou false'
        configurable: false //pode apagar a chave? pode reconfigurar a chave? 
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)

//definePropeties

function Vendedor(nome, sobrenome, cargo) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: false,
            configurable: false
        },
        cargo: {
             enumerable: true,
            value: cargo,
            writable: false,
            configurable: false
        }
    })
}

const v1 = new Vendedor('Geovanna', 'Jankosky', 'Linda d++++')
console.log(v1)
