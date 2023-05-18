import {open,} from 'node:fs/promises';

//Trouver l'expression régulière qui fait le traitement suivant pour chaque ligne :

// Exemple :
// 0.0.0.0 0001-cab8-4c8c-43de.reporo.net devient : "||reporo.net/"
// 0.0.0.0 0o4vyd7cqp.mentalist.kameleoon.com devient "||mentalist.kameleoon.com/"
// 0.0.0.0 1220047983.world devient "||1220047983.world/"

function filtrer_ligne_domaine(ligne) {
    // Etape 1 : Supprimer la suite des "0.0.0.0 ".
    const regex_suite_0 = /^0\.0\.0\.0 /;
    const ligneNettoyee = ligne.replace(regex_suite_0, "");

    // Etape 2 : Chercher le nombre de points.
    let nombrePoint = 0;
    const regex_point = /[.]/g;
    const tab_toutes_occurences_point = ligneNettoyee.match(regex_point);
    if (tab_toutes_occurences_point !== null) {
        nombrePoint = tab_toutes_occurences_point.length;
    }

    // Etape 3 : //Si le nombre est superieur à 1 alors
    //Remplacer le début du texte à partir du premier caractère jusqu'au premier point inclus par les caractères : "||.
    let ligneTransformee;

    if (nombrePoint > 1) {

        // Renvoie 0, la position de la première occurence de zéro
        const index_firstPoint = ligneNettoyee.search(regex_point) + 1;
        ligneTransformee = "||" + ligneNettoyee.slice(index_firstPoint);
    } else {
        // Sinon ajouter au début du texte les caractères "||.
        ligneTransformee = "||" + ligneNettoyee;
    }

    // Etape 4 : Ajouter à la fin du texte les caractères : /".
    ligneTransformee += "/";

    return ligneTransformee;
}

// La partie où une fonction ouvre le fichier txt afin de le lire ligne par ligne :

const fichier_txt = await open('adservers.txt');
const tab_blockListe = [];

for await (const ligne of fichier_txt.readLines()) {
    tab_blockListe.push(ligne);
}

// Appel de la fonction :

const liste_domaine_filtree = tab_blockListe.map(filtrer_ligne_domaine);
console.log(liste_domaine_filtree);

const tab_Rules = [];

for (let i = 0; i < liste_domaine_filtree; i++) {
    let valeurTab = liste_domaine_filtree[i];
    tab_Rules.push(creerRule_depuis_domaine(liste_domaine_filtree[i], i + 1));
}

console.log(tab_Rules);


function creerRule_depuis_domaine(domaine, id) {
    return `{"id":${id},"priority": 1,"action":
    {"type": "block"},"condition":
    {"urlFilter": ${domaine},"resourceTypes": ["script"]}}`;
}


