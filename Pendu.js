"use strict";

// pour chaque lettre creer un span avec la lettre correspondante dedans

export default class Pendu {
  constructor() {
    // selection de tous les boutons
    this.buttons = document.querySelectorAll("button");
    // boucle pour recuperer le contenu de chaque boutons
    this.buttons.forEach((b) => {
      b.addEventListener("click", () => {
        this.letterInWord(b);
        this.result();
      });
    });
    // fonction reset
    this.restart = document.querySelector('.restart');
    this.restart.addEventListener('click', this.reset.bind(this));
    // selction de mes elements html
    this.nbLetter = document.querySelector(".nbLetter");
    this.essais = document.querySelector(".nbError");
    this.mot = document.querySelector(".mot");
    this.img = document.querySelector(".anim");
    this.smot = document.querySelectorAll(".mot span");
    //Fetch
    this.url = "./mots.json"
    fetch(this.url).then(this.haFetch.bind(this));
    // variable mot à trouver
    this.findingWord = "";
  }
  //Fetch prenant un mot random dans le fichier ./mot.json
  haFetch(responseText)
  {
    if(responseText.ok)
    {
       responseText.json()
            .then(this.randomWord.bind(this))
            .catch(error=>console.log(error))
    }
    else{
        console.log(responseText.statusText);
    }
 }
 //fonction permettant d'ajouter les lettres de mon mot dans un tableau "arrLetter"
  push() {
    for (let i = 0; i < this.findingWord.length; i++) {
      this.arrLetter.push(this.findingWord[i]);
    }
  }
// fonction permettant de creer autant de span que de lettre presente dans mon tableau et les remplaçés par des "-"
  create() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.letter = document.createElement("span");
      this.letter.textContent = "-";
      this.mot.append(this.letter);
    }
  }
  // fonction permettant de choisir un mot aleatoirement et declaration de variable + appel des deux fonctions precedentes
  randomWord(data) {
    {
      console.log(data);
      
      this.findingWord =
        data[Math.floor(Math.random() * data.length)];
        this.arrLetter = [];
        this.nbErr = 0;
        this.nbLetter.textContent = `Mot : ${this.findingWord.length} lettres`;
        this.push();
        this.create();
        
    }
  }
  // verifie a chaque fois qu'un boutton est appuyé si le contenu de mon mot est composé uniquement de lettre
  isStringOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
// fonction permettant de reveler l'entiereté du mot si on perd
  revealFinal() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot[i].textContent = this.arrLetter[i];
    }
  }
// fonction permettant de verifier si on a gagné ou perdu
  result() {
    this.essais.textContent = `${this.nbErr} erreurs`;
    if (this.isStringOnlyLetters(this.mot.textContent)) {
      this.essais.textContent = "YOU WIN";
      this.essais.style.color = "green";
      this.mot.style.animationName = "bordr";
      this.restart.style.top = "53%"
      for(let i=0; i < this.buttons.length; i++)
    {
    this.buttons[i].style.backgroundColor = "";
    this.buttons[i].style.pointerEvents = "";
    }
      this.nbErr = 0;
      console.log(this.nbErr);
    }
    if (this.nbErr > 7) {
      this.essais.textContent = "YOU LOSE";
      this.essais.style.color = "red";
      this.mot.style.border = "10px solid red";
      this.revealFinal();
      this.restart.style.top = "53%"
      for(let i=0; i < this.buttons.length; i++)
    {
    this.buttons[i].style.backgroundColor = "";
    this.buttons[i].style.pointerEvents = "";
    }
      this.nbErr = 0;
    }
  }
  //fonction se declenchant au clic sur un de mes boutons permettant de verifier si la lettre appuyé est presente ou non dans mon tableau
  letterInWord(e) {
    this.selectedLetters = e.textContent;
    if (!this.arrLetter.includes(this.selectedLetters)) {
      e.style.pointerEvents = "none";
      e.style.backgroundColor = "rgba(204,29,29,0.5)";
      this.nbErr++;
      this.img.style.background = `url(./img-pendu/Le-Pendu${this.nbErr}.png)`;
      this.img.style.backgroundSize = "cover";
      this.essais.textContent = `${this.nbErr} erreurs`;
    }
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot = document.querySelectorAll(".mot span");
      if (this.selectedLetters === this.arrLetter[i]) {
        this.smot[i].textContent = this.selectedLetters;
        e.style.backgroundColor = "rgba(29,204,66,0.5)";
        e.style.pointerEvents = "none";
      }
    }
  }
  // Fonction permettant de reset le jeu
  reset()
  {
    this.findingWord = "";
    this.arrLetter = [];
    this.nbErr = 0;
    this.essais.textContent = "";
    this.essais.style.color = "";
    this.mot.style.animationName = "";
    this.mot.style.border = "";
    this.img.style.background = `url(./img-pendu/Le-Pendu0.png)`;
    this.img.style.backgroundSize = "";
    this.mot.textContent = "";
    this.restart.style.top = "-50%"
    fetch(this.url).then(this.haFetch.bind(this));
    this.push();
    this.create();
    this.nbLetter.textContent = `Mot : ${this.findingWord.length} lettres`;
  }
}
