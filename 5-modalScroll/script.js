console.log('connecté !');


// Je sélectionne et je stock
const modal = document.querySelector('.modal-container');
console.log(modal);

const btn = document.querySelector('.btn-success');
console.log(btn);

const code = document.querySelector('.code');
console.log(code);

const icone = document.querySelector('.fa-times');
console.log(icone);

// Je soumets

window.addEventListener('scroll', displayModal)

function displayModal(){
  console.log('défilement dtecté !');

  let hauteur = this.document.documentElement.scrollTop;
  console.log(hauteur, 'nb de px depuis le haut de la page');

  if(hauteur > 400){
    console.log('Affichage de la modal !');
    modal.style.display = "flex";
  };
};

btn.addEventListener('click', function() {
  console.log('bouton cliqué');
  code.style.display = 'block';
  btn.style.dislay = 'none';
});

icone.addEventListener('click', function(){
  console.log('icone cliquée');
  modal.style.display = 'none';
  window.removeEventListener('scroll', displayModal);
});
