//Plimorfismo é um jeito de fazer METODOS se comportarem de maneiras diferentes (em subclasses)
//Classe = Função Construtora
//subclasses = filha da função Construtora

//fazer uma classe de conta bancaria e depois fazer uma subclasse de conta poupança e conta corrente.

// Superclass/ Classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo= saldo
}

Conta.prototype.sacar = function(valor){
    //primeiro checar se tem saldo
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return; //Se o saldo for menor ele já retorna
    }

    //Se passou do de cima, qeur dizer que a pessoa tem saldo
    this.saldo -= valor; //sacar basico
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c.: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10)
console.log(conta1) //Conta { agencia: 11, conta: 22, saldo: 10 }

conta1.depositar(11) //Ag/c.: 11/22 | Saldo: R$21.00
conta1.depositar(50) //Ag/c.: 11/22 | Saldo: R$71.00
conta1.sacar(71) //Ag/c.: 11/22 | Saldo: R$0.00
conta1.sacar(0.01) //Saldo insuficiente: R$0.00


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}
//link dos prototypes
ContaCorrente.prototype = Object.create(Conta.prototype);
//Retornar o Construtora
ContaCorrente.prototype.constructor = ContaCorrente;


//sobrescrever o prototype | Pode negativo
ContaCorrente.prototype.sacar = function(valor){
    //primeiro checar se tem saldo
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return; //Se o saldo for menor ele já retorna
    }

    //Se passou do de cima, qeur dizer que a pessoa tem saldo
    this.saldo -= valor; //sacar basico
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
//link dos prototypes
ContaPoupanca.prototype = Object.create(Conta.prototype);
//Retornar o Construtora
ContaPoupanca.prototype.constructor = ContaPoupanca;


const cc = new ContaCorrente(11, 22, 0, 100) //agencia, conta, saldo, limite
cc.depositar(10) //Ag/c.: 11/22 | Saldo: R$10.00
cc.sacar(110) //Ag/c.: 11/22 | Saldo: R$-100.00
cc.sacar(1) //Saldo insuficiente: R$-100.00 (limite é 100)

console.log()

const cp = new ContaPoupanca(11, 22, 0)
cp.depositar(10) //Ag/c.: 11/22 | Saldo: R$10.00
cp.sacar(110) //Saldo insuficiente: R$10.00
cp.sacar(1) //Ag/c.: 11/22 | Saldo: R$9.00