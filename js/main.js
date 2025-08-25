var portionsmenge = prompt("Anzahl Portionen:");
var zutatenmenge = 200;
var berechneteMenge = zutatenmenge * portionsmenge;

/* alert("Portionsmenge: " + portionsmenge); */

if (portionsmenge <= 0){
    alert("Bitte geben Sie eine Portionsmenge an die Größer als 0 ist");
}else{
    console.log("Portionsmenge: " + portionsmenge);
    console.log("Berechnete Portionsmenge: " + berechneteMenge + "g");
}

