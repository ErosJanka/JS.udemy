//São funções que retornam objetos

//jeito basico
function criaPessoa(nome, sobrenome){
    return {
        nome, sobrenome
    };
}

const p1= criaPessoa('Eros', 'Jankosky')
console.log(p1)


function criaPessoa2(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        fala: function (assunto){ //posso encirtar deixando apenas fala(assunto){...}
            return `${this.nome} está ${assunto}. E pesa ${this.peso}kg`; //se eu não colocar o this ele vai falar que 'peso' não está definido, por que? (final da pagina para maior explicação)
        },
        peso: 102
    };
}

const p2= criaPessoa2('Eros', 'Jankosky')
console.log(p2.fala('estudando sobre JS'))


// porque o peso está fora do escopo de 'fala'. Então por que colocar this? Quem está chamando a função 'fala'? é o p2, então o this é o p2. Então (this.peso) é o mesmo que falar (p2.peso)
//outra explicação do por que usar o THIS. no criaPessoa2(nome, sobrenome), não está incluso a informação peso. Então ele vai olhar pra si mesmo e procurar essa infomação. Segue o exemplo se eu deixar apenas o nome: 

function criaPessoa3(nome){
    return {
        nome,
        sobrenome: 'Jankosky', //tenho que definir aqui, pois não irei conseguir definir fora como no nome 
        fala(assunto){
            return `${nome} com o sobrenome: ${this.sobrenome}, está ${assunto}`
        }
    }
}
const p3 = criaPessoa3('Eros')
const completo = p3.fala('mostrado como usar o "this"')
console.log(completo)


                                                            //mais exemplos:



function criaPessoa4(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        fala: function (assunto){ //posso encirtar deixando apenas fala(assunto){...}
            return `${this.nome} está ${assunto}`; //se eu não colocar o this ele vai falar que 'peso' não está definido, por que? (final da pagina para maior explicação)
        },
        altura : a,
        peso : p,

        imc(){ //criando um metodo
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2); //para ter apenas duas casas decimais
        }
    };
}

const p4 = criaPessoa4('Eros', 'Jankosky', 1.89, 102)
console.log(p4.imc())
console.log(p4.fala('estudando sobre JS'))


                                                //usando o get 
// O GET nesse caso vai fingir que faz parte de um atributo, mesmo senfo uma function. por exemplo:

function mostraGet(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,
        get imc(){
            const i = peso/(altura ** 2)
            return i.toFixed(2)
        }
    }
}

const getinho = mostraGet('Geovanna', 'Miranda', 59, 1.60)
console.log(getinho)
console.log(getinho.nome)
console.log(getinho.sobrenome)
console.log(getinho.imc)
// console.log(getinho.imc()) //TypeError: getinho.imc is not a function. Por que esse erro, mesmo ele sendo sim uma function? pois o get faz com que ele se disfarça como atributo do getinho. para esse codigo funcionar basta eu tirar o get 
//Mas por que eu usaria o get? para deixar mais dinamico. Vamos supor que eu queira exibir em escrito isso, o codigo ficaria assim:
console.log(`${getinho.nome} tem o IMC de ${getinho.imc}`)
// poderia colocar imc() ao invés de get? sim, mas desse jeito fica mais dinamico



/*
                                2. Formatar Dados
Em sistemas que lidam com dados, você pode usar o get para formatar informações antes de exibi-las.
*/
// Exemplo:
function criaProduto(nome, preco) {
    return {
        nome,
        preco,
        get precoFormatado() {
            return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
        }
    };
}

const produto = criaProduto('Notebook', 3499.99);
console.log(produto.precoFormatado); // "R$ 3499,99"

/*
Por que usar o get?
O preço é formatado automaticamente toda vez que é acessado.
Não é necessário chamar uma função separada para formatar o preço.
*/


                                                //usando o set e get

function criaPessoa5(nome, sobrenome, a, p){
    return {
        nome, 

        sobrenome,

        //getter como só esta retornando um valor, não preciso setar nada, mais facil e bonito assim
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); //Ele irá separar cada nome pelo espaço, ou seja, consogo pegar nome e sobrenome
            this.nome = valor.shift() //ele vai  retornar o primeiro valor para a variavel (Eros) e vai remover o valor do array
            this.sobrenome = valor.join(' '); //vai pegar o resto do sobrenome, juntar tudo e separar com espaço
            console.log(valor); //[ 'Geovanna','Miranda', 'Oliveira' ]-> depois de tirar [ 'Miranda', 'Oliveira' ]
        },


        fala: function (assunto){ //posso encirtar deixando apenas fala(assunto){...}
            return `${this.nome} está ${assunto}`; //se eu não colocar o this ele vai falar que 'peso' não está definido, por que? (final da pagina para maior explicação)
        },

        altura : a,

        peso : p,

        get imc(){ //criando um metodo
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2); //para ter apenas duas casas decimais
        }
    };
}

const p5 = criaPessoa5('Eros', 'Jankosky', 1.89, 102)
p5.nomeCompleto = 'Geovanna Miranda de Oliveira'
console.log(p5.nomeCompleto)
console.log(p5.nome) //Geovanna
console.log(p5.sobrenome) //Miranda de Oliveira
console.log(p5.fala(`MA-RA-VI-LHO-SA!!!`))
console.log(p5.imc)
