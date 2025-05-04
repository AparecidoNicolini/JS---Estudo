const char = createKnight('Aparecido');
const monster = createBigMonster();

stage.start(
    char,
    document.querySelector('#char'),
    monster,
    document.querySelector('#monster')
)