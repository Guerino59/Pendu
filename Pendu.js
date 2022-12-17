"use strict";

// pour chaque lettre creer un span avec la lettre correspondante dedans

export default class Pendu {
  constructor() {
    this.buttons = document.querySelectorAll("button");
    this.buttons.forEach((b) => {
      b.addEventListener("click", () => {
        this.jeu();
        this.letterInWord(b);
      });
    });
    this.nbLetter = document.querySelector(".nbLetter");
    this.essais = document.querySelector(".nbError");
    this.mot = document.querySelector(".mot");
    this.findingWord = "avachi";
    this.arrLetter = [];
    this.falseLetter = [];
    this.nbErr = 0;
    this.nbLetter.textContent = `Le mot contient ${this.findingWord.length} lettres`;
    this.push();
    this.create();
    console.log(this.arrLetter);
    this.jeu();
  }
  push() {
    for (this.i = 0; this.i < this.findingWord.length; this.i++) {
      this.arrLetter.push(this.findingWord[this.i]);
    }
  }
  create() {
    for (this.i = 0; this.i < this.arrLetter.length; this.i++) {
      this.letter = document.createElement("span");
      this.letter.textContent = "-";
      this.mot.append(this.letter);
    }
  }
  revealFinal() {
    for (this.i = 0; this.i < this.arrLetter.length; this.i++) {
      this.smot = document.querySelectorAll(".mot span");
      this.smot[this.i].textContent = this.arrLetter[this.i];
      console.log(this.smot);
    }
  }
  jeu() {
    this.essais.textContent = `${this.nbErr} erreurs`;
    this.nbErr++;
    if (this.nbErr > 9) {
      prompt("PERDU");
      this.revealFinal();
      this.nbErr = 0;
    }
  }
  reveaLetter(e) {
    this.smot = e.textContent;
  }
  letterInWord(e) {
    this.selectedLetters = e.textContent;
    for (this.i = 0; this.i < this.arrLetter.length; this.i++) {
      this.smot = document.querySelectorAll(".mot span");
      if (this.selectedLetters === this.arrLetter[this.i]) {
        this.smot[this.i].textContent = this.selectedLetters;
      }
    }
  }
}
