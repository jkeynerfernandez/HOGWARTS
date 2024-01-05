let listaDeMagos = localStorage.getItem("listaDemago");
if (listaDeMagos) {
    listaDeMagos = JSON.parse(listaDeMagos);
    console.log(listaDeMagos);
  }
//_____________________________________________________

//_________datos de entrada____________________________
let usuarios= document.getElementById("username");
let contrasena= document.getElementById("password");
let botonIngresar =document.getElementById("ingresar")
//_____________________________________________________



botonIngresar.addEventListener("click", function ingresar(){
    listaDeMagos.forEach(function(mago){
        if(usuarios.value == mago.nombre && contrasena.value == mago.password){
            location.href= "../perfilMago/perfilMago.html"
            console.log("ingreso");
            
            localStorage.setItem("magoLogueado", JSON.stringify(mago));
            usuarioLogueado = localStorage.getItem("magoLogueado");
        

        }

    });

});


//____________________- tema de la pagina -_______________________
let theme = document.getElementById("theme");

let body = document.getElementById("body");



let localTheme= localStorage.getItem("them");
console.log(localTheme)


body.classList.remove("theme-light");
body.classList.remove("theme-free");
body.classList.remove("theme-dark");
body.classList.add(localTheme);



theme.addEventListener("change",function changeTheme(){
    
    
    localStorage.setItem("them", theme.value)

       
    if (theme.value == "theme-dark"){
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        
    }else if( theme.value =="theme-light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
       
    }else if (theme.value == "theme-free"){
        body.classList.add("theme-free");
        body.classList.remove("theme-light");
        body.classList.remove("theme-dark");
    }z
});