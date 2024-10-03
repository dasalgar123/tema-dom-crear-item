 // Definimos la variable "saludos" con el valor "NELSON".
 var saludos = "NELSON";
    
 // Seleccionamos todos los elementos <button> en el documento y los guardamos en la variable "boton".
 var boton = document.getElementsByTagName("button");

 // Agregamos un evento "click" al primer botón (boton[0]) que ejecuta la función "eventoClick" al hacer clic.
 boton[0].addEventListener("click", eventoClick);

 // Agregamos un evento "click" al segundo botón (boton[1]) que ejecuta la función "eliminarItems" al hacer clic.
 boton[1].addEventListener("click", eliminarItems);

 console.log(boton); // Mostramos en la consola del navegador el arreglo de botones.

 // Definimos la función "eventoClick".
 function eventoClick() {
     // Muestra una alerta con el saludo.
     alert("Click en el boton " + saludos);
     
     // Llama a la función "crearItems" para agregar un nuevo elemento a la lista.
     crearItems();
 }

 // Función que crea y añade un nuevo elemento <li> a la lista.
 function crearItems() {
     // Selecciona la lista <ul> usando su id "listas".
     var lista = document.getElementById("listas");

     // Crea un nuevo elemento <li>.
     var item = document.createElement("li");

     // Añade un texto (con una etiqueta <h3>) al nuevo elemento <li>.
     item.innerHTML = "<h3> hola </h3>";

     // Añade el nuevo elemento <li> a la lista <ul>.
     lista.appendChild(item);

     // Extrae el texto del nuevo elemento <li> (sin etiquetas HTML).
     var textoExtraido = item.textContent;

     // Muestra el texto extraído en la consola.
     console.log(textoExtraido);
 }

 // Función que elimina el último elemento <li> de la lista.
 function eliminarItems() {
     // Selecciona la lista <ul> usando su id "listas".
     var elemento = document.getElementById("listas");

     // Elimina el último hijo de la lista, es decir, el último <li>.
     elemento.removeChild(elemento.lastChild);
 }
