/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int1 = 7;
let int2 = 13;

if (int1 > int2) {
  console.log(int1);
} else {
  console.log(int2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int3 = 7;
let isEqual = int3 === 5 ? "equal" : "not equal";
console.log(isEqual);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int4 = 25;
let noRest = int4 % 5 === 0 ? "divisibile per 5" : "non divisibile per 5";
console.log(noRest);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int5 = 8;
let int6 = 16;

if (int5 === 8) {
  console.log("primo numero = ", int5);
}
if (int6 === 8) {
  console.log("secondo numero = ", int6);
}
if (int5 + int6 === 8) {
  console.log("la loro somma = ", int5 + int6);
}
if (int5 - int6 === 8) {
  console.log("il primo meno il secondo = ", int5 - int6);
}
if (int6 - int5 === 8) {
  console.log("il secondo meno il primo = ", int6 - int5);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;
let totalAmount =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
console.log("il totale da pagare è ", totalAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalAmount =
  totalShoppingCart > 50
    ? totalShoppingCart * 0.8
    : (totalShoppingCart + 10) * 0.8;
console.log("con lo sconto black friday il totale da pagare è ", totalAmount);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int7 = 26;
let int8 = 65;
let int9 = 92;

if (int7 > int8 && int7 > int9) {
  console.log(int7);
} else if (int8 > int7 && int8 > int9) {
  console.log(int8);
} else console.log(int9);

if ((int7 > int8 && int7 < int9) || (int7 < int8 && int7 > int9)) {
  console.log(int7);
} else if ((int8 > int7 && int8 < int9) || (int8 < int7 && int8 > int9)) {
  console.log(int8);
} else console.log(int9);

if (int7 < int8 && int7 < int9) {
  console.log(int7);
} else if (int8 < int7 && int8 < int9) {
  console.log(int8);
} else console.log(int9);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let writeSomething = "ciao";
let isANumber =
  typeof writeSomething === "number" ? "è un numero" : "non è un numero";
console.log(isANumber);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int10 = 5;
let isItPair = int10 % 2 === 0 ? "è pari" : "è dispari";
console.log(isItPair);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 3;
if (val < 10) {
  console.log("Meno di 10");
}
if (val < 5) {
  console.log("Meno di 5");
}
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numbers = [];
numbers.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numbers[9] = 100;
console.log(numbers);
