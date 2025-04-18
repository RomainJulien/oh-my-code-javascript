console.log('connecté !');

// je selectionne et je stocke les éléments
// bouton .btn-success
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

// Div cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);

// je soumet à l'action

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué !');
    cookies.style.opacity = "0";
});
