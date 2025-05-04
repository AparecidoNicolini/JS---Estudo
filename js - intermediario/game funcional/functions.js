const defaultCharater = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharater,
        name,
        life: 100,
        maxLife: 100,
        attack: 30,
        defense: 20,
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharater,
        name, 
        life: 100,
        maxLife: 100,
        attack: 35,
        defense: 10
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharater,
        name: 'Little Monster',
        life: 100,
        maxLife: 100,
        attack: 5,
        defense: 3,
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharater,
        name: 'Big Monster',
        life: 100,
        maxLife: 100,
        attack: 5,
        defense: 3,
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1el: null,
    fighter2el: null, 

    start(fighter1, fighter1el, fighter2, fighter2el) {
        this.fighter1 = fighter1;
        this.fighter1el = fighter1el;
        this.fighter2 = fighter2;
        this.fighter2el = fighter2el;

        this.fighter1el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2el.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    }, 

    update() {
        this.fighter1el.querySelector('.name').innerHTML = `${this.fighter1.name} / ${this.fighter1.life.toFixed(1)}`;
        let f1pct = (this.fighter1.life/this.fighter1.maxLife) * 100;
        this.fighter1el.querySelector('.bar').style.width = `${f1pct}%`;

        this.fighter2el.querySelector('.name').innerHTML = `${this.fighter2.name} / ${this.fighter2.life.toFixed(1)}`;
        let f2pct = (this.fighter2.life/this.fighter2.maxLife) * 100;
        this.fighter2el.querySelector('.bar').style.width = `${f2pct}%`;
    },

    doAttack(attacking, attacked) {

        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('alguem morreu.');
            return;
        }
        
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() *2).toFixed(2);

        const actualAttacking = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttacking > actualDefense) {
            attacked.life -= actualAttacking;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} atacou ${attacked.name} e deu ${actualAttacking} de dano`)
        } else {
            log.addMessage(`${attacked.name} conseguiu se defender de ${attacking.name}`)
        }
        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render(){
        let logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}