function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();;
        
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener( 'keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta()
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
           
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;;
        this.display.focus() //mantém o foco sempre no display, para que quando apertar o enter ele não preciona o ultimo botão clicado
    }

    this.clear = () => this.display.value = '';


    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta Inválida')
                return;
            }

            this.display.value = conta;
        }catch(e){
            alert('Conta Inválida')
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
