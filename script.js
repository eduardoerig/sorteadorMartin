/*sorteador*/
let valores = [];

function sortear(vezes, v1, v2) {
    v1 = parseInt(v1, 10);
    v2 = parseInt(v2, 10);

    if (isNaN(v1) || isNaN(v2) || vezes <= 0) {
        console.error("Parâmetros inválidos!");
        return;
    }

    valores = []; 

    for (let i = 0; i < vezes; i++) {
        let sorte = Math.floor(Math.random() * (v2 - v1 + 1)) + v1;
        valores.push(sorte); 
    }

    let valoresString = valores.join(', '); 
    document.getElementById('boxResultNumbers').innerText = `Números sorteados: ${valoresString}`;
    document.getElementById('resultNumbers').style.display = 'flex';

    console.log(valoresString);
}


function closePopUpN() {
    document.getElementById('resultNumbers').style.display = 'none';
    valores = []
}

function closePopUpT() {
    document.getElementById('resultTeams').style.display = 'none';
    valores = []
}
function closePopUpNa() {
    document.getElementById('resultNames').style.display = 'none';
    valores = []
}


function getUserNumber() {

    let ass = document.getElementById('minValue').value;
    let cook = document.getElementById('maxValue').value;
    let sex = document.getElementById('quantity').value;

    if (ass === "" || cook === "") {
        alert("Por favor, preencha os dois campos!");
        return;
    }

    if (parseInt(ass, 10) >= parseInt(cook, 10)) {
        alert("O valor mínimo deve ser menor que o valor máximo!");
        return;
    }

    sortear(sex, ass, cook);
}

/* esconder menu */


function hiddenMenu(){
    const menu = document.getElementById('menu')
    
    console.log('Foi clicado!');
    menu.classList.toggle('esconder');
}


function showNumButton() {
    console.log("numButton");
    document.getElementById("sorteadorNum").style.display = 'block';
    document.getElementById("sorteadorTeam").style.display = 'none';
    document.getElementById("sorteadorName").style.display = 'none';
}

function showTeamButton() {
    console.log("teamButton");
    document.getElementById("sorteadorNum").style.display = 'none';
    document.getElementById("sorteadorTeam").style.display = 'block';
    document.getElementById("sorteadorName").style.display = 'none';
}

function showNameButton() {
    console.log("nameButton");
    document.getElementById("sorteadorNum").style.display = 'none';
    document.getElementById("sorteadorTeam").style.display = 'none';
    document.getElementById("sorteadorName").style.display = 'block';
}
 
/* sortear nomes */

function sortearName() {
    let names = document.getElementById('names').value.trim().split(",");
    let numNomes = parseInt(document.getElementById('numNomes').value);

    if (isNaN(numNomes) || numNomes <= 0) {
        alert("Parâmetros inválidos!");
        return;
    }

    if (names.length < numNomes || names[0] === "") {
        alert("Parâmetros inválidos!");
        return;
    }

    var nomesSorteados = [];
    var copiaNames = names.map(nome => nome.trim());
    for (let i = 0; i < numNomes; i++) {
        let indiceAleatorio = Math.floor(Math.random() * copiaNames.length);
        nomesSorteados.push(copiaNames.splice(indiceAleatorio, 1)[0]);
    }

    let valoresNomes = nomesSorteados.join(', ');
    document.getElementById('boxResultName').innerText = `Nomes sorteados: ${valoresNomes}`;
    document.getElementById('resultNames').style.display = 'flex';
}

/* SORTEAR TIMES */

function sortearTimes() {
    let participants = document.getElementById('players').value.trim().split(",");
    let numTeams = parseInt(document.getElementById('teamCount').value);

    if (isNaN(numTeams) || numTeams < 2) {
        alert("Parâmetros inválidos!");
        return;
    }

    if (participants.length < numTeams || participants[0] === "") {
        alert("Parâmetros inválidos!");
        return;
    }

    participants = participants.map(name => name.trim()); 
    participants = participants.sort(() => Math.random() - 0.5);

    let teams = Array.from({ length: numTeams }, () => []);
    participants.forEach((participant, index) => {
        teams[index % numTeams].push(participant);
    });

    let resultTextTeams = teams
        .map((team, index) => `Time ${index + 1}: ${team.join(', ')}`)
        .join('\n\n');

    document.getElementById('boxResultTeam').innerText = resultTextTeams;
    document.getElementById('resultTeams').style.display = 'block';
}