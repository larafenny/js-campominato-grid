/*
creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

BONUS:
L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
*/

// Controllo che file script.js e index.html siano collegati
console.log('JS ok');

// Creo grigllia con js
const square = document.getElementById('square');

// Creo  numero  righe e colonne e calcolo numeero di celle
const row = 10;
const column = 10;
const totCell = row * column;

// Creo funzione che crea un div per la cella
function newCell{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}