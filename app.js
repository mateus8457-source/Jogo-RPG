class Personagem{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.vidaMax = vida, 
        this.ataque = ataque,
        this.defesa = defesa 
    }

    curar(quantidade){
        this.vida = this.vida + quantidade

        if (this.vida > this.vidaMax){
            this.vida = this.vidaMax
        }
    }
    
    causaDano(personagem){
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade){
        let dano = quantidade - this.defesa

        if(quantidade < this.defesa){
            let dano = 0
        }
        
        this.vida = this.vida - dano

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
    
   } 
   
    estaVivo(){
       return this.vida > 0 
      }  

      mostrarStatus(){ 
      console.log(this.nome + " | Vida: " + this.vida) 
} 


}

class Guerreiro extends Personagem {        //extends = herença
    golpePesado(personagem){
       personagem.recebeDano(this.ataque * 2)
    }
}

class Mago extends Personagem {
    bolaDeFogo(personagem){
     personagem.recebeDano(this.ataque + 15)
    }
}

class Arqueiro extends Personagem {
    tiroPreciso(personagem){
        personagem.recebeDano(this.ataque + 10)
    } 
}

class Necromante extends Personagem {
    invocaçãoDosMortos(personagem){
        personagem.recebeDano(this.ataque + 20)
    }
}

class Assassino extends Personagem {
    abateSilencioso(personagem){
        personagem.recebeDano(this.ataque + 100)
    }
}

class Druida extends Personagem {
    metamorfose(personagem){
        personagem.recebeDano(this.ataque + 30)
    } 
}

class Tanque extends Personagem {
    saltoMortal(personagem){
        personagem.recebeDano(this.ataque + 50)
    }
}


const druida = new Druida("kode", 70, 25, 8)
const guerreiro = new Guerreiro("Thorin", 60, 20, 15)
const mago = new Mago("Gandalfe", 60, 35, 5)
const arqueiro = new Arqueiro("Legolas", 80, 25, 10)
const tanque = new Tanque("Reinhardt", 90, 15, 15)
const necromante = new Necromante("Mortis", 70, 20, 9)
const assassino = new Assassino("Zephyr", 50, 30, 6)

druida.causaDano(mago)
mago.curar(15)

console.log(mago.mostrarStatus())