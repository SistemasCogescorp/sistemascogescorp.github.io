//LLAMAR AL ID DEL BOTON
let mybutton = document.getElementById("btn-back-to-top");

// AL BAJAR 20PX MOSTRAR EL BOTON PARA SUBIR
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// CUANDO SE PRESIONE EL BOTON SUBIR AL INICIO DE LA PAGINA
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}