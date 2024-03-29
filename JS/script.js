// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creo una lista di 5 numeri random
//la appendo ad un div nel DOM
//al click del bottone
    //appaiono i numeri per 30sec
    //poi spariscono
    //appare un prompt
    //savo i numeri dell'utente con .value
    //li confronto con quelli dell'array 

//selezionare il container
let numberContainer = document.querySelector(`#conteiner`);
let rightContainer = document.querySelector(`#right`)
let wrongContainer = document.querySelector(`#wrong`)

//seleziono il bottone e lo metto in ascolto
let startBtn = document.querySelector(`#start-btn`);
startBtn.addEventListener(`click`, function(){

    //array di numeri random stampato in pagina
    let randomNumbers = getRndInteger(1, 10, 5);
    numberContainer.innerHTML += `${randomNumbers}`
    console.log(randomNumbers)
    //dopo 30sec i numeri scompaiono e viene fuori il prompt
    setTimeout(function(){
        numberContainer.innerHTML = ``
    }, 2000);
    //seleziono i valori del prompt
    

    setTimeout(function (){
        for(let i = 0; i < randomNumbers.length; i++){
            let answer = parseInt(prompt(`Scrivi i numeri che ricordi`)); 
            console.log(answer);
            
            if (randomNumbers.includes(answer)){
                rightContainer.innerHTML += `${answer}`
                
            } else if (!randomNumbers.includes(answer)) {
                wrongContainer.innerHTML += `${answer}`
            }
            numberContainer.innerHTML = `${randomNumbers}`
        }
        
    }, 3000)
      
        
       
        
        
      
})



//---------------
//   FUNCTIONS
//---------------

//funzione che restituisce un array di 5 numri random
function getRndInteger(min, max, arrayLength) {
    let arrayList = []
    while(arrayList.length < arrayLength){
        let random = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(!arrayList.includes(random)){
            arrayList.push(random)
        }
    }
    return arrayList
  }

