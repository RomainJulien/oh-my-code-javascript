console.log('connecté !');

// je selectionne et je stocke
const icone = document.querySelector('i');
console.log(icone);

const btnButton = document.querySelector('.btn');
console.log(btnButton);

// Fonction pour changer l'état (à la fois l'icône et le bouton)
function toggleEtat() {
  console.log('changement d\'état !');

  // Change l'icône
  if (icone.classList.contains('fa-meh-blank')) {
    // Passer à l'état "abonné"
    icone.classList.remove('fa-meh-blank');
    icone.classList.add('fa-smile-wink');
    icone.classList.add('happy');

    // Changer le texte du bouton
    btnButton.innerText = "Abonné";
    btnButton.classList.add('abonne');
  } else {
    // Revenir à l'état initial "non abonné"
    icone.classList.remove('fa-smile-wink');
    icone.classList.add('fa-meh-blank');
    icone.classList.remove('happy');

    // Remettre le texte initial
    btnButton.innerText = "Abonnez-vous";
    btnButton.classList.remove('abonne');
  }
}

// Attacher la fonction aux deux éléments
icone.addEventListener('click', toggleEtat);
btnButton.addEventListener('click', toggleEtat);
