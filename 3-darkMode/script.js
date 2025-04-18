console.log('connecté !');
// Je sélectionne et je stock les éléments :

const switchBox = document.querySelector('.switch');
console.log(switchBox);

const btn = document.querySelector('.btn');
console.log(btn);

const icone = document.querySelector('i');
console.log(icone);

const container = document.querySelector('.container');
console.log(container);

const titre = document.querySelector('h1');
console.log(titre);

// Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function() {
  console.log('DIV cliquée!');
  // Je déplace le cercle
  // j'utilise .classList.toggle
  btn.classList.toggle('btn-change');
  icone.classList.toggle('icone-change');
  icone.classList.toggle('fa-sun');
  switchBox.classList.toggle('switch-change');
  container.classList.toggle('container-change');
    if(titre.innerText === "DARK MODE"){
      titre.innerText = "LIGHT MODE";
    }else{
      titre.innerText = "DARK MODE";
  }
});
