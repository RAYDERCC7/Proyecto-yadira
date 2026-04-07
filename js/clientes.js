function agregarCliente() {
  let nombre = document.getElementById("nombre").value;
  let ingreso = document.getElementById("ingreso").value;

  clientes.push({
    id: Date.now(),
    nombre,
    ingreso
  });

  guardarDatos();
  cargarClientes();
}

function cargarClientes() {
  let select = document.getElementById("clienteSelect");
  select.innerHTML = "";

  clientes.forEach(c => {
    let option = document.createElement("option");
    option.value = c.id;
    option.textContent = c.nombre;
    select.appendChild(option);
  });
}