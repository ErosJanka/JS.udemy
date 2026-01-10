class Carro {
    constructor(nome){
        this.nome = nome
        this.velocidade = 0
    }

    //Aquando apertar algum botão do controle, ele chama o metodo acelerar 
    acelerar(){
        //definido limite [_velocidade]
        if(this.velocidade >= 100) return;
        this.velocidade++
    }

    //botão de freiar. criando o metodo
    freiar(){
        //Definindo minimo permitido de [_velocidade], se não ia para -1, -2, etc
        if(this.velocidade <= 0) return;
        this.velocidade--
    }
}

//criando Carro
const c1 = new Carro('Fusca');

//simulando alguém segurando o botão de acelerar mais que o necessario
for(let i = 0; i <= 200; i++){
    c1.acelerar()
}

console.log(c1)
/*
Carro { nome: 'Fusca', velocidade: 100 }
A velocidade é de 100 mesmo apertando para acelerar até 200
*/

//Simulando trabalhando em conjunto e outra pessoa em uma classe faz isso:
c1.velocidade = 1500
console.log(c1)


/*
    Previnindo disso aconteceer
Não quero que ninguém trabalhe na velodidade atual. Esse caso a gente pode criar algum atributo da classe a propriedade da classe privadaque ninguém pode acessar, ningyém pode alterar, só na classe pode ser trabalhada. Depois posso criar um Getter ou um Setter pra que quando alguém acelerar eu possa ter o cuidado de identificar se passou ou não da [_velocidade]
*/

//Outro tipo de dado primitivo => Symbol
//Symbol cria uma chave privada dentro do objeto
//Apesar dele parecer uma classe ou um função construtora, ele não usa a palavra new 
const _velocidade = Symbol('velocidade') //symbol cria um ID aleatorio
class Carro2 {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    //criando metodo com get. Quando tiver velocidade vai estar chamando na verdade [_velocidade]
    get velocidade(){
        return this[_velocidade]
    }

    //Aquando apertar algum botão do controle, ele chama o metodo acelerar 
    acelerar(){
        //definido limite [_velocidade]
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++
    }

    //botão de freiar. criando o metodo
    freiar(){
        //Definindo minimo permitido de [_velocidade], se não ia para -1, -2, etc
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

//criando Carro
const c2 = new Carro2('Fusca');

//simulando alguém segurando o botão de acelerar mais que o necessario
for(let i = 0; i <= 200; i++){
    c2.acelerar()
}

console.log(c2); //Carro2 { nome: 'Fusca', [Symbol(velocidade)]: 100 }
/*
Carro { nome: 'Fusca', [_velocidade]: 100 }
A [_velocidade] é de 100 mesmo apertando para acelerar até 200
*/

//Simulando trabalhando em conjunto e outra pessoa em uma classe faz isso:
c2.velocidade = 1500
console.log(c2); //Carro2 { nome: 'Fusca', velocidade: 1500, [Symbol(velocidade)]: 100 }

//acessando a chave velocidade usando Getter
console.log(c2.velocidade)

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' +this.sobrenome
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}
const p1 = new Pessoa('Geovanna', 'Miranda');
p1.nomeCompleto = 'Geovanna Jankosky'
console.log(p1.nomeCompleto)