var scelta = prompt("Pari o dispari?");

var numero_cpu = Math.floor(Math.random() * 9);
var pod_cpu;
console.log("IL PC ha scelto " + numero_cpu);

if  ( (numero_cpu % 2) == 1){
  pod_cpu = "dispari";
}
else {
  pod_cpu = "pari";
}

if (scelta == pod_cpu){
  alert("hai vinto");
}
else {
  alert("hai perso");
}
