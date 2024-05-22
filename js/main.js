
fetch("/db/hotelsBA.json")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = data.data;
    const dataContainer = document.getElementById("dataContainer");

    dataArray.forEach((item) => {
      const hotelName = item.name;
      const address = item.direccion;
      const image = item.imagen;
      const telefono = item.telefono;
      const hotelInfo = document.createElement("div");
      hotelInfo.innerHTML = `
      <div class="hotelInfo">
        <section><img class="imghotel" src="${image[0]}"></section>
        <section> <img class="imghotel" src="${image[1]}"></section>
        <section> <img class="imghotel" src="${image[2]}"></section>
        <div class="parrafo">
          <h3>  ${hotelName} </h3>
          <p>       Dirección: ${address} </p>
          <p>        Teléfono: ${telefono}  </p>
          <buttom class="btnReservar"><a href="formReserva.html"> Reservar </a> </buttom>
        </div>
      </div>`;
      dataContainer.appendChild(hotelInfo);
    });
  })
  .catch((error) => console.log(error));

fetch("/db/nosotras.json")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = data.data;
    const containerNosotras = document.getElementById("containerNosotras");

    dataArray.forEach((item) => {
      const nombre = item.nombre;
      const linkedin = item.linkedin;
      const imagen = item.imagen;
      const Github = item.Github;
      const metas = item.metas;
      const nosotrasInfo = document.createElement("div");
      nosotrasInfo.innerHTML = `
        <div class="nosotrasInfo">
          <section><img class="imgnosotras" src="${imagen}"></section>
          <div class="p-nosotras">
             <h3 class="h3Nosotras">  ${nombre} </h3>
             <p>  ${linkedin} </p>
             <p>  ${Github} </p>
             <p>  ${metas}  </p>
          </div> 
        </div>`;
      containerNosotras.appendChild(nosotrasInfo);
    });
  })
  .catch((error) => console.log(error));

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


  // const nav = document.querySelector("#nav");
  // const abrir = document.querySelector("#abrir");
  // const cerrar = document.querySelector("#cerrar");
  
  //   abrir.addEventListener("click", () => {
  //     nav.classList.add("visible");
  //   });
  
  //   cerrar.addEventListener("click", () => {
  //     nav.classList.remove("visible");
  //   });
