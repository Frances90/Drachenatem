var portionsmenge = 4;
/* var portionsmenge = prompt("Anzahl Portionen:"); */
var zutatenmenge = 200;
var berechneteMenge = zutatenmenge * portionsmenge;

/* alert("Portionsmenge: " + portionsmenge); */

if (portionsmenge <= 0){
    alert("Bitte geben Sie eine Portionsmenge an die Größer als 0 ist");
}else{
    console.log("Portionsmenge: " + portionsmenge);
    console.log("Berechnete Portionsmenge: " + berechneteMenge + "g");
}

var zutaten = ['Huhn', 'Currypulver', 'Kokosmilch', 'Ingwer', 'Zwiebel', 'Reis', 'Zitronensaft', 'Chili'];
var mengen = [1, 10, 250, 2, 1, 200, 20, 0.5];
var einheiten = ['Stk.', 'g', 'ml', 'ml', 'Stk.', 'g', 'ml', 'g'];

console.log("Zutat:" + zutaten[0] + " Menge:" + mengen[0] + einheiten[0]);

var gesamtZutat = null;

for (let i = 0; i < zutaten.length; i++) {
    gesamtZutat = zutaten[i] + " " + mengen[i] + einheiten[i];
    console.log(gesamtZutat);
}
