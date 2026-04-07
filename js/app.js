function actualizarDashboard() {
  document.getElementById("totalT").textContent = transacciones.length;
  document.getElementById("totalA").textContent = alertas.length;
}

// INIT
window.onload = () => {
  cargarClientes();
  mostrarAlertas();
  actualizarDashboard();
};
function mostrarSeccion(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}