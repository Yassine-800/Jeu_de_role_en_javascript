"use strict";

let armes = [" de bois", "de fer", "magique"];

let armures = [" en bois", " en fer", "magique"];

const ARME_MAITRE = 6;
const ARMURE_MAITRE = 4;

while (armes != "bois" && armes != "fer" && armes != "magique") {
  armes = prompt("Choisis ton arme aventurier (bois, fer, magique)");
  armes = armes.toLowerCase();
}

while (armures != "bois" && armures != "fer" && armures != "magique") {
  armures = prompt("Choisis ton armure aventurier (bois, fer, magique)");
  armures = armures.toLowerCase();
}

let degats = 0;

if (armes === "bois") {
  degats = 2;
  console.log(`Tu as choisis l'épée ${armes} !`);
} else if (armes == "fer") {
  degats = 5;
  console.log(`Tu as choisis l'épée ${armes} !`);
} else if (armes == "magique") {
  degats = 10;
  console.log(`Tu as choisis l'épée ${armes} !`);
}

let defense = 0;

if (armures === "bois") {
  defense = 1;
  console.log(`Tu as choisis l'armure ${armures} !`);
} else if (armures === "fer") {
  defense = 3;
  console.log(`Tu as choisis l'armure ${armures} !`);
} else if (armures === "magique") {
  defense = 5;
  console.log(`Tu as choisis l'armure ${armures} !`);
}

console.log("Le combat commence bonne chance !");

let hpJoueur = 100;
let hpMaitre = 150;
let i = 1;
while (hpJoueur >= 0 && hpMaitre >= 0) {
  console.log("Tour n°" + i);
  i++;
  console.log("Le maitre attaque !");

  hpJoueur = hpJoueur - ARME_MAITRE + defense;

  console.log(`Aie, il te reste ${hpJoueur} hp`);
  console.log(`A ton tour ne le loupe pas !`);
  hpMaitre = hpMaitre - degats + ARMURE_MAITRE;
  console.log(`Tu l'as eu bien joué, il lui reste ${hpMaitre} hp`);
  if (hpJoueur <= 0) {
    console.log("Tu as perdu aventurier !");
  } else if (hpMaitre <= 0) {
    console.log("Tu as vaincu le Maitre bien joué !");
  }
}
