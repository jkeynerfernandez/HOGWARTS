let listaDeMagos = [];
console.log(listaDeMagos);
localStorage.clear();

let nombres = document.getElementById("nombre");
let edades = document.getElementById("edad");
let familias = document.getElementById("familia");
let linajes = document.getElementById("linaje");
let cualidadUno = document.getElementById("cualidad1");
let cualidadDos = document.getElementById("cualidad2");
let cualidadTres = document.getElementById("cualidad3");
let PatronumGuardian= document.getElementById("PatronumGuardian")

let buttonAgregarMago = document.getElementById("agregarMago");
console.log(buttonAgregarMago);

buttonAgregarMago.addEventListener("click", () => {
    let mago = {
        nombre: nombres.value,
        edad: edades.value,
        familia: familias.value,
        linaje: linajes.value,
        casa: "",
        animalPatronus: "",
        cualidades: {
            cualidad1: cualidadUno.value,
            cualidad2: cualidadDos.value,
            cualidad3: cualidadTres.value,
        },
        password :PatronumGuardian.value
    };

    listaDeMagos.push(mago);
    console.log(mago);
    console.log(listaDeMagos);

    localStorage.setItem("listaDemago", JSON.stringify(listaDeMagos));

    console.log("hola mundo");
});

let storedMagos = localStorage.getItem("listaDemago");

console.log("Stored Magos from localStorage:", storedMagos);

if (storedMagos) {
    try {
        listaDeMagos = JSON.parse(storedMagos);
        console.log("Parsed Magos:", listaDeMagos);
    } catch (error) {
        console.error("Error parsing stored Magos:", error);
    }
}

let cursos = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};