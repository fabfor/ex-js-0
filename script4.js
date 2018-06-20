var frutti = ["Pesca","Pera","Melone"];

var frutto_utente = prompt("Che frutto vuoi?");

frutti.push(frutto_utente);

document.getElementById('frutti').innerHTML = frutti;
