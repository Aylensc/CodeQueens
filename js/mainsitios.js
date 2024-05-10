fetch("/db/sitios.json")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = data.data;
    const dataSitios = document.getElementById("dataSitios");

    dataArray.forEach((item) => {
      const nombre = item.nombre;
      const direccion = item.direccion;
      const imgsitio = item.imgsitio;
      const horario_apertura = item.horario_apertura;
      const horario_cierre= item.horario_cierre;
      const sitioInfo = document.createElement("div");
      sitioInfo.innerHTML = `
      <div class="sitioInfo">
        <section><img class="imgsitio" src="${imgsitio}"></section>
        <div class="p-sitio">
          <h3>  ${nombre} </h3>
          <p>       Dirección: ${direccion} </p>
          <p>        Apertura: ${horario_apertura}  </p>
          <p>        Cierra: ${horario_cierre}  </p>
        </div>
      </div>`;
      dataSitios.appendChild(sitioInfo);
    });
  })
  .catch((error) => console.log(error));
