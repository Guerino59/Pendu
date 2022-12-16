"use strict";

const buttons = document.querySelectorAll("button");
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    jeu();
  });
});
document.addEventListener("keydown", (e) => {
  jeu();
});
const nbLetter = document.querySelector(".nbLetter");
const essais = document.querySelector(".nbError");
const mot = document.querySelector(".mot");
const findingWord = "marrons";

let nbTry = 0;

nbLetter.textContent = `Le mot contient ${findingWord.length} lettres`;
console.log(findingWord.length);
// pour chaque lettre creer un span avec la lettre correspondante dedans

function create() {
  for (let i = 0; i < findingWord.length; i++) {
    const letter = document.createElement("span");
    letter.textContent = findingWord.charAt(i);
    letter.classList.add(`c${findingWord.charAt(i)}`);
    mot.append(letter);
  }
}
function reveal() {
  const smot = document.querySelectorAll(".mot span");
  smot.forEach((s) => {
    s.style.color = "black";
  });
}
function jeu() {
  nbTry++;
  essais.textContent = `${nbTry} erreurs`;
  if (nbTry > 9) {
    prompt("PERDU");
    reveal();
    nbTry = 0;
  }
}
// function letterInWord(e){
//     const selectedLetters = e.target.textContent;
//     if(findingWord.includes(selectedLetters))
// }
create();
