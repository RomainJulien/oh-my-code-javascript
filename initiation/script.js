console.log('connecté !');

let titre = document.getElementById('titre');
console.log(titre);
titre.style.color = "green" ;

let score = 0 ;
console.log(score, "inititalisation");

score = score + 1;
console.log(score, "après incrémentation");

const mot1 = "Hello";
const mot2 = "World!";
const phrase = mot1 + " " + mot2;
console.log(phrase);


// je sélectionne
// ici votre code

// je stocke
// ici votre code

// je soumets l'élément à une action
// ici votre code


// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red');
//console.log(btnRed, "bouton rouge");
let compteur = 0;
console.log(compteur, "initialisation du compteur");

const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue);

const btnRejouer = document.getElementById("rejouer");
btnRejouer.style.display = "none";


// je soumets l'élément à une action

btnRed.addEventListener('click', function(){
   add();
});

btnBlue.addEventListener('click', function(){
  add();
});

btnRejouer.addEventListener("click", function() {
  window.location.reload();
});

function add(){
  compteur = compteur +1;
  console.log(compteur, "compteur après incrémentation");
  titre.innerText = compteur;
}

setTimeout(function(){
  btnRed.remove();
  btnBlue.remove();
  btnRejouer.style.display = "block";
}, 10000);
