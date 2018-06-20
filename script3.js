var parola1 = prompt("inserire la prima parola");
var parola2 = prompt("inserire la Seconda parola");
var parola1_lunghezza = parola1.length;
var parola2_lunghezza = parola2.length;

if (parola1.length > parola2.length){
  alert("parola 1 è piu lunga");
}
else if (parola1.length < parola2.length){
  alert("parola 2 è piu lunga");
}
else {
  alert("parole uguali");
}
