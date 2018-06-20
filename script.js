var eta = prompt("Quanti anni hai?");
var km = prompt("Quanti km devi fare?");

var totale = km * 0.21;
var sconto = 0;

if (eta < 18){
  sconto = totale / 100 * 20;
}

if (eta > 65){
  sconto = totale / 100 * 40;
}

document.write(totale-sconto);
