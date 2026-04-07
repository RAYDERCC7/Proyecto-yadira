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
  actualizarDashboard();
}

function analizarTransaccion(trans) {

  // Regla 1: monto alto
  if (trans.monto > 10000) {
    generarAlerta("Monto alto detectado", "ALTO");
  }

  // Regla 2: depósitos pequeños repetidos
  let pequeños = transacciones.filter(t =>
    t.cliente_id == trans.cliente_id &&
    t.monto < 1000
  );

  if (pequeños.length >= 3) {
    generarAlerta("Posible estructuración", "SOSPECHOSO");
  }
}