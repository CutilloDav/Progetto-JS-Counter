let numero = 0  ;

const pippo = document.querySelector('body');
   pippo.innerHTML= 
   "<div class='contenitore'>"+
       "<h1>COUNTER</h1>"+
       "<div id='contatore' class='Num'>0</div>"+
               "<div class='counter'>"+
                   "<input type='button' value='+' id='incremento' class='primoBottone'>"+
                   "<input type='button' value='-' id='decremento' class='secondoBottone'>"+
               "</div>"+
           "<button id='reset' class='terzoBottone'>reset</button>"+
   "</div>";

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