//705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  6  5  4  3  2  
70 0 40 28  48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito) -> importante, se o digito for maior que 9 ele é 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x 
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0 10

11 - (284 % 11) = 2 (segundo digito)
se o digito for maior que 9 ele é 0
*/

function ValidaCPF(cpfEnviado){

    


    //tirar todos os pontos
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, //para mostrar no console
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

//fazer a validação do CPf original com da conta
ValidaCPF.prototype.valida = function (){
    //saber se o parametro foi enviado, se não já retorna false para não dar erro 
    if (typeof this.cpfLimpo === 'undefined') return false;

    //validando o tamanho do CPF(11)
    if (this.cpfLimpo.length !== 11) return false;

    //não aceitar sequencia (111.111.111-11)
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2) //tira os dois ultimos digitos
    const digito1 = this.criaDigito(cpfParcial)
    console.log(digito1); //5 -> 1° digito
    
    const digito2 = this.criaDigito(cpfParcial + digito1)
    console.log(digito2) //2 -> 2° digito

    //para fazer um novo CPF e comparar com o CPF enviado
    const novoCpf = cpfParcial + digito1 + digito2
    console.log(novoCpf) //70548445052


    return novoCpf === this.cpfLimpo
}

//metodo que faz os digitos. Ele recebe os numeros do CPF e ele faz o calculo dos digitos
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    //trasforma o CPF em ARRAY
    const  cpfArray = Array.from(cpfParcial)

    //contador regrecivo 10 -> 2 
    let regrecivo = cpfArray.length + 1
    console.log(regrecivo) //10

    const total = cpfArray.reduce((ac, val) => {
        console.log(regrecivo, val, regrecivo * val); //mostra o mesmo que as linhas 4 e 5
        ac += (regrecivo * Number(val))
        regrecivo--;

        return ac;
    }, 0)
    
    const digito = 11 - (total % 11)

    //expreção ternaria
    return digito > 9 ? '0' : String(digito) //coloquei em string para concatenar na variavel 'novoCpf'
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo //se for sequencia retorna true
}


const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo) //70548445052
//criando um metodo dentro da ValidaCPF que se chama valida 

console.log(cpf.valida()) //é so responsavel por validar. Tudo que for fazer no CPF vai ser iniciado no valida 

if(cpf.valida()){
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}