let box = document.createElement('div');
let boxDue = document.createElement('div');
let boxTre =document.createElement('div');
let titolo = document.createElement('h1');
let primoPulsate = document.createElement('input');
let secondoPulsante = document.createElement('input');
let resetPulsante = document.createElement('button');

document.querySelector('body').appendChild(box);
box.setAttribute('class', 'contenitore');
box.setAttribute('id', 'contenitore');

document.getElementById('contenitore').appendChild(titolo);
titolo.textContent = 'COUNTER';

document.getElementById('contenitore').appendChild(boxDue);
boxDue.setAttribute('class', 'Num');
boxDue.setAttribute('id', 'contatore');
boxDue.textContent= '0';

document.getElementById('contenitore').appendChild(boxTre);
boxTre.setAttribute('class', 'counter');

primoPulsate.setAttribute('type', 'button');
primoPulsate.setAttribute('value', '+');
primoPulsate.setAttribute('id', 'incremento');
primoPulsate.setAttribute('class', 'primoBottone');

secondoPulsante.setAttribute('type', 'button');
secondoPulsante.setAttribute('value', '-');
secondoPulsante.setAttribute('id', 'decremento');
secondoPulsante.setAttribute('class', 'secondoBottone');

document.querySelector('.counter').appendChild(primoPulsate);
document.querySelector('.counter').appendChild(secondoPulsante);

document.getElementById('contenitore').appendChild(resetPulsante);
resetPulsante.setAttribute('id', 'reset');
resetPulsante.setAttribute('class','terzoBottone');
resetPulsante.textContent= 'reset';







 /*   body.innerHTML= 
   "<div class='contenitore'>"+
       "<h1>COUNTER</h1>"+
       "<div id='contatore' class='Num'>0</div>"+
               "<div class='counter'>"+
                   "<input type='button' value='+' id='incremento' class='primoBottone'>"+
                   "<input type='button' value='-' id='decremento' class='secondoBottone'>"+
               "</div>"+
        "<button id='reset' class='terzoBottone'>reset</button>"+
   "</div>";
    */

   let numero = 0  ;

   let contatore = document.getElementById('contatore');
   const increm = document.getElementById('incremento');
   const decrem = document.getElementById('decremento');
   const reset= document.getElementById('reset')


   increm.addEventListener('click', () => {
   numero++;
   contatore.innerHTML = numero;
   });
   decrem.addEventListener('click', () => {
   numero--;
   contatore.innerHTML = numero;
   });

   reset.addEventListener('click', () => {
       numero=0;
       contatore.innerHTML = numero;
   });