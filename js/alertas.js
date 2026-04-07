function generarAlerta(mensaje, tipo) {
  alertas.push({
    mensaje,
    tipo,
    fecha: new Date().toLocaleString()
  });

  mostrarAlertas();
  guardarDatos();
}

function mostrarAlertas() {
  let ul = document.getElementById("alertas");
  ul.innerHTML = "";

  alertas.forEach(a => {
    let li = document.createElement("li");
    li.textContent = `${a.mensaje} - ${a.fecha}`;
    li.className = "alerta";
    ul.appendChild(li);
  });
}