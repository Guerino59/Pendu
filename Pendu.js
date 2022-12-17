"use strict";

// pour chaque lettre creer un span avec la lettre correspondante dedans

export default class Pendu {
  constructor() {
    this.buttons = document.querySelectorAll("button");
    this.buttons.forEach((b) => {
      b.addEventListener("click", () => {
        this.notLetterInWord(b);
        this.letterInWord(b);
        this.result();
        console.log(this.mot.textContent);
      });
    });
    this.nbLetter = document.querySelector(".nbLetter");
    this.essais = document.querySelector(".nbError");
    this.mot = document.querySelector(".mot");
    this.img = document.querySelector(".anim");
    this.words = [
      "pizza",
      "apple",
      "banana",
      "strawberry",
      "orange",
      "pineapple",
      "grapes",
    ];
    this.findingWord = "";
    this.randomWord();
    this.arrLetter = [];
    this.nbErr = 0;
    this.nbLetter.textContent = `Mot : ${this.findingWord.length} lettres`;
    this.push();
    this.create();
  }

  push() {
    for (let i = 0; i < this.findingWord.length; i++) {
      this.arrLetter.push(this.findingWord[i]);
    }
  }

  create() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.letter = document.createElement("span");
      this.letter.textContent = "-";
      this.mot.append(this.letter);
    }
  }
  randomWord() {
    {
      this.findingWord =
        this.words[Math.floor(Math.random() * this.words.length)];
    }
  }
  isStringOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

  revealFinal() {
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot = document.querySelectorAll(".mot span");
      this.smot[i].textContent = this.arrLetter[i];
    }
  }

  result() {
    this.essais.textContent = `${this.nbErr} erreurs`;
    if (this.isStringOnlyLetters(this.mot.textContent)) {
      this.essais.textContent = "YOU WIN";
      this.essais.style.color = "green";
      this.mot.style.animationName = "bordr";
    }
    if (this.nbErr > 7) {
      this.essais.textContent = "YOU LOSE";
      this.essais.style.color = "red";
      this.mot.style.border = "10px solid red";
      this.revealFinal();
      this.nbErr = 0;
    }
  }
  notLetterInWord(e) {
    this.selectedLetters = e.textContent;
    if (!this.arrLetter.includes(this.selectedLetters)) {
      e.style.pointerEvents = "none";
      e.style.backgroundColor = "rgba(204,29,29,0.5)";
      this.nbErr++;
      this.img.style.background = `url(./img-pendu/Le-Pendu${this.nbErr}.png)`;
      this.img.style.backgroundSize = "cover";
      this.essais.textContent = `${this.nbErr} erreurs`;
    }
  }
  letterInWord(e) {
    this.selectedLetters = e.textContent;
    for (let i = 0; i < this.arrLetter.length; i++) {
      this.smot = document.querySelectorAll(".mot span");
      if (this.selectedLetters === this.arrLetter[i]) {
        this.smot[i].textContent = this.selectedLetters;
        e.style.backgroundColor = "rgba(29,204,66,0.5)";
        e.style.pointerEvents = "none";
      }
    }
  }
}
