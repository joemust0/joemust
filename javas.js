class motor{
    constructor(p){
        console.log("construtor do motor rodando....")
        this.potenciadomeumotor = p;
    }

}

class carro{
    constructor(cor){
        this.potenciadomeumotor = cor;
    }
    acelerar (){
        console.log ("VRUUUUM");
    }
}
let manco = new motor(2);
let power = new motor(10);
let c = new carro("vermelho");
c.acelerar();



