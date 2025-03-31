function CriaCalculadora(){
    this.display = document.querySelector('.display')

    this.Inicia = function (){
        this.CliqueBotoes()
        this.PressionaEnter()
    }

    this.PressionaEnter = function (){
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) { // Verifica se a tecla Enter foi pressionada
                this.Resultado();
            }

            if (e.keyCode === 46){
                this.LimpaDisplay()
            }
        });
    }


    this.CliqueBotoes = function(){
        document.addEventListener( 'click', (e) =>{
            const el = e.target;

            if(el.classList.contains('btn-num')){
                this.BtnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.LimpaDisplay()
            }

            if(el.classList.contains('btn-del')){
                this.ApagaUm()
            }

            if(el.classList.contains('btn-eq')){
                this.Resultado()
            }

        })
    }

    this.Resultado = function(){
        let conta = this.display.value

        try{
            conta = eval(conta)

            if (!conta && conta !== 0) { // Verifica se a conta é inválida
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }


    this.ApagaUm = function (){
        this.display.value = this.display.value.slice(0 , -1)
    }


    this.LimpaDisplay = function(){
        this.display.value= ''
    }


    this.BtnParaDisplay = function(valor){
        this.display.value += valor
    }
}

const calculadora = new CriaCalculadora()
calculadora.Inicia()