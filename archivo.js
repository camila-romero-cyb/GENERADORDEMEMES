

//boton modo oscuro

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("dark")
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
    mostrar(div);  
    } }


  
  /*color*/

//let color = document.getElementById("color");
//let codColor = document.getElementById("color_p");
//let effect = document.getElementById("effect");

//effect.addEventListener('input', () => {
  //console.log(effect.options.value)
//})

//color.addEventListener('input', () => {
  //codColor.innerHTML = `${ color.value }`
  //document.body.backgroundColor = `${color,value}`
//})


/* TOP TEXT funsiona*/ 


const inputText = document.getElementById('inputText');
const renderText = document.getElementById('renderText');


inputText.addEventListener('input', (event) => {
  const textoIngresado = event.target.value;
  renderText.innerHTML= textoIngresado
  
  
  
})

/* BOTTON TEXT  funsiona*/ 
  
  
const inputBotton=document.getElementById("inputBotton");
const bottonText = document.getElementById('bottonText');

inputBotton.addEventListener('input', (Event) => {
  const textoIngresadoB = Event.target.value;
  bottonText.innerHTML = textoIngresadoB ;
  
}) 
  


