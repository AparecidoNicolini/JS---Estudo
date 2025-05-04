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