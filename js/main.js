/*var cuando es global fuera de cualquier funcion*/
var figura =document.getElementById("figura");

function circulo(){
    figura.classList.toggle("circulo");
}

function moveTop(){
    figura.classList.toggle("moveTop");
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
}

function rombo(){
    figura.classList.toggle("rombo");
}

function imagen(){
    figura.classList.toggle("imagen");
}

function gif(){
    figura.classList.toggle("gif");
}

function triangulo(){
    figura.classList.toggle("triangulo");
}

function huevo(){
    figura.classList.toggle("huevo");
}

function pacMan(){
    figura.classList.toggle("pacMan");
}

function luna(){
    figura.classList.toggle("luna");
}

function hoja(){
    figura.classList.toggle("hoja");
}

function mostrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.toggle('active');
}

function cerrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.remove('active');
}

function trapecio(){
    figura.classList.toggle("trapecio");
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
}

function moveRight(){
    figura.classList.toggle("moveRight");
}

function mostrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.toggle('active');
}

function cerrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.remove('active');
}

function cambiarColor() {
    var leftElement = document.getElementById('leftElement');
    var rightElement = document.getElementById('rightElement');

    leftElement.classList.toggle('colorCambiado');
    rightElement.classList.toggle('colorCambiado');
}

var isBackgroundChanged = false;

function toggleBackground() {
  var body = document.body;
  isBackgroundChanged = !isBackgroundChanged;

  if (isBackgroundChanged) {
    body.style.backgroundImage = "url('https://img.freepik.com/vector-gratis/fondo-formas-geometricas-diseno-plano_23-2148371114.jpg?w=1380&t=st=1700839281~exp=1700839881~hmac=0a6c631af8575ac27775377e2216bb8215199b6020b2b4ad2ea54a50f7f0201c')";
  } else {
    body.style.backgroundImage = "url('https://img.freepik.com/vector-gratis/fondo-formas-geometricas-planas_23-2148374570.jpg?w=1380&t=st=1700839110~exp=1700839710~hmac=eeadda67a1fea90bd2204e4aa9b8575b9a3c1c8e3fb64ca6777188a31e68dfe7')";
  }
}



  
function toggleButton() {
    // Obtener todos los botones
    var buttons = document.querySelectorAll('button');

    // Alternar la clase 'active' en cada botón
    buttons.forEach(function(button) {
        button.classList.toggle('active');
        
        // Cambiar el estilo directamente
        if (button.classList.contains('active')) {
            button.style.backgroundColor = '#e74c3c';
            button.style.borderColor = '#c0392b';
        } else {
            button.style.backgroundColor = '#fbabac';
            button.style.borderColor = '#ffffff';
        }
    });
}