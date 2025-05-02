let logObjeto = new Log (document.querySelector('.log'));

let char = new Sorcerer ('Nicolini');
let monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    logObjeto
)

stage.start();