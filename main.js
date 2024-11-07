// Importer la fonction getHeure() qui se trouve dans le fichier generate.js
import getHeure from "./generate.js";

// On importe la variable nom qui est déclarée dans la module user.js
import {nom} from "./user.js";

// importer l'objet utilisateur
import {Utilisateur} from "./user.js";

let nomUtilisateur = document.querySelector("#nom");
nomUtilisateur.textContent = nom;

/* ==== Exercice ====
    --- dans le user.js ---

 1. Créer un objet utilisateur
    nom de l'utilisateur
    prénom de l'utilisateur
    village de l'utilisateur

    -- dans main.js ---
    2. importer l'objet utilisateur

    -- dans index.html --
    3. afficher dans un index.html : nom , prénom et village de l'utilisateur
*/

// Ici je vais afficher les objets de mon utilisateur
let elementspanNom = document.querySelector("#nomUtilisateur");
elementspanNom.textContent = Utilisateur.nom;

let elementspanPrenom = document.querySelector("#prenomUtilisateur");
elementspanPrenom.textContent = Utilisateur.prenom;

let elementspanVillage = document.querySelector("#villageUtilisateur");
elementspanVillage.textContent = Utilisateur.village;

/*const heureCourant = getHeure;
console.log(heureCourant.getHeure);*/

// document.querySelector("#heure").innerHTML = getHeure();

// document.body.innerHTML = heureCourant;