//realizar acciones al cargar al documento
window.onload = function() {
  //asociar un evento al boton
  var boton = document.getElementById('ver');
  boton.onclick=mostrar;
}

function mostrar() {
   var canvas = document.getElementById('drawzone');
   var context=canvas.getContext('2d');
   limpiar(canvas,context);
  //leer opciones que el usuario da
   var figura = document.getElementById('figura');
   var indice=figura.selectedIndex;
   var seleccionFigura= figura[indice].value;
   
  if (seleccionFigura=='cuadrados') {
    //dibujar 20 cuadrados
    for (var i=0;i<20;i++) {
      //llamar a la funcion dibujarCuadrado
       dibujarCuadrado(canvas,context);
    }
  } else if (seleccionFigura=='circulos' ) {
        //dibujar 20 circulos
    for (var i=0;i<20;i++) {
      //llamar a la funcion dibujarCuadrado
       dibujarCirculo(canvas,context);
    }
  } else if (seleccionFigura=='semicirculos' ) {
        //dibujar 20 circulos
    for (var i=0;i<20;i++) {
      //llamar a la funcion dibujarCuadrado
       dibujarSemiCirculo(canvas,context);
    } 
  }
}

function dibujarCuadrado(canvas,contexto) {
  //generar de manera aleatoria las propiedades del cuadrado
  var ancho = Math.floor(Math.random()*40 );
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  contexto.fillStyle = 'lightblue';
  contexto.fillRect(x,y,ancho,ancho);
}

function dibujarCirculo(canvas,contexto) {
  var radio = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  
  contexto.beginPath();
  contexto.arc(x,y,radio,0, 2*Math.PI,true)
  contexto.fillStyle='lightblue';
  contexto.fill();
}

function dibujarSemiCirculo(canvas,contexto) {
  var radio = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  
  contexto.beginPath();
  contexto.arc(x,y,radio,Math.PI/4, 5*Math.PI/4,true)
  contexto.fillStyle='lightblue';
  contexto.fill();
}

function limpiar(canvas,contexto) {
  var colorFondo = document.getElementById('colorFondo');
  var indice = colorFondo.selectedIndex;
  var seleccionado = colorFondo.options[indice].value;
  contexto.fillStyle = seleccionado;
  contexto.fillRect(0,0,canvas.width, canvas.height);
}