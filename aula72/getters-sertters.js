//Object.defineProperty() - getters e setters
//Getter a função dele aqui é so pegaar e exibir o valor
//Setter é poara configurar o valor, difetente do getter ele não ira retornar nada, vai só modificar o valor. é no setter que irei validar o valor

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel
        get: function(){ //o trabalho dele é só pegar e exibir o valor
            return estoquePrivado
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('mensagem de erro')
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome){
    return {
        get nome(){
            return nome
        },

        set nome(valor){
            nome = valor
        }
    }
}

const p2 = criaProduto('camiseta')
console.log(p2.nome)

const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1)
p1.estoque = 500
console.log(p1.estoque)