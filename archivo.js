//boton modo oscuro

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("dark");
 
})





let sectionFilter = document.querySelector("#section-text");
let sectionImage = document.querySelector("#sectionImage");
let btnImg = document.querySelector("#btnImg");
let btnText = document.querySelector("#btnText");

btnText.addEventListener("click", function () {
  sectionFilter.style.display = "block";
  sectionImage.style.display = "none";
})


btnImg.addEventListener("click", function () {
  sectionImage.style.display = "block";
  sectionFilter.style.display = "none";
  
}) 

/* seccion imagen*/

let contImg = document.querySelector("#visualImage");
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

/*boton descarga*/





/*let divImg = getElementById("primaryBox");
let buttonDesc = getElementById("buttonDesc");

const descMeme = () => {
  domtoimage.toBlob('CAMBIAR').then(funcion(blob)); {
    saveAs(blob, 'meme-jpg');
  }
  }

buttonDesc.addEventListener("click", descMeme);*/
