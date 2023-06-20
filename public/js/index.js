let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelector('p');

let nombre = prompt('Ingrese su nombre');

if (nombre) {
    h2.textContent = nombre.toUpperCase();
  } else {
    h2.textContent = 'Invitado'; 
  }

h2.style.textTransform = 'uppercase';
a.style.color = '#E51B3E';

let fondo = confirm('¿Desea colocar un fondo de pantalla?');
if (fondo) {
    document.body.classList.add('fondo');
}
for (let index = 0; index < p.length; index++) {
    if (index % 2 == 0) {
          p[index].classList.add("destacadoPar");
    } else {
          p[index].classList.add("destacadoImpar");
    }
}
  
main.style.display = 'block';