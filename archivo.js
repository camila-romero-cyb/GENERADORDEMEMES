//boton modo oscuro

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("dark");
 
})


/*aside */


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

/* fondo imagen*/

let backgroundImage = document.getElementById("section-background");

backgroundImage.addEventListener('blur', (event) => {
  let backgroundColorImage = event.target.value;
  console.log(backgroundColorImage);
  backgroundImage.style.backgroundColor = backgroundColorImage;
  
});




/* BOTTON TEXT  funciona*/ 
  
  
const inputBotton=document.getElementById("inputBotton");
let bottonText = document.getElementById('bottonText');

inputBotton.addEventListener('input', (Event) => {
  const textoIngresadoB = Event.target.value;
  bottonText.innerHTML = textoIngresadoB ;
  
})

/*boton descarga funciona */


const $=(selector) =>document.querySelector(selector)



let bottonDesc = $("#bottonDesc");

const descMeme = () => {
  domtoimage.toBlob($('.pruebaDsc')).then(function(blob){
    saveAs(blob,"meme.png");
  });
};

bottonDesc.addEventListener("click", descMeme);

/* fondo color text*/

let topTextContainer = document.getElementById("tittleOne");
let bottomTextContainer = document.getElementById("tittleTwo");
let backgroundText = document.getElementById("backgroundText");

backgroundText.addEventListener('blur', (event) => {
  let backgroundColorText = event.target.value;
  topTextContainer.style.backgroundColor = backgroundColorText;
});

backgroundText.addEventListener('blur', (event) => {
  let backgroundColorText = event.target.value;
  bottomTextContainer.style.backgroundColor = backgroundColorText;
});






/* color text*/
let colorText = document.getElementById("color-text");

colorText.addEventListener('blur', (event) =>{
  let colorText = event.target.value;
  renderText.style.color = colorText;
});

colorText.addEventListener('blur', (event) => {
  let colorText = event.target.value;
  bottonText.style.color = colorText;
});

/* filtros*/

/*brillo*/

let brightnessImg = document.getElementById("brightness-slider");
let opacityImg = document.getElementById("opacity-slider");
let contrastImg = document.getElementById("contrast-slider");


const actualizarFiltros = () => {
  contImg.style.filter = `brightneess(${brightnessImg.value}) opacity(${opacityImg.value}) contrast(${contrastImg.value})`;
  };

brightnessImg.addEventListener("changue", actualizarFiltros);
opacityImg.addEventListener("change", actualizarFiltros);
contrastImg.addEventListener("change", actualizarFiltros);




/* boton reset*/


let resertFilter = document.getElementById("resetFilter");
const resetarFiltros = () => {
  brightnessImg.value = 100;
  opacityImg.value = 100;
  

  actualizarFiltros();
};

resertFilter.addEventListener('click', resetarFiltros);



