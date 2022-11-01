//boton modo oscuro

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("dark");
 
})


/* seccion imagen*/


const mostrar = (elemento) => {
  elemento.style.display = 'block';
}
const ocultar = (elemento) => {
  elemento.style.display = 'none';
}
const mostrarOcultar = (id) => {
  let div = document.getElementById(id);
  if( window.getComputedStyle(div).display !== 'none' ){
    ocultar(div);
    return false;
  }

  mostrar(div);
}

let contImg = document.querySelector("#visual-image");
let imputImg = document.getElementById("imageName");
imputImg.addEventListener("input", function (event) {
  contImg.style.backgroundImage =`url(${event.target.value})`

   console.log(event.target.value)
 })






/* TOP TEXT funciona*/ 


const inputText = document.getElementById('inputText');
const renderText = document.getElementById('renderText');


inputText.addEventListener('input', (event) => {
  const textoIngresado = event.target.value;
  renderText.innerHTML= textoIngresado
  
  
  
})

/* BOTTON TEXT  funciona*/ 
  
  
const inputBotton=document.getElementById("inputBotton");
const bottonText = document.getElementById('bottonText');

inputBotton.addEventListener('input', (Event) => {
  const textoIngresadoB = Event.target.value;
  bottonText.innerHTML = textoIngresadoB ;
  
})

/* imput*/




