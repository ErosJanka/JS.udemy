/*
📝 Exercício 1 — Classe `Notebook`

Crie uma classe `Notebook` que herde de `DispositivoEletronico`.

### Requisitos

- Receba no constructor:
    - `nome`
    - `memoriaRam`
- Utilize `super(nome)`
- Adicione a propriedade `memoriaRam`
- Crie um método `mostrarConfig()` que exiba:
    - Nome
    - Estado (ligado/desligado)
    - Memória RAM

📝 Exercício 2 — Sobrescrevendo Método

Na classe Notebook, sobrescreva o método ligar() para:

Antes de ligar, exibir a mensagem:

"Inicializando sistema..."

Depois, chamar o comportamento original da classe pai

💡 Dica: use super.ligar() dentro do método sobrescrito.
*/

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

class Notebook extends DispositivoEletronico {
    constructor(nome, memoriaRam){
        super(nome);
        this.memoriaRam = memoriaRam
    }

    ligar(){
        console.log('Inicializando sistema...')
        super.ligar()
    }

    mostrarConfig(){
        const status = this.ligado ? 'Ligado' : 'Desligado';
        
        console.log(`
            Nome: ${this.nome}.
            Estado: ${status}.
            Memória RAM: ${this.memoriaRam}
            `)
    }
}

const n1 = new Notebook('Positivo', '18GB')
console.log(n1)
n1.mostrarConfig()
n1.ligar()
n1.ligar()

/*
🔥 Desafio (Opcional)

Crie uma classe SmartTV que:

Herde de DispositivoEletronico

Possua:

tamanhoTela

conectadaInternet

Só permita ligar se conectadaInternet === true

Caso contrário, exiba:

"Sem conexão com a internet"
*/

class SmartTV extends DispositivoEletronico{
    constructor(nome, tela, conectadointernet) {
        super(nome);
        this.tela = tela;
        this.conectadointernet = conectadointernet
    }

    ligar(){
        if(this.conectadointernet === true){
            console.log(`${this.nome} ligado`)
            return
        } else {
            console.log('Sem conexão com a internet')
        }
    }
}

let s1 = new SmartTV ('Samsung', '55"', false)
console.log(s1)
s1.ligar() //Sem conexão com a internet
s1 = new SmartTV ('Samsung', '55"', true)
s1.ligar() //Samsung ligado