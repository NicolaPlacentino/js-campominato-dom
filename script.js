/*#Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo 
possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

const grid = document.getElementById('grid')
const button = document.getElementById('button')
const playMessage = document.getElementById('play-message')

const rows = 10
const columns = 10


function generateCell(content) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.append(content)

    return cell
}

function appendCell(content) {
    grid.appendChild(content)
}

button.addEventListener('click', function (){
    playMessage.classList.add('d-none')
    grid.classList.remove('d-none')

    grid.innerHTML = ''
    for (let i = 0; i < rows*columns; i++){

        const cell = generateCell(i + 1)
        
        cell.addEventListener('click', function(){
            cell.classList.add('clicked')
            console.log(i + 1)
        })

        appendCell(cell)
        

    }
})