fetch('/db/hotelsBA.json')
.then(response => response.json())
.then(data => {
  const dataArray = data.data;
  const dataContainer = document.getElementById('dataContainer');

  dataArray.forEach(item => {
    const hotelName = item.name;
    const address = item.direccion;
    const image=item.imagen;
    const hotelInfo = document.createElement('div');
    hotelInfo.innerHTML = `
    <div class="hotelInfo">
    <p class="parrafo">  ${hotelName}     </p>
    <p class="parrafo">  Dirección: ${address}  </p>
    <img class="imghotel" src="${image}"> </div>`
    dataContainer.appendChild(hotelInfo);
  });
  
})
.catch (error =>console.log(error))