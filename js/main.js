 //chiedere all’utente il numero di chilometri che vuole percorrere
 var kmDaPercorrere = parseInt (prompt ( "quanti km vuoi percorrere?" ));

//chiedere l’età del passeggero.
var quantiAnniHai = parseInt (prompt ( "quanti anni hai?" ));

var costoSenzaSconto = kmDaPercorrere * 0.21; // totale senza sconto
console.log(costoSenzaSconto);

// calcolo il prezzo del viaggio con lo sconto per i monorenni
var scontoMinorenne;
if ( quantiAnniHai < 18 ) {
  scontoMinorenne = (costoSenzaSconto * 20) / 100;
}

// calcolo il prezzo del viaggio con lo sconto per gli over 65


// fornisco il prezzo del biglietto


//calcolare il prezzo totale del viaggio
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

document.getElementById('biglietto').innerHTML = 'vuoi percorrere ' + kmDaPercorrere + " all'età di"  + quantiAnniHai + 'dovrai spendere' ;
