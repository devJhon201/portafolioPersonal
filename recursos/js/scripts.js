let headerStyle = document.getElementById("entrada-pagina-principal");
let fotoProyecto;

// Revisa constantemente el tamaño del header para adecuarlo al dispositivo
setInterval(() => {
  if (window.innerWidth > 768) {
    headerStyle.style.height = "64px";
    fotoProyecto = document.getElementById("camila-img");
    fotoProyecto.setAttribute(
      "src",
      "recursos/img/camila-agudelo-sitio-web.png"
    );
    fotoProyecto = document.getElementById("excursion-img");
    fotoProyecto.setAttribute("src", "recursos/img/excursion.png");
    fotoProyecto = document.getElementById("fotomat-img");
    fotoProyecto.setAttribute("src", "recursos/img/fotomat.png");
    fotoProyecto = document.getElementById("tea-img");
    fotoProyecto.setAttribute("src", "recursos/img/tea-cozy.png");
    fotoProyecto = document.getElementById("style-img");
    fotoProyecto.setAttribute("src", "recursos/img/style-guide.png");
    fotoProyecto = document.getElementById("art-img");
    fotoProyecto.setAttribute("src", "recursos/img/dasmoto.png");
  } else if (window.innerWidth < 768) {
    headerStyle.style.height = window.innerHeight + "px";
    fotoProyecto = document.getElementById("camila-img");
    fotoProyecto.setAttribute("src", "./recursos/img/camila-movil.jpeg");
    fotoProyecto = document.getElementById("excursion-img");
    fotoProyecto.setAttribute("src", "./recursos/img/excursion-movil.jpeg");
    fotoProyecto = document.getElementById("fotomat-img");
    fotoProyecto.setAttribute("src", "./recursos/img/fotomat-movil.jpeg");
    fotoProyecto = document.getElementById("tea-img");
    fotoProyecto.setAttribute("src", "./recursos/img/tea-movil.jpeg");
    fotoProyecto = document.getElementById("style-img");
    fotoProyecto.setAttribute("src", "./recursos/img/style-movil.jpeg");
    fotoProyecto = document.getElementById("art-img");
    fotoProyecto.setAttribute("src", "./recursos/img/art-movil.jpeg");
  }
}, 250);

// Mostrar imagen más grande
const imagenes = document.getElementsByTagName("img");

for (const imagen of imagenes) {
  imagen.onclick = function () {
    let sobrePoner = document.createElement("DIV");
    sobrePoner.classList.add("sobrePoner");
    let img = document.createElement("IMG");
    img.src = imagen.src;
    sobrePoner.appendChild(img);
    const body = document.querySelector("body");
    body.appendChild(sobrePoner);
    const btnCerrar = document.createElement("P");
    btnCerrar.classList.add("btn-cerrar");
    btnCerrar.innerHTML = "Cerrar";
    sobrePoner.appendChild(btnCerrar);
    btnCerrar.onclick = function () {
      sobrePoner.remove();
    };
    if (window.matchMedia("(max-width: 768px)").matches) {
      sobrePoner.onclick = function () {
        sobrePoner.remove();
      };
    }
  };
}
