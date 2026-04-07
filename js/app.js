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
function mostrarSeccion(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");

  // marcar activo en menú
  document.querySelectorAll(".sidebar li").forEach(li => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");
}