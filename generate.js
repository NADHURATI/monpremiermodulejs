function getHeure(){
    let date = new Date();
// Récupère l'heure et la stocke dans la variable "heure"
    let heure = date.getHours();
// Récupère les minutes et la stocke dans la variable "minutes"
    let minutes = date.getMinutes();
// Récupère les secondes et la stocke dans la variable "secondes"
    let secondes = date.getSeconds();
    console.log(heure);
    

};

// exporter la fonction getHeure() pour la rendre accessible depuis un autre fichier
export default {
    getHeure
};