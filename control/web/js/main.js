// alert("hola mundo");
let adelante = document.getElementById("adelante");
let atrás = document.getElementById("atrás");
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let detener = document.getElementById("detener");

let mensaje= document.getElementById('mensaje');

function callApi(estatus){
    // Hacer una petición para un usuario con ID especifico
axios
.get("http://18.134.227.171/iot-car-control/back-end/apis/setRegistro.php?valorEstatus=" + estatus )


.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);
  mensaje.innerHTML="Respuesta: <strong> " + response.data + "</strong>";
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}

adelante.addEventListener("click", function(){
    callApi("a");
});

atrás.addEventListener("click", function(){
  callApi("b");
});

izquierda.addEventListener("click", function(){
  callApi("c");
});

derecha.addEventListener("click", function(){
  callApi("d");
});

detener.addEventListener("click", function(){
  callApi("s");
});
