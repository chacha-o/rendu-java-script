class Pokemon{
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return this.luck > Math.random()
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokemon.name + ' pour ' + damage + ' de dégâts! Il lui reste ' + pokemon.hp + ' points de vie.')
        } else {
            console.log(this.name  + ' a raté son attaque !')
        }
    }
}

let pikachu = new Pokemon("pikachu", 200, 130, 130, 0.7)
let simiabraz = new Pokemon("simiabraz", 160, 150, 120, 0.7)

while (simiabraz.hp > 0 && pikachu.hp > 0) {

    pikachu.attackPokemon(simiabraz)

    if (simiabraz.hp < 0){
        console.log("simiabraz est mort")
        break
    }

    simiabraz.attackPokemon(pikachu)

    if (pikachu.hp < 0){
        console.log("pikachu est mort")
        break
    }
}