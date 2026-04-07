// 🔥 VARIABLES GLOBALES (AQUÍ deben estar)
let paginaActual = 1;
const registrosPorPagina = 5;

// ➕ AGREGAR TRANSACCIÓN
function agregarTransaccion() {
  let cliente_id = document.getElementById("clienteSelect").value;
  let monto = parseFloat(document.getElementById("monto").value);
  let tipo = document.getElementById("tipo").value;

  let trans = {
    id: Date.now(),
    cliente_id,
    monto,
    tipo
  };

  transacciones.push(trans);

  analizarTransaccion(trans);

  guardarDatos();

  // 🔥 ACTUALIZACIÓN INSTANTÁNEA
  mostrarTransacciones();
  mostrarAlertas();
  actualizarDashboard();
  actualizarBadge();
}

// 🧠 MOTOR AML
function analizarTransaccion(trans) {

  if (trans.monto > 10000) {
    generarAlerta("Monto alto detectado", "ALTO");
  }

  let pequeños = transacciones.filter(t =>
    t.cliente_id == trans.cliente_id &&
    t.monto < 1000
  );

  if (pequeños.length >= 3) {
    generarAlerta("Posible estructuración", "SOSPECHOSO");
  }
}

// 🎨 CLASE DE RIESGO
function obtenerClaseRiesgo(monto) {
  if (monto > 10000) return "alto";
  if (monto > 5000) return "medio";
  return "bajo";
}

// 📊 MOSTRAR TABLA
function mostrarTransacciones() {
  let tbody = document.querySelector("#tablaTransacciones tbody");
  tbody.innerHTML = "";

  let inicio = (paginaActual - 1) * registrosPorPagina;
  let fin = inicio + registrosPorPagina;

  let datos = transacciones.slice().reverse();
  let paginaDatos = datos.slice(inicio, fin);

  paginaDatos.forEach(t => {
    let cliente = clientes.find(c => c.id == t.cliente_id);
    let clase = obtenerClaseRiesgo(t.monto);

    let fila = `
      <tr class="${clase}">
        <td>${cliente ? cliente.nombre : "N/A"}</td>
        <td>$${t.monto}</td>
        <td>${t.tipo}</td>
        <td>${new Date(t.id).toLocaleString()}</td>
      </tr>
    `;

    tbody.innerHTML += fila;
  });

  actualizarPaginacion();
}

// 🔄 PAGINACIÓN
function actualizarPaginacion() {
  let totalPaginas = Math.ceil(transacciones.length / registrosPorPagina);

  let contenedor = document.getElementById("paginacionTransacciones");

  if (totalPaginas === 0) totalPaginas = 1;

  contenedor.innerHTML = `
    <button onclick="cambiarPagina(-1)">◀</button>
    Página ${paginaActual} de ${totalPaginas}
    <button onclick="cambiarPagina(1)">▶</button>
  `;
}

function cambiarPagina(direccion) {
  let totalPaginas = Math.ceil(transacciones.length / registrosPorPagina);

  paginaActual += direccion;

  if (paginaActual < 1) paginaActual = 1;
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;

  mostrarTransacciones();
}