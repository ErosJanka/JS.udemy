//herança com classes

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false
    }
}

const d1 = new DispositivoEletronico('Celular')
console.log(d1) //DispositivoEletronico { nome: 'Celular', ligado: false }
d1.ligar()
console.log(d1) //DispositivoEletronico { nome: 'Celular', ligado: true }
d1.ligar() //Celular já ligado
d1.desligar()
console.log(d1) //DispositivoEletronico { nome: 'Celular', ligado: false }

/*
Perfeito funcionando perfeitamente. MAs suponha que agora ao invés de fazer assim DispositivoEletronico, eu queira extender essa classe. Eu queira fazer outra classe mais especifica que herda dessa classe DispositivoEletronico
*/

class Smartfone extends DispositivoEletronico { //Já aqui essa classe tem tudo que tem na classe DispositivoEletronico
    //Agora que essa classe tem tudo que na outra tem, eu quero adicionar cor. Para isso temos que colocar um construtor
    /*Porém não podemos fazer 
        constructor(nome, cor){
        this.nome = nome;
        this.cor = cor
    Porque não precisamos refazer, pois já esta feito o constructor com nome. faremos o seguinte:
    */
   constructor(nome, cor, modelo){
    super(nome); //imagine que aqui poderiam ter varios
    this.cor = cor
    this.modelo = modelo
   }
}

const s1 = new Smartfone('Iphone', 'Preto', '17 PRO MAX')
console.log(s1)
/*
Smartfone {
  nome: 'Iphone',
  ligado: false,
  cor: 'Preto',
  modelo: '17 PRO MAX'
}
*/



class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi
    }

    //suponha que que a gente tenha que ter ummetodo diferente do ligar da classe Pai
    //Vamos colocar a condição que ele só liga se tiver 30% de bateria

    // ligar(){
    //     console.log('Olha, você alterou o metodo ligar')
    // }

    falaOi(){
        console.log('Opa, bão?')
    }
}

const t1 = new Tablet('IPad', true)
console.log(t1) //Tablet { nome: 'IPad', ligado: false, temWifi: true }
console.log(t1.ligado) // false
t1.ligar() //Olha, você alterou o metodo ligar /*Primeiro ele vai buscar na sombra do metodo, se ele não achar, só chamando de novo para ele buscar no metodo orifinal do ligar() */
t1.ligar() //IPad já ligado
t1.falaOi() //Opa, bão?