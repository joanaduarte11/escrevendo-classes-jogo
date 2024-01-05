class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}


let heroi1 = new heroi("mestre dos magos", 1000, "mago");


console.log(heroi1.atacar()); 
 
