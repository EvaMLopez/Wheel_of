let players: string[] = [];
let eliminated: string[] = [];

function addPlayer(name: string): void {
    if (players.length < 25) {
        players.push(name);
        alert(`Jugador ${name} ha sido añadido`);
        updatePlayerList();
    } else {
        alert("No se pueden añadir más de 25 jugadores")
    }
}

function resetGame(): void {
    players = [];
    eliminated = [];
    updatePlayerList();
}

function play(): void {
    if (players.length < 2) {
        alert("Como mínimo deben de tener 2 jugadores")
    } else {
        let eliminatedPlayer = players.splice(Math.floor(Math.random() * players.length), 1);
        eliminated.push(eliminatedPlayer[0]);
        alert(`el jugador ${eliminatedPlayer} ha sido eliminado`)
        updatePlayerList();
        
        if (players.length === 1) {
            alert(`¡El jugador ${players[0]} ha gando el cerdito!`);
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
        li.textContent = players[i];
        if (playerList) playerList.appendChild(li);
    }

    for (let i = 0; i < eliminated.length; i++) {
        let li = document.createElement('li');
        li.textContent = eliminated[i];
        if (eliminatedList) eliminatedList.appendChild(li);
    }
}