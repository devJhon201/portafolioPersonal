window.addEventListener("load", (event) => {
	// Header usa el espacio completo de la ventana

	if (window.matchMedia("(max-width: 768px)").matches) {
		/* The viewport is less than, or equal to, 700 pixels wide */
		const headerStyle = document.getElementById("entrada-pagina-principal");
		headerStyle.style.height = window.innerHeight + "px";
		let fotoProyecto = document.getElementById("camila-img");
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
	} else {
		/* The viewport is greater than 768 pixels wide */
	}
});
// Mostrar imagen más grande
const imagenes = document.getElementsByTagName("img");

for (const imagen of imagenes) {
	imagen.onclick = function () {
		let sobrePoner = document.createElement("DIV");
		sobrePoner.classList.add("sobrePoner");
		let img = document.createElement('IMG');
		img.src = imagen.src;
		sobrePoner.appendChild(img);
		const body = document.querySelector("body");
		body.appendChild(sobrePoner);
		const btnCerrar = document.createElement('P');
		btnCerrar.classList.add('btn-cerrar')
		btnCerrar.innerHTML = 'Cerrar';
		sobrePoner.appendChild(btnCerrar);
		btnCerrar.onclick = function() {
			sobrePoner.remove()
		}
		if (window.matchMedia("(max-width: 768px)").matches) {
			sobrePoner.onclick = function() {
				sobrePoner.remove();
			}
		}
	};
}



