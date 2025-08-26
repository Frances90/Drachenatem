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

var gesamtZutat = null;

for (let i = 0; i < zutaten.length; i++) {
    gesamtZutat = "Zutat: " + zutaten[i] + " - " + mengen[i] + einheiten[i];
    console.log(gesamtZutat);
}

var button_info = document.getElementById("icon_info");
var popup_background = document.getElementById("popup_background");
var button_close = document.getElementById("icon_close");
            
button_info.addEventListener("click", function() {
    popup_background.classList.toggle("visible");            
});
           
button_close.addEventListener("click", function() {
    popup_background.classList.toggle("visible");
});