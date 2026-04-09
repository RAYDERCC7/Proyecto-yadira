let paginaAlertas = 1;
const alertasPorPagina = 5;

function generarAlerta(mensaje, tipo) {
  alertas.push({
    mensaje,
    tipo,
    fecha: new Date().toLocaleString(),
    visto: false
  });
  
  paginaAlertas = 1; // siempre mostrar la más nueva

  guardarDatos();
  actualizarBadge();
  mostrarAlertas();
  
}

function mostrarAlertas() {
  let ul = document.getElementById("listaAlertas");
  ul.innerHTML = "";

  let inicio = (paginaAlertas - 1) * alertasPorPagina;
  let fin = inicio + alertasPorPagina;

  let datos = alertas.slice().reverse(); // últimas primero
  let paginaDatos = datos.slice(inicio, fin);

  paginaDatos.forEach(a => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${a.mensaje} - ${a.fecha}
      ${!a.visto ? "<strong>(Nuevo)</strong>" : ""}
    `;

    li.className = a.tipo === "AVISO" ? "alerta aviso" : "alerta";
    ul.appendChild(li);
  });

  actualizarPaginacionAlertas();
}
function actualizarBadge() {
  let nuevas = alertas.filter(a => !a.visto).length;
  document.getElementById("badgeAlertas").textContent = nuevas;
}
function marcarComoVisto() {
  alertas.forEach(a => a.visto = true);

  guardarDatos();
  actualizarBadge();
  mostrarAlertas();
}
function actualizarPaginacionAlertas() {
  let totalPaginas = Math.ceil(alertas.length / alertasPorPagina);

  if (totalPaginas === 0) totalPaginas = 1;

  let contenedor = document.getElementById("paginacionAlertas");

  contenedor.innerHTML = `
    <button onclick="cambiarPaginaAlertas(-1)">◀</button>
    Página ${paginaAlertas} de ${totalPaginas}
    <button onclick="cambiarPaginaAlertas(1)">▶</button>
  `;
}

function cambiarPaginaAlertas(direccion) {
  let totalPaginas = Math.ceil(alertas.length / alertasPorPagina);

  paginaAlertas += direccion;

  if (paginaAlertas < 1) paginaAlertas = 1;
  if (paginaAlertas > totalPaginas) paginaAlertas = totalPaginas;

  mostrarAlertas();
}