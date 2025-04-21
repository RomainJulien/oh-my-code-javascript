console.log('connecté !');
// je selectionne et je stock
const btn = document.querySelector('.btn');
console.log(btn);

const ctn = document.querySelector('.container-notifications');
console.log(ctn);

// je soumets
btn.addEventListener('click', function(){
  console.log('bouton cliqué');
  const notification = document.createElement('div');
  console.log(notification);
  notification.classList.add('toast');
  notification.innerText = "Votre fichier est bien enregistré !";
  console.log(notification);
  ctn.appendChild(notification);
  setTimeout(function(){
      notification.remove();
  }, 1500);

});
