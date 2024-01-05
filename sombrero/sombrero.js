

document.addEventListener("DOMContentLoaded", function() {
    console.log(localStorage)
    
    
    let listaDeMagos = [];
    let listaDeMagosAux = [];
    let listaDeMagosTabla =[]; 

    let vozDelSombrero= document.getElementById("vozDelSombrero");
let buttonEmpezar = document.getElementById("empezarr");
console.log(buttonEmpezar);

let storedMagos = localStorage.getItem('listaDemago');
 if (storedMagos) {
   listaDeMagos = JSON.parse(storedMagos);
 }




buttonEmpezar.addEventListener("click",()=>{

    storedMagos = localStorage.getItem("listaDemago");
    console.log(storedMagos)
    
    if (!storedMagos) {
       console.error("Error: No wizard data found in local storage");
       return;
     }

    // Convert the stored object to a list
    let listaDeMagos = Object.values(JSON.parse(storedMagos));
    

   
      
    for (let i =0;i<listaDeMagos.length;i++){

       
          
        let magoAevaluar= listaDeMagos[i];
        console.log(magoAevaluar.cualidades.cualidad1);

        const claves = Object.keys(magoAevaluar.cualidades);
        const valores = claves.map(clave => magoAevaluar.cualidades[clave]);
        
        
        
        if(valores.includes("valor")&&valores.includes("fuerza")&&valores.includes("audacia")){
            if (magoAevaluar.linaje=="mestizo"||magoAevaluar.linaje=="sangrePura"||magoAevaluar.linaje=="muggle"){
                magoAevaluar.casa="Gryffindor";
                vozDelSombrero.innerHTML="Ah, veo que eres valiente, fuerte y audaz, un verdadero defensor de las virtudes de la sangre pura. Tienes un corazón intrépido que late con la llama del coraje. ¡Hmm! Gryffindor podría ser el lugar adecuado para ti. Aquí es donde residen los valientes, los dispuestos a enfrentarse a cualquier desafío con determinación y bravura. ¡SANGRE Y VALOR! ¡Gryffindor!"
               listaDeMagosAux.push(magoAevaluar);
                console.log("gryfindor")
                
                agregarMagoTabla();
            }
                
        }else if(valores.includes("justicia")&&valores.includes("lealtad")&&valores.includes("paciencia")){
            if (magoAevaluar.linaje=="mestizo"||magoAevaluar.linaje=="muggle"){
                magoAevaluar.casa="Hufflepuff";
                vozDelSombrero.innerHTML="Hmm, veo en ti un fuerte sentido de justicia, lealtad inquebrantable y una paciencia que pocos poseen. Además, parece que llevas en tus venas el linaje de la sangre pura, aunque tus raíces se mezclan con otras fuentes. ¡Interesante! Estoy tentado a considerar Gryffindor, pero tu calma y equidad sugieren otra dirección. Sí, creo que hay un lugar perfecto para ti, donde la justicia y la lealtad son valores supremos. ¡HUFFLEPUFF! ¡Aquí es donde florecerás con paciencia y lealtad!"
                listaDeMagosAux.push(magoAevaluar);
                agregarMagoTabla();
            }
        }else if(valores.includes("creatividad")&&valores.includes("erudicion")&&valores.includes("inteligencia")){
            if (magoAevaluar.linaje=="mestizo"||magoAevaluar.linaje=="sangrePura"||magoAevaluar.linaje=="muggle"){
                magoAevaluar.casa="Ravenclaw";
                vozDelSombrero.innerHTML="¡Ah, una mente brillante, llena de creatividad y sed de conocimiento! Veo chispas de genialidad en tus pensamientos, y tus ansias de aprender son insaciables. No hay duda de que tu lugar está en un ambiente donde la sabiduría y la inventiva son altamente apreciadas. Gryffindor podría desear tu valentía, pero creo que hay un rincón especial para ti. ¡RAVENCLAW! Aquí, entre los sabios y curiosos, encontrarás un hogar donde tu inteligencia brillará con luz propia. ¡Bienvenido a la casa de la sabiduría y la creatividad!"
                listaDeMagosAux.push(magoAevaluar);
                agregarMagoTabla();
            }
        }else if(valores.includes("ambicion")&&valores.includes("determinacion")&&valores.includes("astucia")){
            if (magoAevaluar.linaje =="sangrePura"){
                magoAevaluar.casa="Slytherin";
                vozDelSombrero.innerHTML="Ah, veo en ti una ambición que arde como una llama inextinguible, una determinación que trasciende los límites y una astucia que supera a muchos. Tu espíritu está impregnado de una esencia intrigante, un matiz oscuro que añade un toque enigmático a tu personalidad. No temas abrazar tu naturaleza única, pues aquí encontrarás un hogar para aquellos con metas audaces. ¡SLYTHERIN! En las profundidades de esta casa, donde la ambición y la astucia son virtudes honradas, hallarás un lugar para florecer. ¡Bienvenido a la casa de la astucia y la determinación, donde se forjan destinos extraordinarios!"
                listaDeMagosAux.push(magoAevaluar);
                agregarMagoTabla();
            }
        }

        
        

    }
     
     actualizarTabla();
     
     listaDeMagosTabla = [];

    
    
});

function agregarMagoTabla() {

  console.log(listaDeMagos)

    for (let i =0; i < listaDeMagos.length;i++){
      
          listaDeMagosTabla.push(listaDeMagosAux[i]);
  
      }
  
      
       // document.getElementById("formulario").reset();
        
        actualizarTabla();
       
    }
    
    function actualizarTabla() {
      let tabla = document.getElementById("tablaMagos");
  
      tabla.innerHTML = "";
  
      let encabezado = tabla.createTHead();
      let filaEncabezado = encabezado.insertRow();
      
      let propiedades = Object.keys(listaDeMagosTabla[0]);
      propiedades.forEach((key) => {
          let th = document.createElement('th');
          th.appendChild(document.createTextNode(key));
          filaEncabezado.appendChild(th);
      });
  
      let cuerpoTabla = tabla.createTBody();
  
      listaDeMagosTabla.forEach((mago) => {
          let fila = cuerpoTabla.insertRow();
          let tr = document.createElement('tr');
          
          propiedades.forEach((key) => {
              let celda = fila.insertCell();
              if (key === 'cualidades') {
                
                  celda.appendChild(document.createTextNode(Object.values(mago[key]).join(', ')));
              } else {
                  
                  celda.appendChild(document.createTextNode(mago[key]));
              }
          });
      
        cuerpoTabla.appendChild(tr);  
      });
  }
      





    
});

function agregarMagoTabla() {


  for (let i =0; i < listaDeMagos.length;i++){
    
        listaDeMagosTabla.push(listaDeMagos[i]);

    }

      
  
      
      document.getElementById("formulario").reset();
      
      actualizarTabla();
     
  }
  
  function actualizarTabla() {
    
    let tabla = document.getElementById("tablaMagos");
  
  
    tabla.innerHTML = "";
  
  
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();
    for (let key in listaDeMagosTabla[0]) {
      let th = document.createElement('th');
      th.appendChild(document.createTextNode(key));
      filaEncabezado.appendChild(th);
    }
  
    let cuerpoTabla = tabla.createTBody();
  
  
    listaDeMagosTabla.forEach((estudiante) => {
      let fila = cuerpoTabla.insertRow();
      for (let key in estudiante) {
        let celda = fila.insertCell();
        celda.appendChild(document.createTextNode(estudiante[key]));
      }
    });
  
  
  
  
  
  
    document.body.appendChild(tabla);
  }
    