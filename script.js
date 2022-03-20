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

// Recupero elementi da html 
// Easy Button
const easyButton = document.getElementById('easy');
// Medium Button
const mediumButton = document.getElementById('medium');
// Hard Button
const hardButton = document.getElementById('hard');

easyButton.addEventListener('click', ()=> newCellInGrid(100, 'easy'));

mediumButton.addEventListener('click', ()=> newCellInGrid(81, 'medium'));

hardButton.addEventListener('click', ()=> newCellInGrid(49, 'hard'));

/* ----------- Vecchiie variabili contenenti numero di righe e colonne ------------
non mi servono piiù perchè la funziione che crea le celle non avrà più bisogno di variabilii esterne, e sarà flessibille.


// Creo  numero  righe e colonne e calcolo numeero di celle
const row = 10;
const column = 10;
const totCell = row * column;

--------------------------------------------------------------------------------------*/

// Creo funzione che crea tot celle in base al livello
function newCellInGrid(totCell, level){
    // Recupero square da html 
    const square = document.getElementById('square'); 
    // reset griiglia ogni volta chee cliccoo su un bottone
    square.innerHTML = '';
    // creoo le celle dentro square
    for(let i=0; i<totCell; i++){
        //creo divCell che è un div all'interno dii  square
        const divCell = document.createElement('div');
        // aggiungo classe cell al div appena creato
        divCell.classList.add('cell');
        divCell.classList.add(level);

        //inserisco numero iin ogni cella
        divCell.innerText = i+ 1;
        // Inserisco le celle nel contenitore
        square.appendChild(divCell);
        
        
        // aggiungo eventListener che al click la cella si colora di azzurro
        divCell.addEventListener('click', function(){
            divCell.classList.toggle('bg-lightblue');
        });
    }
}