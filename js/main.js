/* Variablen vorbereiten */

var inputfield = document.getElementById("input_portionen_anzahl");
var einzelneMengeTabel = document.getElementsByClassName("td_menge");
var zutatenTabel = document.getElementsByClassName("td_zutaten");
/* JSON eingebunden */
const jsonZutaten = document.getElementById("zutaten_json"); 
const zutatenGruppe = jsonZutaten.textContent;
const parsedZutaten = JSON.parse(zutatenGruppe);
var portionsmenge = 1;


/* Lösung Aufgabe Drachenatem - Rezept einfügen:
 */var zutaten = ['Huhn', 'Currypulver', 'Kokosmilch', 'Ingwer', 'Zwiebel', 'Reis', 'Zitronensaft', 'Chili'];
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

        let berechneteMengen = [];

        for(let j = 0; j < parsedZutaten.zutat.length; j++){
            berechneteMengen.push( parsedZutaten.zutat[j].menge * portionsmenge);
            zutatenTabel[j].innerHTML = parsedZutaten.zutat[j].zutatenart;
            einzelneMengeTabel[j].innerHTML = berechneteMengen[j] + parsedZutaten.zutat[j].einheiten;
            console.log("Zutat: " + parsedZutaten.zutat[j].zutatenart + " - " + berechneteMengen[j] + parsedZutaten.zutat[j].einheiten);
           /* 
            Lösung Aufgabe Drachenatem - Rezept einfügen:
            berechneteMengen.push(mengen[j] * portionsmenge);
            gesamtZutat = "Zutat: " + zutaten[j] + " - " + berechneteMengen[j] + einheiten[j];
            zutatenTabel[j].innerHTML = zutaten[j];
            einzelneMengeTabel[j].innerHTML = berechneteMengen[j] + einheiten[j];          
            console.log("Einzelne Zutat " + gesamtZutat); 
            */
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