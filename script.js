console.log('JS OK')

//Calcolo del prezzo di un biglietto del treno

/*Dovremo chiedere all'utente il numero dei chilometri che intende percorrere  e la sua eta'.
Bisogna arrivare a calcolare il prezzo del biglietto del treno valutando che: il prezzo
del biglietto e' €0.21 per km percorso, 
se l'utente ha meno di 18 anni avra' uno sconto del 20%;
se l'utente ha piu' di65 anni sara' applicato uno sconto del 40%.

/*TO DO LIST
1. Acuisizione dell'eta'dell'utente.
2. Acquisizione del numero di km che l'utente intende percorrere.
3. Calcolo del prezzo.
4. Apllicazione di eventuale sconto.
5. Mostrare il risultato a schermo.
*/

//Fase di preparazione
const resultElement = document.getElementById('ticket')
console.log(resultElement)

//Fase di raccolta dati
const userAge = prompt('Indichi la sua etá')
const userKm = prompt('Indichi i chilometri che intende percorrere')

console.log('userAge', userAge);
console.log('userKm', userKm);

//Validazione dei dati.
//e' obbligatorio che l'utente inserisca dei numeri.

const isAgeInvalid = isNaN(userAge) || userAge < 1 || userAge > 99;
const isKmInvalid = isNaN(userKm) || userKm < 5;
console.log('isAgeInvalid', isAgeInvalid);
console.log('isKmInvalid', isKmInvalid);

if (isAgeInvalid || isKmInvalid) {
    alert('Per favore, inserire un numero valido')
}

//Calcolo del prezzo

let ticketPrice = (userKm * 21 / 100)
console.log('ticketPrice', ticketPrice)

//appliczione sconti e produzione risultato

if (userAge < 18) {
    ticketPrice = ticketPrice - ((20 / 100) * ticketPrice)
} else {
    resultElement.innerHTML = `Il prezzo del biglietto e' <strong> €${ticketprice}</strong>`
}

if (userAge > 65) {
    ticketPrice = ticketPrice - ((40 / 100) * ticketPrice)
} else {
    resultElement.innerHTML = `Il prezzo del biglietto e' <strong> €${ticketprice}</strong>`
}

/*Produzione risultato */

resultElement.innerHTML = `Il prezzo del biglietto e' <strong> €${ticketPrice.toFixed(2)}</strong>`
