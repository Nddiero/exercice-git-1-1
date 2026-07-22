/**************************************************************
 * Nom .......... : script.js
 * Rôle ......... : Déclenche une animation d’apparition progressive 
 *                  (fade-in) sur les éléments HTML avec la classe .fade-in 
 *                  lorsqu’ils deviennent visibles dans la fenêtre du navigateur.
 * Auteur ....... : Nourreddine Asroun
 * Version ...... : V1.0 du 11/07/2025
 * Licence ...... : Réalisé dans le cadre du cours Informatique Fondamentale Partie 2
 *                  à l’Université Paris 8 – Étudiant n° 24000377
 * Technologies . : JavaScript, HTML, CSS (IntersectionObserver API)
 * Compilation .. : Aucun compilateur – interprété côté client par le navigateur
 * Usage ........ : Ce fichier est chargé dans le HTML principal (portfolio),
 *                  il active les animations des sections à leur apparition à l’écran.
 **************************************************************/



// Attente de charger le script après le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {

  // Sélection des éléments avec la classe fade-in
  const faders = document.querySelectorAll(".fade-in");

  //permet de detecter quand un élement est visible dans la fenêtre
  // IntersectionObserver observe les éléments et déclenche une fonction quand ils sont visibles
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      
    // vérifie chaque entrée pour voir si elle est visible
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {

        //Si élement visible, ajoute la classe "visible"
        // et arrête de l'observer pour éviter de retravailler les éléments déjà visibles
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // desactivé car les éléments déjà visibles
      }
    });
  }, {
    threshold: 0.1 // déclenche l'animation quand lélement est visible à 10% 
  });

  // pour appliquer l'effet de fade-in quand il devient visible
  // On observe chaque élément fade-in
  faders.forEach(function (el) {
    appearOnScroll.observe(el);
  });
});





  //attend le chargement du DOM avant d'ajouter les écouteurs d'événements
  document.addEventListener("DOMContentLoaded", function () {
    // on selectionne tous les éléments avec la classe fade-in
    const faders = document.querySelectorAll(".fade-in");
    // IntersectionObserver pour détecter quand les éléments sont visibles dans la fenêtre
    // si l'élément est visible, on ajoute la classe "visible" pour déclencher l'animation
    // et on arrête de l'observer pour éviter de retravailler les éléments déjà
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    //on demande à l'observatuer de surveiller chaque élement fade-in
    faders.forEach(el => appearOnScroll.observe(el));

    // clcique pouir changer la couleur des éléments cliquables
    const cliquables = document.querySelectorAll(".cliquable");
    cliquables.forEach(el => {

      // ajoute un écouteur d'événement pour le clic
      el.addEventListener("click", function () {
        // bascule la classe "clicked" pour changer la couleur
        // et appliquer le style défini dans le CSS
        el.classList.toggle("clicked");
      });
    });
  });

