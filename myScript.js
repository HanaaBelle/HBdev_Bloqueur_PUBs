
/*// 1 Sélectionner les éléments du DOM:

// Sélectionner un élément par son ID
const div = document.getElementById("monDiv");

// Sélectionner un élément par sa classe
const titres = document.getElementsByClassName("titre");

// Sélectionner tous les éléments par leur balise
const paragraphes = document.getElementsByTagName("p");

// Sélectionner un élément par son sélecteur CSS
const paragraphe1 = document.querySelector("#monDiv .paragraphe:first-child");

// Sélectionner tous les éléments par leur sélecteur CSS
const tousLesParagraphes = document.querySelectorAll("#monDiv .paragraphe");

//2 Manipuler les éléments sélectionnés
//div.style.backgroundColor = "yellow";

for (let i = 0; i < titres.length; i++) {
    titres[i].style.color = "red";
}

for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.fontSize = "18px";
}

paragraphe1.style.fontWeight = "bold";

tousLesParagraphes.forEach(function (paragraphe) {
    paragraphe.style.border = "1px solid black";
});*/

//*** Liste des balises HTML valides :
const liste_all_balises_html_valides = ['A', 'ABBR', 'ACRONYM', 'ADDRESS', 'APPLET', 'AREA', 'ARTICLE',
    'ASIDE', 'AUDIO', 'B', 'BASE', 'BASEFONT', 'BDO', 'BIG', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS',
    'CAPTION', 'CENTER', 'CITE', 'CODE', 'COL', 'COLGROUP', 'DATA', 'DATALIST', 'DD', 'DEL', 'DETAILS', 'DFN',
    'DIALOG', 'DIR', 'DIV', 'DL', 'DT', 'EM', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FONT', 'FOOTER',
    'FORM', 'FRAME', 'FRAMESET', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEAD', 'HEADER', 'HR', 'HTML', 'I',
    'IFRAME', 'IMG', 'INPUT', 'INS', 'KBD', 'LABEL', 'LEGEND', 'LI', 'LINK', 'MAIN', 'MAP', 'MARK', 'META',
    'METER', 'NAV', 'NOFRAMES', 'NOSCRIPT', 'OBJECT', 'OL', 'OPTGROUP', 'OPTION', 'OUTPUT', 'P', 'PARAM',
    'PICTURE', 'PRE', 'PROGRESS', 'Q', 'RP', 'RT', 'RUBY', 'S', 'SAMP', 'SCRIPT', 'SECTION', 'SELECT', 'SMALL',
    'SOURCE', 'SPAN', 'STRIKE', 'STRONG', 'STYLE', 'SUB', 'SUMMARY', 'SUP', 'SVG', 'TABLE', 'TBODY', 'TD',
    'TEMPLATE', 'TEXTAREA', 'TFOOT', 'TH', 'THEAD', 'TIME', 'TITLE', 'TR', 'TRACK', 'TT', 'U', 'UL', 'VAR',
    'VIDEO', 'WBR'];


//1 Fonction qui récupère tous les éléments HTML (balises) de la page et les renvoie dans un tableau :
function recuperer_liste_balises() {

    // Variable qui va contenir tous les éléments HTML de la page :
    const all_elements = document.getElementsByTagName('*');
    console.log("Tous les éléments HTML de la page : " + typeof (all_elements) + " " + all_elements);

    // Initialiser un tableau pour stocker les noms des balises :
    const tab_noms_balises = [];

    // Boucler sur tous les éléments de la page Html et stocker leur nom de balise dans le tableau :
    for (let i = 0; i < all_elements.length; i++) {
        const nomBalise = all_elements[i].tagName;
        if (!tab_noms_balises.includes(nomBalise)) {
            tab_noms_balises.push(nomBalise);
        }
    }
    console.log("La liste des balises : " + typeof (tab_noms_balises) + " " + tab_noms_balises)
    return tab_noms_balises;
}

//2 Fonction qui récupère que les éléments HTML (balises) valides de la page et les renvoie dans un tableau :
function recuperer_liste_balises_valides() {

    const all_elements_valides = document.querySelectorAll('*');
    console.log("Tous les éléments HTML valides de la page : " + typeof (all_elements_valides) + " " + all_elements_valides);

    // Initialiser un tableau pour stocker les noms des balises valides :
    const tab_noms_balises_valides = [];

    // Boucler sur tous les éléments valides de la page Html et stocker leur nom de balise dans le tableau
    for (let i = 0; i < all_elements_valides.length; i++) {
        const nom_balise_valide = all_elements_valides[i].tagName;
        if (liste_all_balises_html_valides.includes(nom_balise_valide)
            && !tab_noms_balises_valides.includes(nom_balise_valide)) {
            tab_noms_balises_valides.push(nom_balise_valide);
        }
    }
    return tab_noms_balises_valides;
}

//3 Fonction qui récupère tous les noms des classes des éléments (balises) de la page Html :
function recuperer_listes_className(liste_balises) {
    console.log("Fonction 3", liste_balises)
    // Initialiser un tableau pour stocker les noms des balises :
    const collection_noms_classes = [];

    // Boucler sur la liste des éléments HTML de la page :
    for (let i = 0; i < liste_balises.length; i++) {
        const liste_classes = liste_balises[i].classList;
        if (!collection_noms_classes.includes(liste_classes)) {
            collection_noms_classes.push(liste_classes);
        }
    }
    console.log("Collection des noms des classes : " + typeof(collection_noms_classes) + " " + collection_noms_classes);
    return collection_noms_classes;
}

//3 Fonction qui retrouve toutes les balises qui contiennent des pubs et les supprime
function retrouve_supprime_balises_pubs() {
    // Variable qui va contenir tous les iframe dans le HTML de la page :
    const balise_iframe = document.getElementsByTagName("iframe");
    console.log("nombre des iframe", balise_iframe.length);
    // Parcourir tous les éléments enfants de div pour trouver son enfant iframe :
    for (let i = 0; i < balise_iframe.length; i++) {
        console.log("iframe", balise_iframe[i]);

        //console.log("parent du iframe", balise_iframe[i].parentElement);
        // Supprimer tous les div parents des iframe :
        //balise_iframe[i].parentElement.removeChild(balise_iframe[i]);
        balise_iframe[i].remove();
    }
}

/************************************************************************************************************/

//1 Afficher tous les noms de balises récupérés :
const liste_balises = recuperer_liste_balises();
console.log("/Les noms des balises récupérées : " + typeof (liste_balises) + " " + liste_balises);

//2 Afficher tous les noms de balises valides récupérés :
const liste_balises_valides = recuperer_liste_balises_valides();
console.log("Les noms de balises valides récupérées : " + typeof (liste_balises_valides) + " " + liste_balises_valides);


//3 Afficher tous les noms de classes des balises valides récupérés :
const collection_noms_classes = recuperer_listes_className(liste_balises);
console.log("Les noms des classes des balises récupérées : " + typeof(collection_noms_classes) + " " + collection_noms_classes);


//4 Retrouver toutes les balises iframe qui contiennent des pubs et les supprimer
setTimeout(retrouve_supprime_balises_pubs, 5000);

/*
//
// Etape 1 :
// Supprimer la suite des "0.0.0.0 ".
//
// Etape 2 :
// Chercher le nombre de point.
//
// Etape 3 :
// Si le nombre est superieur à 1 alors
// Rempalcer le début du texte à partir du premier caractère jusqu'au premier point inclus par les caractères entre les trois étoiles ***"||***.
// Sinon ajouter au début du texte les caractères entre les trois étoiles "||.
//
// Etape 4 :
// Ajouter à la fin du texte les caractères entre les trois étoiles /".
//

//!*function switchDisplay() {


    /!* Variable bannerGif qui sélectionne l'élément du <iframe> sur le site press-citron :
    <iframe id="google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0"
            name="google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0" title="3rd party ad content" width="970"
            height="250" scrolling="no" marginWidth="0" marginHeight="0" frameBorder="0" role="region"
            aria-label="Advertisement" tabIndex="0" style="border: 0px; vertical-align: bottom;"
            data-load-complete="true" data-google-container-id="1">
    </iframe>
    *!/
    const bannerGif = document.getElementById("google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0")
    const balise_div = document.getElementsByTagName("div");

    const balise_iframe = balise_div[0].getElementsByTagName("iframe");

    // Remplacer bannerGif.style.backgroundImage par l'URL de l'image sélectionnée :

    balise_iframe[0].src = "https://png.pngtree.com/background/20210709/original/pngtree-red-festive-irregular-simple-background-material-picture-image_915588.jpg";
    console.log(balise_div);
    console.log(balise_iframe);
}

document.addEventListener("click", switchDisplay)

*!//


/!*!// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau :
const elements = document.getElementsByTagName("*");

Créer l'élément "img" et l'affecter à la constante "bannerJpeg" afin de contenir la nouvelle bannière qui va
contenir l'image ajoutée dans le dossier "imgs" :
const bannerJpeg = document.createElement('img');

Variable pour side-section sur W3School
const sideSection = document.getElementsByClassName("sidesection");

console.log(sideSection)

"background": {
        "service-worker": ["background.js"]
    },

       "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": ["content-script.js"]
        }
    ],

*!//
// (ligneNettoyee.match(/\./g) || []).length;
//ligneTransformee = ligneNettoyee.replace(/^[^.]+\./, "||");
 */






