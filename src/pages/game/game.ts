let players: { name: string; balloon: string }[] = [];
let eliminated: string[] = [];

function addPlayer(name: string): void {
    if (players.length < 25) {
        let balloonNumber = Math.floor(Math.random() * 25) + 1;
        players.push({ name: name, balloon: `../../assets/icons/balloon/balloon${balloonNumber}.svg` });
        updatePlayerList();
        updatePlayerNameList();
    } else {
        alert("No se pueden añadir más de 25 jugadores");
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
        alert("Como mínimo deben de tener 2 jugadores");
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
            alert(`¡El jugador ${players[0].name} ha ganado el cerdito!`);
        }
    }
}

function addBalloonToDiv(balloonSrc: string): void {
    const balloonsContainer = document.getElementById('balloonsContainer');

    if (balloonsContainer) {
        const balloonDiv = document.createElement('div');
        balloonDiv.className = 'BalloonsRow';

        const img = document.createElement('img');
        img.src = balloonSrc;
        img.alt = 'Balloon';
        img.classList.add('BalloonImg');

        balloonDiv.appendChild(img);
        balloonsContainer.appendChild(balloonDiv);
    }
}

function updatePlayerList(): void {
    let balloonsContainer = document.getElementById('balloonsContainer');
    let eliminatedList = document.getElementById('eliminatedList');

    if (balloonsContainer) balloonsContainer.innerHTML = '';
    if (eliminatedList) eliminatedList.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        addBalloonToDiv(players[i].balloon);
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
        li.className = 'BalloonsList'
        let img = document.createElement('img');
        img.src = players[i].balloon; 
        img.alt = players[i].name;
        img.classList.add('BalloonImg');
        li.appendChild(img);       

        let deleteIcon = document.createElement('img');
        deleteIcon.src = '../../assets/icons/icon _trash.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.addEventListener('click', () => deletePlayer(i));
        
        let editIcon = document.createElement('img');
        editIcon.src = '../../assets/icons/icon _edit.png';
        editIcon.alt = 'Edit';
        editIcon.addEventListener('click', () => editPlayer(i));

        li.appendChild(document.createTextNode(players[i].name));
        li.appendChild(img);
        li.appendChild(editIcon);
        li.appendChild(deleteIcon);

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

function editPlayer(index: number): void {
    const newName = prompt("Ingresar nuevo participante:");
    if (newName !== null) {
    // actualizar nombre editado
    players[index].name = newName;
    
    // actualizar listas
    updatePlayerList();
    updatePlayerNameList();
     }
    }
    
    function deletePlayer(index: number): void {
     // eliminar 
    players.splice(index, 1)
    
     // actualizar listas
    updatePlayerList();
    updatePlayerNameList();
    updateEliminatedNameList();
    }






