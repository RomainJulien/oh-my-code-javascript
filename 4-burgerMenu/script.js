console.log('connecté !');
// selectionner et stocker
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
// la DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

// Je soumets
icone.addEventListener('click', function (){
  console.log('icone cliquée');
  modal.classList.toggle('change-modal');
  icone.classList.toggle('fa-times');
});
