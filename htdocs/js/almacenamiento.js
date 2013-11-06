//Biblioteca JavaScript para manejar almacenamiento local
var ALMACEN='avengers';

function getStoreArray(llave) {
   var avengersArray=localStorage.getItem(llave);
  if (avengersArray==null || avengersArray == '') {
     //como no existe la estructura de datos en almacenamiento local
     //se crea vacia
       avengersArray= new Array();
  } else {
      //convierte de formato JSON a formato Array de JScript
      avengersArray = JSON.parse(avengersArray);
  }
  return avengersArray;
}

function getSavedAvengers() {
  return getStoreArray(ALMACEN); 
}

function guardar(elemento) {
  var avengersArray = getStoreArray(ALMACEN);
  avengersArray.push(elemento);
  localStorage.setItem(ALMACEN, JSON.stringify(avengersArray));
}

function cargarAvengers() {
  var avengersArray =   getSavedAvengers();
  //asume que la lista se identifica como lista
  var ul = document.getElementById('lista');
  if (avengersArray!=null) {
    for (var i=0; i<avengersArray.length; i++) {
      var li=document.createElement("li");
      li.innerHTML=avengersArray[i];
      ul.appendChild(li);
    }
  }
}