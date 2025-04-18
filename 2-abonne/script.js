console.log('connecté !');

// je selectionne et je stocke
const icone = document.querySelector('i');
console.log(icone);

// je soumets à l'action
icone.addEventListener('click', function() {
  console.log('icone cliquée !');
  icone.classList.toggle('fa-face-smile-wink');
});
