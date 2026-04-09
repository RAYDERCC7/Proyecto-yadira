function actualizarDashboard() {
  document.getElementById("totalT").textContent = transacciones.length;
  document.getElementById("totalA").textContent = alertas.length;
}

// INIT
window.onload = () => {
  cargarClientes();
  mostrarAlertas();
  actualizarDashboard();
  mostrarTransacciones();
  actualizarBadge();
  mostrarSeccion("guia"); // 👈 esto es clave
};
function mostrarSeccion(id, event) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");

  // limpiar activos
  document.querySelectorAll(".sidebar li").forEach(li => {
    li.classList.remove("active");
  });

  // marcar activo
  if (event) {
    event.target.classList.add("active");
  }
}