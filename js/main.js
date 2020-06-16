 //chiedere all’utente il numero di chilometri che vuole percorrere
 var kmDaPercorrere = parseInt (prompt ( "quanti km vuoi percorrere?" ));

//chiedere l’età del passeggero.
var quantiAnniHai = parseInt (prompt ( "quanti anni hai?" ));

var costo = kmDaPercorrere * 0.21; // totale senza sconto
console.log(costo);

// calcolo il prezzo del viaggio con lo sconto per i monorenni
var scontoMinorenne;
if ( quantiAnniHai < 18 ) {
  scontoMinorenne = (costo * 20) / 100;
  costo = costo - scontoMinorenne;

}

// calcolo il prezzo del viaggio con lo sconto per gli over 65
else if (quantiAnniHai > 65 ) {
  costo = costo - ((costo * 40) / 100);

}

console.log(costo);

// fornisco il prezzo del biglietto
document.getElementById('biglietto').innerHTML = 'il prezzo del tuo biglietto è di ' + costo.toFixed(2) + ' ' + 'Euro';
