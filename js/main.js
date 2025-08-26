/* Variablen vorbereiten */

var inputfield = document.getElementById("input_portionen_anzahl");
var einzelneMengeTabel = document.getElementsByClassName("td_menge");
var zutatenTabel = document.getElementsByClassName("td_zutaten");
var portionsmenge = 1;
var zutatenmenge = 200;
var berechneteMenge = zutatenmenge * portionsmenge;
var zutaten = ['Huhn', 'Currypulver', 'Kokosmilch', 'Ingwer', 'Zwiebel', 'Reis', 'Zitronensaft', 'Chili'];
var mengen = [1, 10, 250, 2, 1, 200, 20, 0.5];
var einheiten = ['Stk.', 'g', 'ml', 'ml', 'Stk.', 'g', 'ml', 'g'];
var gesamtZutat = null;

var button_info = document.getElementById("icon_info");
var popup_background = document.getElementById("popup_background");
var button_close = document.getElementById("icon_close");

/* Berechnung der Mengen anhand der Portionenanzahl */
inputfield.addEventListener("change", function(){
    portionsmenge = inputfield.value;
    
    if (portionsmenge <= 0){
        alert("Bitte geben Sie eine Portionsmenge an die Größer als 0 ist");
    }else{
        console.log("Portionsmenge: " + portionsmenge);

        for(let j = 0; j < mengen.length; j++){
            mengen[j] = mengen[j] * portionsmenge;
            gesamtZutat = "Zutat: " + zutaten[j] + " - " + mengen[j] + einheiten[j];
            zutatenTabel[j].innerHTML = zutaten[j];
            einzelneMengeTabel[j].innerHTML = mengen[j] + einheiten[j];          
            console.log(gesamtZutat);
        }
    }
} );


/* Popup für die Allergene */
          
button_info.addEventListener("click", function() {
    popup_background.classList.toggle("visible");            
});
           
button_close.addEventListener("click", function() {
    popup_background.classList.toggle("visible");
});