function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mail = document.getElementById("mail").value.trim();


if (nombre === "" || telefono === "" || apellido === "" || mail === "" ) {
    alert("Completa todos los campos requeridos en el formulario.");
    return false;
  }

  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  for (var i = 0; i < apellido.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  if (telefono.length !== 10) {
    alert("El campo 'teléfono' debe contener exactamente 10 dígitos numéricos.");
    return false;
  }
  for (var j = 0; j < dni.length; j++) {
    var digit = dni.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'teléfono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  alert("Formulario enviado correctamente.");
  return true;
}