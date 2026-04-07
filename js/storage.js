let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
let alertas = JSON.parse(localStorage.getItem("alertas")) || [];

function guardarDatos() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
  localStorage.setItem("transacciones", JSON.stringify(transacciones));
  localStorage.setItem("alertas", JSON.stringify(alertas));
}