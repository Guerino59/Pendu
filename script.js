"use strict";

const a = document.querySelector(".a").addEventListener("click", () => {
  const la = "a";
  console.log(la);
});
const z = document.querySelector(".z").addEventListener("click", () => {
  const lz = "z";
  console.log(lz);
});
const e = document.querySelector(".e").addEventListener("click", () => {
  const le = "e";
  console.log(le);
});
const r = document.querySelector(".r").addEventListener("click", () => {
  const lr = "r";
  console.log(lr);
});
const t = document.querySelector(".t").addEventListener("click", () => {
  const lt = "t";
  console.log(lt);
});
const y = document.querySelector(".y").addEventListener("click", () => {
  const ly = "y";
  console.log(ly);
});
const u = document.querySelector(".u").addEventListener("click", () => {
  const lu = "u";
  console.log(lu);
});
const i = document.querySelector(".i").addEventListener("click", () => {
  const li = "i";
  console.log(li);
});
const o = document.querySelector(".o").addEventListener("click", () => {
  const lo = "o";
  console.log(lo);
});
const p = document.querySelector(".p").addEventListener("click", () => {
  const lp = "p";
  console.log(lp);
});
const q = document.querySelector(".q").addEventListener("click", () => {
  const lq = "q";
  console.log(lq);
});
const s = document.querySelector(".s").addEventListener("click", () => {
  const ls = "s";
  console.log(ls);
});
const d = document.querySelector(".d").addEventListener("click", () => {
  const ld = "d";
  console.log(ld);
});
const f = document.querySelector(".f").addEventListener("click", () => {
  const lf = "f";
  console.log(lf);
});
const g = document.querySelector(".g").addEventListener("click", () => {
  const lg = "g";
  console.log(lg);
});
const h = document.querySelector(".h").addEventListener("click", () => {
  const lh = "h";
  console.log(lh);
});
const j = document.querySelector(".j").addEventListener("click", () => {
  const lj = "j";
  console.log(lj);
});
const k = document.querySelector(".k").addEventListener("click", () => {
  const lk = "k";
  console.log(lk);
});
const l = document.querySelector(".l").addEventListener("click", () => {
  const ll = "l";
  console.log(ll);
});
const m = document.querySelector(".m").addEventListener("click", () => {
  const lm = "m";
  console.log(lm);
});
const w = document.querySelector(".w").addEventListener("click", () => {
  const lw = "w";
  console.log(lw);
});
const x = document.querySelector(".x").addEventListener("click", () => {
  const lx = "x";
  console.log(lx);
});
const c = document.querySelector(".c").addEventListener("click", () => {
  const lc = "c";
  console.log(lc);
});
const v = document.querySelector(".v").addEventListener("click", () => {
  const lv = "v";
  console.log(lv);
});
const b = document.querySelector(".b").addEventListener("click", () => {
  const lb = "b";
  console.log(lb);
});
const n = document.querySelector(".n").addEventListener("click", () => {
  const ln = "n";
  console.log(ln);
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
