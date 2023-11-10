let players: {name: string, balloon: string}[] = [];
let eliminated: string[] = [];

function addPlayer(name: string): void {
    if (players.length < 25) {
        let balloonNumber = Math.floor(Math.random() * 25) + 1; 
        players.push({name: name, balloon: '../../assets/icons/balloon/balloon' + balloonNumber + '.svg'}); 
        updatePlayerNameList();
    } else {
        alert("No se pueden añadir más de 25 jugadores")
    }
}

function resetGame(): void {
    players = [];
    eliminated = [];
    updatePlayerList();
    updatePlayerNameList();
}

function play(): void {
    if (players.length < 2) {
        alert("Como mínimo deben de tener 2 jugadores")
    } else {
        let sound = new Audio('../../assets/sounds/pinchazo.mp3'); 
        sound.play(); 

        let eliminatedPlayer = players.splice(Math.floor(Math.random() * players.length), 1);
        eliminated.push(eliminatedPlayer[0].name);
        updatePlayerList();
        updatePlayerNameList();
        updateEliminatedNameList();
        
        if (players.length === 1) {
            let applauseSound = new Audio('../../assets/sounds/aplausos.mp3');
            applauseSound.play();
            alert(`¡El jugador ${players[0].name} ha gando el cerdito!`);
        }
    }
}

function updatePlayerList(): void {
    let playerList = document.getElementById('playerList');
    let eliminatedList = document.getElementById('eliminatedList');

    if (playerList) playerList.innerHTML = '';
    if (eliminatedList) eliminatedList.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = players[i].balloon;
        img.alt = players[i].name;
        li.appendChild(img);
        if (playerList) playerList.appendChild(li);
    }

    for (let i = 0; i < eliminated.length; i++) {
        let li = document.createElement('li');
        li.textContent = eliminated[i];
        if (eliminatedList) eliminatedList.appendChild(li);
    }
}

function updatePlayerNameList(): void {
    let playerNameList = document.getElementById('playerNameList');

    if (playerNameList) playerNameList.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        let li = document.createElement('li');
        li.textContent = players[i].name;
        if (playerNameList) playerNameList.appendChild(li);
    }
}

function updateEliminatedNameList(): void {
    let eliminatedNameList = document.getElementById('eliminatedNameList');

    if (eliminatedNameList) eliminatedNameList.innerHTML = '';

    for (let i = 0; i < eliminated.length; i++) {
        let li = document.createElement('li');
        li.textContent = eliminated[i];
        if (eliminatedNameList) eliminatedNameList.appendChild(li);
    }
}

