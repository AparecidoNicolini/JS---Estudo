// knight or sorcerer - Guerreiro ou mago
// LittleMonster or BigMonster

class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    
    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 8;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 12;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 6;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 10;
        this.defense = 6;
        this.maxLife = this.life;
        this.log = logObjeto;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObjeto) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObjeto;
    }

    start() {
        this.update();
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // fighter1;
        this.fighter1El.querySelector('.name').innerHTML = `Nome: ${this.fighter1.name} - HP: ${this.fighter1.life.toFixed(1)}`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100 ;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;
        
        // fighter2;
        this.fighter2El.querySelector('.name').innerHTML = `Nome: ${this.fighter2.name} - HP: ${this.fighter2.life.toFixed(1)}`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;  
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Player morto');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() *2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack - actualDefense;
            this.log.addMessage(`O player ${attacking.name} conseguiu dar
                ${actualAttack - actualDefense} de danos`)
        } else {
            this.log.addMessage(`O player ${attacked.name} conseguiu defender
                ${actualAttack - actualDefense} de danos`)
        }
        // console.log(actualAttack);

        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render () {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}