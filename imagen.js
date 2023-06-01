var botonActivarInput = document.getElementById("activarInput");
var inputArchivo = document.getElementById("imagenInput");

botonActivarInput.addEventListener("click", function() {
  inputArchivo.click();
});


var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var contenedorDibujo = document.getElementById("contenedor-dibujo");
var contenedorImagen = document.getElementById("contenedor-imagen");

radio1.addEventListener("change", function() {
  if (radio1.checked) {
    contenedorDibujo.style.display = "block";  // Mostrar el elemento
    contenedorImagen.style.display = "none";
  }
});

radio2.addEventListener("change", function() {
  if (radio2.checked) {
    contenedorDibujo.style.display = "none";  // Ocultar el elemento
    contenedorImagen.style.display = "block";
  }
});