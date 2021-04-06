// La propriété onkeyup renvoie la façon de gérer l'évènement keyup (qui se déclenche lorsque qu'une touche
// du clavier qui a été pressée est relâchée) pour l'élément courant


// Référence au nom d'une fonction (sans parenthèses ni arguments) et non un appel de cette fonction
// Ici, la façon de gérer le keyup est displayAlert correspondant à l'id name du DOM :

/*document.getElementById("inputName").onkeyup=displayAlert;*/

// Fonction préalablement définie qui affiche une alerte à la relâche d'une touche en ayant récupérer la valeur, 
// ici pour l'input :

/*function displayAlert(){
    let displayCharacters=document.getElementById("inputName").value;
    alert(displayCharacters);
}*/


// Solution en ajoutant onkeyup="displayCharacters()" dans les attributs de l'input :

//function displayCharacters(){
//   let displayAlert=document.getElementById("inputName").value;
//   alert(displayAlert);
//}


// Syntaxe : 
// element.event = function (){ } --> idInput.onblur = function lostFocus() {alert("blablabla");}

document.getElementById("inputName").onkeyup= function displayAlert(){
    let displayCharacters=document.getElementById("inputName").value;
    alert(displayCharacters);
}