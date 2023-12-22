let nombreDeMagoLogueado  = document.getElementById("nombreDeMago");
let familiaTXT =document.getElementById("familia");
let linajeTXT  =document.getElementById("linaje");

let magoLogueado = localStorage.getItem("magoLogueado");
//console.log(usuarioLogueado)
magoLogueado=JSON.parse(magoLogueado)//objeto
console.log(magoLogueado)

nombreDeMagoLogueado.innerText=magoLogueado.nombre;
familiaTXT.innerHTML=magoLogueado.familia;
linajeTXT.innerHTML =magoLogueado.linaje;