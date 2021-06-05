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
