const mode = document.getElementById('mode');
const gameField = document.getElementById('game-field');
document.getElementById('play-button').addEventListener('click', startGame);

function startGame(){
    createField(chooseMode(mode.value));
}

function chooseMode(mode){
    let fieldSize;
    switch(mode){
        case 'facile' :
            fieldSize = 100;
            break;
        case 'normale' :
            fieldSize = 81;
            break;
        case 'difficile' :
            fieldSize = 49;
            break;    
    }
    return fieldSize;
}

function clicked(){
    this.classList.add('safe');
}

function createField(size){
    gameField.innerHTML = '';
    for(let i=0;i<size;i++){
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.height = "calc(100% / "+ Math.sqrt(size)+")";
        newBox.style.width = "calc(100% / "+ Math.sqrt(size)+")";
        newBox.innerHTML= i+1;
        gameField.appendChild(newBox);
        newBox.addEventListener('click', clicked);
    }
}