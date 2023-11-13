/* let players: {name: string, balloon: string}[] = [];
let eliminated: string[] = [];

function addPlayer(name: string): void {
    if (players.length < 25) {
        let balloonNumber = Math.floor(Math.random() * 25) + 1; 
        players.push({name: name, balloon: '../../assets/icons/balloon/balloon' + balloonNumber + '.svg'}); 
        updatePlayerList();
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
 */


// PRUEBA 


let players: {name: string, balloon: string; size: number }[] = [];
let eliminated: string[] = [];

function addPlayer(name: string): void {
    if (players.length < 25) {
        let balloonNumber = Math.floor(Math.random() * 25) + 1;
        let balloonSrc = '../../assets/icons/balloon/balloon' + balloonNumber + '.svg';
        let bigBalloonSize = 80;

        players.push({ name: name, balloon: balloonSrc, size: bigBalloonSize });
        updatePlayerList();
        updatePlayerNameList();

        // globo grande en balloonsSection
        createBalloonOnImage(balloonSrc, bigBalloonSize);
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
    console.log('Playing the game');
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
        li.className = 'balloons-list'
        let img = document.createElement('img');
        img.src = players[i].balloon; 
        img.alt = players[i].name;
        img.classList.add('balloon-img');
        li.appendChild(img);       

        // globo grande 
        createBalloonOnImage(players[i].balloon, players[i].size);
        
        // globo pequeño en lista
        createBalloonOnList(img, players[i].size);

        // icono eliminar
        let deleteIcon = document.createElement('img');
        deleteIcon.src = '../../assets/icons/icon _trash.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.addEventListener('click', () => deletePlayer(i));

        // icono editar
        let editIcon = document.createElement('img');
        editIcon.src = '../../assets/icons/icon _edit.png';
        editIcon.alt = 'Edit';
        editIcon.addEventListener('click', () => editPlayer(i));

        li.appendChild(document.createTextNode(players[i].name));
        li.appendChild(img);
        li.appendChild(editIcon);
        li.appendChild(deleteIcon);

        if (playerList) playerList.appendChild(li);
    }

    for (let i = 0; i < eliminated.length; i++) {
        let li = document.createElement('li');
        li.textContent = eliminated[i];
        if (eliminatedList) eliminatedList.appendChild(li);
    }
}

function createBalloonOnList(img: HTMLImageElement, size: number): void {
    img.style.width = size / 3 + 'px';
    img.style.height = 'auto';
    img.style.position = 'relative';
}


// FUNCIONA PERO SUPERPONE LOS GLOBOS *****

function createBalloonOnImage(balloonSrc: string, size: number = 30): void {
    let balloonSection = document.getElementById('balloonsSection');
    if (balloonSection) {
        let balloon = document.createElement('img');
        balloon.src = balloonSrc;
        balloon.className = 'balloon';
        balloon.style.width = size + 'px';

        let positionTop = (balloonSection.clientHeight - size) / 2;
        let positionLeft = (balloonSection.clientWidth - size) / 2;
        

        balloon.style.top = positionTop + 'px';
        balloon.style.left = positionLeft + 'px';

        balloonSection.appendChild(balloon);
    }
} 


function updatePlayerNameList(): void {
    let playerNameList = document.getElementById('playerNameList');

    if (playerNameList) playerNameList.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = players[i].balloon;
        img.alt = players[i].name;
        

            //  eliminar
        let deleteIcon = document.createElement('img');
        deleteIcon.src = '../../assets/icons/icon _trash.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.addEventListener('click', () => deletePlayer(i));

            //  editar
        let editIcon = document.createElement('img');
        editIcon.src = '../../assets/icons/icon _edit.png';
        editIcon.alt = 'Edit';
        editIcon.addEventListener('click', () => editPlayer(i));

        li.appendChild(document.createTextNode(players[i].name));
        li.appendChild(img);

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


//   evitar propagación evento ¿?

const balloonsSection = document.getElementById('balloonsSection');
if (balloonsSection) {
    balloonsSection.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


const playerNameInput = document.getElementById('playerName') as HTMLInputElement | null;
if (playerNameInput) {
    playerNameInput.readOnly = false;
}
