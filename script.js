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
const finalMessage = document.getElementById('final-message')

const rows = 10
const columns = 10

const winningScore = (rows * columns) - 16


function generateCell(content) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.append(content)
    cell.value = content
    
    return cell
}

function appendCell(content) {
    grid.appendChild(content)
}

function generateUniqueRandomNumber(blackList) {
    let randomNumber 
    
    do {
        randomNumber = Math.floor(Math.random() * (rows * columns) + 1)
    } while (blackList.includes(randomNumber));
    
    blackList.push(randomNumber)
    
    return randomNumber
}



button.addEventListener('click', function (){
    playMessage.classList.add('d-none')
    grid.classList.remove('d-none')

    button.innerText = 'Ricomincia'
    button.classList.add('btn', 'btn-primary', 'px-1', 'rounded')
    
    finalMessage.classList.add('d-none')
    let score = 0
    grid.innerHTML = ''
    const blackList = []
    
    gameOngoing = true

    for (let i = 0; i < 16; i++){
        generateUniqueRandomNumber(blackList)
    }
    
    for (let i = 1; i <= rows*columns; i++){
        
        const cell = generateCell(i)
        
        appendCell(cell)
        
        if (blackList.includes(cell.value)) {
            cell.classList.add('bomb')
        }
        
        cell.addEventListener('click', function(){
            
            if (gameOngoing) {
                cell.classList.add('clicked')
                console.log(i)
                
                if (cell.classList.contains('bomb', 'clicked')){
                    
                    finalMessage.innerHTML = `Mi dispiace, hai perso.<br>Il tuo punteggio: ${score}`
                    
                    finalMessage.classList.remove('d-none')
                    
                    gameOngoing = false

                } else if (cell.classList.contains('clicked')){
                    score++
                }
                
                if (score == winningScore){
                    finalMessage.innerHTML = `Complimenti! Hai Vinto!<br>Il tuo punteggio: ${score}`
                            
                    finalMessage.classList.remove('d-none')

                    gameOngoing = false

                }
                
            }
            
            
        })
        
    }
})