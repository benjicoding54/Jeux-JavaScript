
const btnRed = document.getElementById('btn-red');

const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue, "bouton bleu");


btnBlue.addEventListener('click', function () {
      console.log('cercle bleu cliqué');
});

btnBlue.addEventListener('click', function (){

      compteur = compteur + 1;
      console.log(compteur, "compteur aprés incrémentation");

});

let compteur = 0;

console.log(compteur, "compteur au démarrage")

console.log(btnRed, "bouton rouge");


btnRed.addEventListener('click', function(){
      console.log('cercle rouge cliqué');

      compteur = compteur + 1;

      console.log(compteur, "compteur aprés incrémentation");

      console.log('cliqué');
});



btnRed.addEventListener('click', function () {
      console.log('cercle rouge cliqué')
          add();
});

btnBlue.addEventListener('click', function (){
           console.log('cercle bleu cliqué')
           add();
});

function add(){
      compteur = compteur + 1;
      console.log(compteur, "compteur aprés incrémentation");
      titre.innerText = compteur;
};



let titre = document.getElementById('titre');




setTimeout(function(){
      console.log('fin du chrono !')
}, 20000);

setTimeout(function(){

      btnRed.remove();
      btnBlue.remove();
}, 20000);
