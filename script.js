window.cambiarPestana = function(pestana) {
  const btns = document.querySelectorAll('.pestana-btn');
  const secPresupuesto = document.getElementById('seccion-presupuesto');
  const secIngresos = document.getElementById('seccion-ingresos');
  const secRegistro = document.getElementById('seccion-registro');
  const secRecurrentes = document.getElementById('seccion-recurrentes');
  const secDashboard = document.getElementById('seccion-dashboard');
  const secHistorialIngresos = document.getElementById('seccion-historial-ingresos');
  const secHistorial = document.getElementById('seccion-historial');

  if (secPresupuesto) secPresupuesto.style.display = 'none';
  if (secIngresos) secIngresos.style.display = 'none';
  if (secRegistro) secRegistro.style.display = 'none';
  if (secRecurrentes) secRecurrentes.style.display = 'none';
  if (secDashboard) secDashboard.style.display = 'none';
  if (secHistorialIngresos) secHistorialIngresos.style.display = 'none';
  if (secHistorial) secHistorial.style.display = 'none';

  btns.forEach(b => b.classList.remove('activa'));

  if (pestana === 'ingresos') {
    if (btns[0]) btns[0].classList.add('activa');
    if (secIngresos) secIngresos.style.display = 'block';
  } else if (pestana === 'recurrentes') {
    if (btns[1]) btns[1].classList.add('activa');
    if (secRecurrentes) secRecurrentes.style.display = 'block';
    if (window.actualizarRecurrentesUI) window.actualizarRecurrentesUI();
  } else if (pestana === 'presupuesto') {
    if (btns[2]) btns[2].classList.add('activa');
    if (secPresupuesto) secPresupuesto.style.display = 'block';
    if (window.actualizarPresupuestoUI) window.actualizarPresupuestoUI();
  } else if (pestana === 'registro') {
    if (btns[3]) btns[3].classList.add('activa');
    if (secRegistro) secRegistro.style.display = 'block';
  } else if (pestana === 'dashboard') {
    if (btns[4]) btns[4].classList.add('activa');
    if (secDashboard) secDashboard.style.display = 'block';
    if (window.actualizarDashboard) window.actualizarDashboard();
  } else if (pestana === 'historial-ingresos') {
    if (btns[5]) btns[5].classList.add('activa');
    if (secHistorialIngresos) secHistorialIngresos.style.display = 'block';
    if (window.actualizarIngresosUI) window.actualizarIngresosUI();
  } else if (pestana === 'historial') {
    if (btns[6]) btns[6].classList.add('activa');
    if (secHistorial) secHistorial.style.display = 'block';
    if (window.actualizarApp) window.actualizarApp();
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('gasto-form');
  const fechaInput = document.getElementById('fecha');
  const descripcionInput = document.getElementById('descripcion');
  const importeInput = document.getElementById('importe');
  const metodoPagoInput = document.getElementById('metodo-pago');
  const categoriaInput = document.getElementById('categoria');
  const subcategoriaInput = document.getElementById('subcategoria');
  const grupoOtraSub = document.getElementById('grupo-otra-sub');
  const otraSubcategoriaInput = document.getElementById('otra-subcategoria');
  
  // Elementos de Ingresos
  const ingresoForm = document.getElementById('ingreso-form');
  const ingImporte = document.getElementById('ing-importe');
  const ingDescripcion = document.getElementById('ing-descripcion');
  const ingCategoria = document.getElementById('ing-categoria');
  const grupoOtraIng = document.getElementById('grupo-otra-ing');
  const otraCategoriaIng = document.getElementById('otra-categoria-ing');
  const ingFecha = document.getElementById('ing-fecha');
  const listaIngresos = document.getElementById('lista-ingresos');
  const totalImporteIngresos = document.getElementById('total-importe-ingresos');
  const totalRegistrosIngresos = document.getElementById('total-registros-ingresos');
  const buscadorHistorialIngresos = document.getElementById('buscador-historial-ingresos');
  const filtroHistorialMesIngresos = document.getElementById('filtro-historial-mes-ingresos');
  const ordenHistorialIngresos = document.getElementById('orden-historial-ingresos');
  const tituloFormIngreso = document.getElementById('titulo-form-ingreso');
  const btnSubmitIngreso = document.getElementById('btn-submit-ingreso');
  const btnCancelarEdicionIngreso = document.getElementById('btn-cancelar-edicion-ingreso');
  const resumenIngresosFiltrado = document.getElementById('resumen-ingresos-filtrado');

  // Elementos de Foto Ticket e IA OCR
  const fotoTicketInput = document.getElementById('foto-ticket');
  const previewTicketContainer = document.getElementById('preview-ticket-container');
  const previewTicketImg = document.getElementById('preview-ticket-img');
  const btnQuitarFoto = document.getElementById('btn-quitar-foto');
  const ocrStatus = document.getElementById('ocr-status');
  let imagenTicketBase64 = null;

  const listaGastos = document.getElementById('lista-gastos');
  const totalImporte = document.getElementById('total-importe');
  const totalRegistros = document.getElementById('total-registros');
  const btnSubmitForm = document.getElementById('btn-submit-form');
  const btnCancelarEdicion = document.getElementById('btn-cancelar-edicion');
  
  const filtroAno = document.getElementById('filtro-ano');
  const filtroMes = document.getElementById('filtro-mes');
  const filtroCategoria = document.getElementById('filtro-categoria');
  const filtroMetodo = document.getElementById('filtro-metodo');
  const resumenAnual = document.getElementById('resumen-anual');

  const filtroHistorialMes = document.getElementById('filtro-historial-mes');
  const buscadorHistorial = document.getElementById('buscador-historial');
  const ordenHistorial = document.getElementById('orden-historial');
  const selectorMoneda = document.getElementById('selector-moneda');
  const btnModoOscuro = document.getElementById('btn-modo-oscuro');
  const btnActivarAlertas = document.getElementById('btn-activar-alertas');
  const bannerAlertaSemanal = document.getElementById('banner-alerta-semanal');
  const textoAlertaSemanal = document.getElementById('texto-alerta-semanal');

  const btnCambiarPresupuesto = document.getElementById('btn-cambiar-presupuesto');
  const presupuestoActualTxt = document.getElementById('presupuesto-actual-txt');
  const budgetTextEl = document.getElementById('budget-text');
  const budgetPercentageEl = document.getElementById('budget-percentage');
  const budgetProgressBarEl = document.getElementById('budget-progress-bar');
  const budgetStatusMsg = document.getElementById('budget-status-msg');

  // Elementos de Gastos Recurrentes
  const recurrenteForm = document.getElementById('recurrente-form');
  const recImporte = document.getElementById('rec-importe');
  const recDescripcion = document.getElementById('rec-descripcion');
  const recCategoria = document.getElementById('rec-categoria');
  const recSubcategoria = document.getElementById('rec-subcategoria');
  const grupoOtraSubRec = document.getElementById('grupo-otra-sub-rec');
  const otraSubcategoriaRec = document.getElementById('otra-subcategoria-rec');
  const recMetodo = document.getElementById('rec-metodo');
  const listaRecurrentes = document.getElementById('lista-recurrentes');
  const btnAplicarRecurrentes = document.getElementById('btn-aplicar-recurrentes');
  const tituloFormRecurrente = document.getElementById('titulo-form-recurrente');
  const btnSubmitRecurrente = document.getElementById('btn-submit-recurrente');
  const btnCancelarRecurrente = document.getElementById('btn-cancelar-recurrente');

  if (fechaInput) fechaInput.value = new Date().toISOString().split('T')[0];
  if (ingFecha) ingFecha.value = new Date().toISOString().split('T')[0];

  let modoEdicionIndex = null;
  let modoEdicionIngIndex = null;
  let modoEdicionRecIndex = null;
  let monthlyBudget = parseFloat(localStorage.getItem('monthlyBudget')) || 500;
  let monedaActual = localStorage.getItem('monedaApp') || '€';
  let ingresos = JSON.parse(localStorage.getItem('ingresos')) || [];
  let gastosRecurrentes = JSON.parse(localStorage.getItem('gastosRecurrentes')) || [];
  let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

  const iconosIngresos = {
    "Salario": "💼",
    "Impresora 3D": "🖨️"
  };

  const nombresMesesNombres = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  if (ingCategoria) {
    ingCategoria.addEventListener('change', function() {
      if (this.value === "Otra") {
        if (grupoOtraIng) grupoOtraIng.style.display = 'block';
        if (otraCategoriaIng) {
          otraCategoriaIng.required = true;
          otraCategoriaIng.focus();
        }
      } else {
        if (grupoOtraIng) grupoOtraIng.style.display = 'none';
        if (otraCategoriaIng) {
          otraCategoriaIng.required = false;
          otraCategoriaIng.value = '';
        }
      }
    });
  }

  function actualizarFiltroIngresosMeses() {
    if (!filtroHistorialMesIngresos) return;
    const mesesSet = new Set();
    ingresos.forEach(i => {
      if (i.fecha) {
        mesesSet.add(i.fecha.substring(0, 7));
      }
    });

    const mesActualVal = filtroHistorialMesIngresos.value;
    filtroHistorialMesIngresos.innerHTML = '<option value="todos">Todos los meses</option>';
    
    Array.from(mesesSet).sort().reverse().forEach(ym => {
      const partes = ym.split('-');
      const year = partes[0];
      const monthIdx = parseInt(partes[1], 10) - 1;
      const nombreMesStr = nombresMesesNombres[monthIdx] || monthIdx;
      
      const opt = document.createElement('option');
      opt.value = ym;
      opt.textContent = `${nombreMesStr} ${year}`;
      filtroHistorialMesIngresos.appendChild(opt);
    });

    if (Array.from(mesesSet).includes(mesActualVal) || mesActualVal === 'todos') {
      filtroHistorialMesIngresos.value = mesActualVal;
    }
  }

  if (buscadorHistorialIngresos) buscadorHistorialIngresos.addEventListener('input', () => window.actualizarIngresosUI());
  if (filtroHistorialMesIngresos) filtroHistorialMesIngresos.addEventListener('change', () => window.actualizarIngresosUI());
  if (ordenHistorialIngresos) ordenHistorialIngresos.addEventListener('change', () => window.actualizarIngresosUI());

  window.actualizarIngresosUI = function() {
    actualizarFiltroIngresosMeses();
    if (!listaIngresos) return;
    listaIngresos.innerHTML = '';

    const mesIngresosSeleccionado = filtroHistorialMesIngresos ? filtroHistorialMesIngresos.value : 'todos';
    const textoBusquedaIng = buscadorHistorialIngresos ? buscadorHistorialIngresos.value.toLowerCase().trim() : '';
    const criterioOrdenIng = ordenHistorialIngresos ? ordenHistorialIngresos.value : 'recientes';

    let ingresosFiltrados = ingresos.filter(ing => {
      const cumpleMes = (mesIngresosSeleccionado === 'todos' || (ing.fecha && ing.fecha.startsWith(mesIngresosSeleccionado)));
      const cumpleBusqueda = (!textoBusquedaIng || (ing.descripcion && ing.descripcion.toLowerCase().includes(textoBusquedaIng)));
      return cumpleMes && cumpleBusqueda;
    });

    ingresosFiltrados.sort((a, b) => {
      if (criterioOrdenIng === 'recientes') {
        return new Date(b.fecha) - new Date(a.fecha);
      } else if (criterioOrdenIng === 'antiguos') {
        return new Date(a.fecha) - new Date(b.fecha);
      } else if (criterioOrdenIng === 'mayor-importe') {
        return parseFloat(b.importe) - parseFloat(a.importe);
      } else if (criterioOrdenIng === 'menor-importe') {
        return parseFloat(a.importe) - parseFloat(b.importe);
      }
      return 0;
    });

    let totalIng = 0;

    if (ingresosFiltrados.length === 0) {
      listaIngresos.innerHTML = '<li style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 10px;">No hay ingresos registrados.</li>';
      if (totalImporteIngresos) totalImporteIngresos.textContent = '0,00 ' + monedaActual;
      if (totalRegistrosIngresos) totalRegistrosIngresos.textContent = '0';
      return;
    }

    ingresosFiltrados.forEach((ing) => {
      const indexReal = ingresos.indexOf(ing);
      totalIng += parseFloat(ing.importe);

      const iconoCat = iconosIngresos[ing.categoria] || '💵';
      let fechaBonita = '';
      if (ing.fecha) {
        const partes = ing.fecha.split('-');
        fechaBonita = `${partes[2]}/${partes[1]}/${partes[0]}`;
      }

      const li = document.createElement('li');
      li.className = 'item-gasto';
      li.style.borderLeft = '3px solid #6b8e6b';
      li.innerHTML = `
        <div class="item-info">
          <strong>${ing.descripcion}</strong>
          <small>${fechaBonita} - ${iconoCat} ${ing.categoria}</small>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="item-importe" style="color: #6b8e6b;">+${Number(ing.importe).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual}</span>
          <button onclick="prepararEdicionIngreso(${indexReal})" style="background: #e5b060; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">✏️</button>
          <button onclick="eliminarIngreso(${indexReal})" style="background: #e8a38f; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">🗑️</button>
        </div>
      `;
      listaIngresos.appendChild(li);
    });

    if (totalImporteIngresos) totalImporteIngresos.textContent = totalIng.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + monedaActual;
    if (totalRegistrosIngresos) totalRegistrosIngresos.textContent = ingresosFiltrados.length;
    localStorage.setItem('ingresos', JSON.stringify(ingresos));
  };

  if (ingresoForm) {
    ingresoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let catIngFinal = ingCategoria ? ingCategoria.value : '';
      if (catIngFinal === "Otra" && otraCategoriaIng) {
        catIngFinal = otraCategoriaIng.value.trim();
      }

      const ingData = {
        fecha: ingFecha ? ingFecha.value : '',
        importe: ingImporte.value,
        descripcion: ingDescripcion.value,
        categoria: catIngFinal || 'General'
      };

      if (modoEdicionIngIndex !== null) {
        ingresos[modoEdicionIngIndex] = ingData;
      } else {
        ingresos.push(ingData);
      }

      resetearFormularioIngreso();
      localStorage.setItem('ingresos', JSON.stringify(ingresos));
      window.actualizarIngresosUI();
      window.actualizarDashboard();
      window.cambiarPestana('historial-ingresos');
    });
  }

  window.prepararEdicionIngreso = function(index) {
    const ing = ingresos[index];
    modoEdicionIngIndex = index;

    if (ingImporte) ingImporte.value = ing.importe;
    if (ingDescripcion) ingDescripcion.value = ing.descripcion;
    if (ingFecha) ingFecha.value = ing.fecha;

    if (ing.categoria === 'Salario' || ing.categoria === 'Impresora 3D') {
      if (ingCategoria) ingCategoria.value = ing.categoria;
      if (grupoOtraIng) grupoOtraIng.style.display = 'none';
    } else {
      if (ingCategoria) ingCategoria.value = 'Otra';
      if (grupoOtraIng) grupoOtraIng.style.display = 'block';
      if (otraCategoriaIng) {
        otraCategoriaIng.value = ing.categoria;
        otraCategoriaIng.required = true;
      }
    }

    if (tituloFormIngreso) tituloFormIngreso.textContent = 'Editar Ingreso';
    if (btnSubmitIngreso) btnSubmitIngreso.textContent = 'Guardar Cambios';
    if (btnCancelarEdicionIngreso) btnCancelarEdicionIngreso.style.display = 'block';
    window.cambiarPestana('ingresos');
  };

  function resetearFormularioIngreso() {
    modoEdicionIngIndex = null;
    if (ingresoForm) ingresoForm.reset();
    if (ingFecha) ingFecha.value = new Date().toISOString().split('T')[0];
    if (grupoOtraIng) grupoOtraIng.style.display = 'none';
    if (tituloFormIngreso) tituloFormIngreso.textContent = 'Registrar Nuevo Ingreso';
    if (btnSubmitIngreso) btnSubmitIngreso.textContent = 'Añadir Ingreso';
    if (btnCancelarEdicionIngreso) btnCancelarEdicionIngreso.style.display = 'none';
  }

  if (btnCancelarEdicionIngreso) {
    btnCancelarEdicionIngreso.addEventListener('click', resetearFormularioIngreso);
  }

  window.eliminarIngreso = function(index) {
    ingresos.splice(index, 1);
    localStorage.setItem('ingresos', JSON.stringify(ingresos));
    window.actualizarIngresosUI();
    window.actualizarDashboard();
  };

  // OCR de tickets
  if (fotoTicketInput) {
    fotoTicketInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(uploadEvent) {
          imagenTicketBase64 = uploadEvent.target.result;
          if (previewTicketImg) previewTicketImg.src = imagenTicketBase64;
          if (previewTicketContainer) previewTicketContainer.style.display = 'flex';
        };
        reader.readAsDataURL(file);

        if (ocrStatus) ocrStatus.style.display = 'block';
        
        Tesseract.recognize(
          file,
          'spa',
          { logger: info => console.log(info) }
        ).then(({ data: { text } }) => {
          if (ocrStatus) ocrStatus.style.display = 'none';
          
          const lineas = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
          
          if (lineas.length > 0 && (!descripcionInput.value || descripcionInput.value === '')) {
            descripcionInput.value = lineas[0].substring(0, 35);
          }

          let importeEncontrado = null;
          for (let i = lineas.length - 1; i >= 0; i--) {
            const lineaMayus = lineas[i].toUpperCase();
            if (lineaMayus.includes('TOTAL') && !lineaMayus.includes('SUBTOTAL')) {
              const match = lineas[i].match(/(\d+[\.,]\d{2})/);
              if (match) {
                importeEncontrado = match[1].replace(',', '.');
                break;
              }
            }
          }

          if (!importeEncontrado) {
            let numerosEncontrados = [];
            text.match(/(\d+[\.,]\d{2})/g)?.forEach(numStr => {
              numerosEncontrados.push(parseFloat(numStr.replace(',', '.')));
            });
            if (numerosEncontrados.length > 0) {
              importeEncontrado = Math.max(...numerosEncontrados).toFixed(2);
            }
          }

          if (importeEncontrado && (!importeInput.value || importeInput.value === '')) {
            importeInput.value = importeEncontrado;
          }

          const matchFecha = text.match(/(\d{2})[\/\-](\d{2})[\/\-](\d{2,4})/);
          if (matchFecha && fechaInput) {
            let [_, d, m, a] = matchFecha;
            if (a.length === 2) a = '20' + a;
            fechaInput.value = `${a}-${m}-${d}`;
          }

          alert("✨ ¡Ticket escaneado! Se ha intentado extraer el importe total y los datos principales.");
        }).catch(err => {
          console.error(err);
          if (ocrStatus) ocrStatus.style.display = 'none';
          alert("No se pudo leer el texto automáticamente, pero la foto se ha guardado como comprobante.");
        });
      }
    });
  }

  if (btnQuitarFoto) {
    btnQuitarFoto.addEventListener('click', () => {
      imagenTicketBase64 = null;
      if (fotoTicketInput) fotoTicketInput.value = '';
      if (previewTicketContainer) previewTicketContainer.style.display = 'none';
      if (previewTicketImg) previewTicketImg.src = '';
    });
  }

  window.verTicket = function(base64Image) {
    const modal = document.getElementById('modal-ticket');
    const imgModal = document.getElementById('img-modal-ticket');
    if (modal && imgModal) {
      imgModal.src = base64Image;
      modal.style.display = 'flex';
    }
  };

  window.cerrarModalTicket = function() {
    const modal = document.getElementById('modal-ticket');
    if (modal) modal.style.display = 'none';
  };

  // Modo Oscuro
  const modoOscuroGuardado = localStorage.getItem('modoOscuro') === 'true';
  if (modoOscuroGuardado) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (btnModoOscuro) btnModoOscuro.textContent = '☀️';
  }

  if (btnModoOscuro) {
    btnModoOscuro.addEventListener('click', () => {
      const esOscuro = document.documentElement.getAttribute('data-theme') === 'dark';
      if (esOscuro) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('modoOscuro', 'false');
        btnModoOscuro.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('modoOscuro', 'true');
        btnModoOscuro.textContent = '☀️';
      }
    });
  }

  function comprobarRevisionSemanal() {
    const ultimaRevision = localStorage.getItem('ultimaRevisionSemanal');
    const ahora = new Date().getTime();
    const sieteDiasMs = 7 * 24 * 60 * 60 * 1000;

    if (!ultimaRevision || (ahora - parseInt(ultimaRevision, 10)) >= sieteDiasMs) {
      const haceSieteDias = new Date(ahora - sieteDiasMs);
      const gastosUltimaSemana = gastos.filter(g => {
        if (!g.fecha) return false;
        const fechaGasto = new Date(g.fecha);
        return fechaGasto >= haceSieteDias && fechaGasto <= new Date();
      });

      const totalSemana = gastosUltimaSemana.reduce((acc, g) => acc + parseFloat(g.importe), 0);
      const mensajeAviso = `Has registrado ${gastosUltimaSemana.length} gastos esta semana por un total de <strong>${totalSemana.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual}</strong>. ¡Revisa tu presupuesto mensual para mantener tus ahorros al día!`;

      if (textoAlertaSemanal) textoAlertaSemanal.innerHTML = mensajeAviso;
      if (bannerAlertaSemanal) bannerAlertaSemanal.style.display = 'block';

      if (Notification.permission === 'granted') {
        new Notification("🔔 Revisión Semanal de Gastos", {
          body: `Llevas gastados ${totalSemana.toFixed(2)} ${monedaActual} en los últimos 7 días. ¡Entra a revisar tus finanzas!`
        });
      }

      localStorage.setItem('ultimaRevisionSemanal', ahora.toString());
    }
  }

  window.cerrarAlertaSemanal = function() {
    if (bannerAlertaSemanal) bannerAlertaSemanal.style.display = 'none';
  };

  if (btnActivarAlertas) {
    if (Notification.permission === 'granted') {
      btnActivarAlertas.textContent = '¡Notificaciones Activas! ✅';
      btnActivarAlertas.style.backgroundColor = '#6b8e6b';
    }

    btnActivarAlertas.addEventListener('click', () => {
      if (!('Notification' in window)) {
        alert("Este navegador no soporta notificaciones.");
        return;
      }

      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          btnActivarAlertas.textContent = '¡Notificaciones Activas! ✅';
          btnActivarAlertas.style.backgroundColor = '#6b8e6b';
          new Notification("💰 Mis Finanzas", {
            body: "¡Perfecto! Te recordaremos revisar tus finanzas cada semana."
          });
        } else {
          alert("Has denegado los permisos de notificación.");
        }
      });
    });
  }

  if (selectorMoneda) {
    selectorMoneda.value = monedaActual;
    selectorMoneda.addEventListener('change', (e) => {
      monedaActual = e.target.value;
      localStorage.setItem('monedaApp', monedaActual);
      document.querySelectorAll('.moneda-simbolo').forEach(el => el.textContent = monedaActual);
      window.actualizarPresupuestoUI();
      window.actualizarDashboard();
      window.actualizarApp();
      window.actualizarRecurrentesUI();
      window.actualizarIngresosUI();
    });
  }

  let graficoCategoriasInstance = null;
  let graficoSubcategoriasInstance = null;
  let graficoMetodosInstance = null;
  let graficoIngresosGastosInstance = null;
  let graficoFuentesIngresosInstance = null;

  const subcategoriasData = {
    "Ahorro casa": ["General"],
    "Alimentación": ["Supermercados"],
    "Educación": ["Cursos", "Libros y material de estudio", "Universidad"],
    "Finanzas y obligaciones": ["Impuestos", "Préstamos", "Seguro coche", "Seguro médico"],
    "Hogar": ["Artículos limpieza", "Hipoteca", "Mantenimiento", "Seguro", "Suministros"],
    "Imprevistos": ["General"],
    "Inversiones": ["Criptos", "Fondos", "Plan ahorro", "Plan pensiones"],
    "Mascota": ["Medicación", "Pienso", "Veterinario"],
    "Ocio": ["Aficiones", "Cine", "Conciertos", "Suscripciones", "Viajes"],
    "Regalos": ["Cumpleaños", "Festivos"],
    "Salud y bienestar": ["Cosmética", "Farmacia", "Gimnasio", "Peluquería"],
    "Transporte": ["Gasolina", "ITV", "Mecánico", "Parking", "Peajes"]
  };

  const iconosCategorias = {
    "Ahorro casa": "🏡",
    "Alimentación": "🛒",
    "Educación": "📚",
    "Finanzas y obligaciones": "⚖️",
    "Hogar": "🏠",
    "Imprevistos": "🚨",
    "Inversiones": "📈",
    "Mascota": "🐾",
    "Ocio": "🎟️",
    "Regalos": "🎁",
    "Salud y bienestar": "🩺",
    "Transporte": "🚗"
  };

  const iconosMetodosPago = {
    "Bizum": "📲",
    "Domiciliación": "📄",
    "Efectivo": "💵",
    "Tarjeta": "💳",
    "Transferencia": "🏦"
  };

  function cargarSubcategorias(catInput, subInput, grupoOtra, otraInput, categoriaSeleccionada, subcategoriaASeleccionar = null) {
    if (!subInput) return;
    subInput.innerHTML = '<option value="" disabled selected>Selecciona una subcategoría</option>';
    
    if (subcategoriasData[categoriaSeleccionada]) {
      const subcategoriasOrdenadas = [...subcategoriasData[categoriaSeleccionada]].sort((a, b) => 
        a.localeCompare(b, 'es')
      );

      subcategoriasOrdenadas.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub;
        option.textContent = sub;
        subInput.appendChild(option);
      });
      
      const optionOtra = document.createElement('option');
      optionOtra.value = "Otra";
      optionOtra.textContent = "Otra (escribir...)";
      subInput.appendChild(optionOtra);
    }

    if (subcategoriaASeleccionar) {
      if (subcategoriasData[categoriaSeleccionada] && subcategoriasData[categoriaSeleccionada].includes(subcategoriaASeleccionar)) {
        subInput.value = subcategoriaASeleccionar;
        if (grupoOtra) grupoOtra.style.display = 'none';
        if (otraInput) otraInput.required = false;
      } else {
        subInput.value = "Otra";
        if (grupoOtra) grupoOtra.style.display = 'block';
        if (otraInput) {
          otraInput.value = subcategoriaASeleccionar;
          otraInput.required = true;
        }
      }
    } else {
      if (grupoOtra) grupoOtra.style.display = 'none';
      if (otraInput) otraInput.required = false;
    }
  }

  if (categoriaInput) {
    categoriaInput.addEventListener('change', function() {
      cargarSubcategorias(categoriaInput, subcategoriaInput, grupoOtraSub, otraSubcategoriaInput, this.value);
    });
  }

  if (subcategoriaInput) {
    subcategoriaInput.addEventListener('change', function() {
      if (this.value === "Otra") {
        if (grupoOtraSub) grupoOtraSub.style.display = 'block';
        if (otraSubcategoriaInput) {
          otraSubcategoriaInput.required = true;
          otraSubcategoriaInput.focus();
        }
      } else {
        if (grupoOtraSub) grupoOtraSub.style.display = 'none';
        if (otraSubcategoriaInput) {
          otraSubcategoriaInput.required = false;
          otraSubcategoriaInput.value = '';
        }
      }
    });
  }

  if (recCategoria) {
    recCategoria.addEventListener('change', function() {
      cargarSubcategorias(recCategoria, recSubcategoria, grupoOtraSubRec, otraSubcategoriaRec, this.value);
    });
  }

  if (recSubcategoria) {
    recSubcategoria.addEventListener('change', function() {
      if (this.value === "Otra") {
        if (grupoOtraSubRec) grupoOtraSubRec.style.display = 'block';
        if (otraSubcategoriaRec) {
          otraSubcategoriaRec.required = true;
          otraSubcategoriaRec.focus();
        }
      } else {
        if (grupoOtraSubRec) grupoOtraSubRec.style.display = 'none';
        if (otraSubcategoriaRec) {
          otraSubcategoriaRec.required = false;
          otraSubcategoriaRec.value = '';
        }
      }
    });
  }

  if (btnCambiarPresupuesto) {
    btnCambiarPresupuesto.addEventListener('click', () => {
      const nuevoPresupuesto = prompt(`Introduce tu presupuesto mensual en ${monedaActual}:`, monthlyBudget);
      if (nuevoPresupuesto !== null && !isNaN(nuevoPresupuesto) && nuevoPresupuesto > 0) {
        monthlyBudget = parseFloat(nuevoPresupuesto);
        localStorage.setItem('monthlyBudget', monthlyBudget);
        window.actualizarPresupuestoUI();
      }
    });
  }

  window.actualizarPresupuestoUI = function() {
    if (presupuestoActualTxt) presupuestoActualTxt.textContent = monthlyBudget.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + monedaActual;

    const mesActualStr = new Date().toISOString().slice(0, 7);
    const gastosMesActual = gastos.filter(g => g.fecha && g.fecha.startsWith(mesActualStr));
    const totalMesVal = gastosMesActual.reduce((acc, g) => acc + parseFloat(g.importe), 0);

    if (budgetTextEl) budgetTextEl.textContent = `${totalMesVal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual} / ${monthlyBudget.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual}`;
    const rawPercentage = (totalMesVal / monthlyBudget) * 100;
    const percentage = Math.min(Math.round(rawPercentage), 100);
    if (budgetPercentageEl) budgetPercentageEl.textContent = `${rawPercentage.toFixed(0)}%`;

    if (budgetProgressBarEl) {
      budgetProgressBarEl.style.width = `${percentage}%`;
      if (rawPercentage >= 100) {
        budgetProgressBarEl.style.backgroundColor = '#bc4749';
      } else if (rawPercentage >= 80) {
        budgetProgressBarEl.style.backgroundColor = '#d4a373';
      } else {
        budgetProgressBarEl.style.backgroundColor = '#6b8e6b';
      }
    }

    if (budgetStatusMsg) {
      if (rawPercentage >= 100) {
        budgetStatusMsg.textContent = '⚠️ ¡Has superado el presupuesto asignado para este mes!';
      } else if (rawPercentage >= 80) {
        budgetStatusMsg.textContent = '⚡ Estás cerca de alcanzar el límite de tu presupuesto.';
      } else {
        budgetStatusMsg.textContent = '✨ ¡Vas por buen camino con tus ahorros este mes!';
      }
    }
  };

  window.actualizarRecurrentesUI = function() {
    if (!listaRecurrentes) return;
    listaRecurrentes.innerHTML = '';

    if (gastosRecurrentes.length === 0) {
      listaRecurrentes.innerHTML = '<li style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 10px;">No hay gastos fijos configurados.</li>';
      return;
    }

    gastosRecurrentes.forEach((rec, index) => {
      const iconoCat = iconosCategorias[rec.categoria] || '📌';
      const iconoPago = iconosMetodosPago[rec.metodoPago] || '💳';
      const li = document.createElement('li');
      li.className = 'item-gasto';
      li.innerHTML = `
        <div class="item-info">
          <strong>${rec.descripcion}</strong>
          <small>${iconoCat} ${rec.categoria} › ${rec.subcategoria} • ${iconoPago} ${rec.metodoPago}</small>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="item-importe">-${Number(rec.importe).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual}</span>
          <button onclick="prepararEdicionRecurrente(${index})" style="background: #e5b060; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">✏️</button>
          <button onclick="eliminarRecurrente(${index})" style="background: #e8a38f; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">🗑️</button>
        </div>
      `;
      listaRecurrentes.appendChild(li);
    });
  };

  if (recurrenteForm) {
    recurrenteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let subcatRecFinal = recSubcategoria ? recSubcategoria.value : '';
      if (subcatRecFinal === "Otra" && otraSubcategoriaRec) {
        subcatRecFinal = otraSubcategoriaRec.value.trim();
      }

      const recData = {
        importe: recImporte.value,
        descripcion: recDescripcion.value,
        categoria: recCategoria.value,
        subcategoria: subcatRecFinal || 'General',
        metodoPago: recMetodo.value
      };

      if (modoEdicionRecIndex !== null) {
        gastosRecurrentes[modoEdicionRecIndex] = recData;
      } else {
        gastosRecurrentes.push(recData);
      }

      resetearFormularioRecurrente();
      localStorage.setItem('gastosRecurrentes', JSON.stringify(gastosRecurrentes));
      window.actualizarRecurrentesUI();
    });
  }

  window.prepararEdicionRecurrente = function(index) {
    const rec = gastosRecurrentes[index];
    modoEdicionRecIndex = index;

    if (recImporte) recImporte.value = rec.importe;
    if (recDescripcion) recDescripcion.value = rec.descripcion;
    if (recCategoria) recCategoria.value = rec.categoria;
    
    cargarSubcategorias(recCategoria, recSubcategoria, grupoOtraSubRec, otraSubcategoriaRec, rec.categoria, rec.subcategoria);

    if (recMetodo) recMetodo.value = rec.metodoPago;

    if (tituloFormRecurrente) tituloFormRecurrente.textContent = 'Editar Gasto Fijo / Recurrente';
    if (btnSubmitRecurrente) btnSubmitRecurrente.textContent = 'Guardar Cambios';
    if (btnCancelarRecurrente) btnCancelarRecurrente.style.display = 'block';
  };

  function resetearFormularioRecurrente() {
    modoEdicionRecIndex = null;
    if (recurrenteForm) recurrenteForm.reset();
    if (grupoOtraSubRec) grupoOtraSubRec.style.display = 'none';
    if (recSubcategoria) recSubcategoria.innerHTML = '<option value="" disabled selected>Primero selecciona categoría</option>';
    if (tituloFormRecurrente) tituloFormRecurrente.textContent = 'Nuevo Gasto Fijo / Recurrente';
    if (btnSubmitRecurrente) btnSubmitRecurrente.textContent = 'Guardar Gasto Fijo';
    if (btnCancelarRecurrente) btnCancelarRecurrente.style.display = 'none';
  }

  if (btnCancelarRecurrente) {
    btnCancelarRecurrente.addEventListener('click', resetearFormularioRecurrente);
  }

  window.eliminarRecurrente = function(index) {
    gastosRecurrentes.splice(index, 1);
    localStorage.setItem('gastosRecurrentes', JSON.stringify(gastosRecurrentes));
    window.actualizarRecurrentesUI();
  };

  if (btnAplicarRecurrentes) {
    btnAplicarRecurrentes.addEventListener('click', () => {
      if (gastosRecurrentes.length === 0) {
        alert("No hay gastos fijos configurados para aplicar.");
        return;
      }
      const fechaHoy = new Date().toISOString().split('T')[0];
      gastosRecurrentes.forEach(rec => {
        gastos.push({
          fecha: fechaHoy,
          descripcion: rec.descripcion,
          importe: rec.importe,
          metodoPago: rec.metodoPago,
          categoria: rec.categoria,
          subcategoria: rec.subcategoria || 'General',
          fotoTicket: null
        });
      });
      localStorage.setItem('gastos', JSON.stringify(gastos));
      alert("¡Gastos fijos aplicados correctamente al mes actual!");
      window.cambiarPestana('historial');
    });
  }

  function actualizarFiltroAnos() {
    if (!filtroAno) return;
    const anosGastos = gastos.map(g => g.fecha ? g.fecha.split('-')[0] : new Date().getFullYear());
    const anosIngresos = ingresos.map(i => i.fecha ? i.fecha.split('-')[0] : new Date().getFullYear());
    const anos = [...new Set([...anosGastos, ...anosIngresos])].sort().reverse();
    const anoActualSeleccionado = filtroAno.value;
    
    filtroAno.innerHTML = '<option value="todos">Todos</option>';
    anos.forEach(ano => {
      const opt = document.createElement('option');
      opt.value = ano;
      opt.textContent = ano;
      filtroAno.appendChild(opt);
    });
    if (anos.includes(anoActualSeleccionado)) {
      filtroAno.value = anoActualSeleccionado;
    }
  }

  function actualizarFiltroHistorialMeses() {
    if (!filtroHistorialMes) return;
    const mesesSet = new Set();
    gastos.forEach(g => {
      if (g.fecha) {
        mesesSet.add(g.fecha.substring(0, 7));
      }
    });

    const mesActualVal = filtroHistorialMes.value;
    filtroHistorialMes.innerHTML = '<option value="todos">Todos los meses</option>';
    
    Array.from(mesesSet).sort().reverse().forEach(ym => {
      const partes = ym.split('-');
      const year = partes[0];
      const monthIdx = parseInt(partes[1], 10) - 1;
      const nombreMesStr = nombresMesesNombres[monthIdx] || monthIdx;
      
      const opt = document.createElement('option');
      opt.value = ym;
      opt.textContent = `${nombreMesStr} ${year}`;
      filtroHistorialMes.appendChild(opt);
    });

    if (Array.from(mesesSet).includes(mesActualVal) || mesActualVal === 'todos') {
      filtroHistorialMes.value = mesActualVal;
    }
  }

  if (filtroAno) filtroAno.addEventListener('change', () => window.actualizarDashboard());
  if (filtroMes) filtroMes.addEventListener('change', () => window.actualizarDashboard());
  if (filtroCategoria) filtroCategoria.addEventListener('change', () => window.actualizarDashboard());
  if (filtroMetodo) filtroMetodo.addEventListener('change', () => window.actualizarDashboard());
  if (filtroHistorialMes) filtroHistorialMes.addEventListener('change', () => window.actualizarApp());
  if (buscadorHistorial) buscadorHistorial.addEventListener('input', () => window.actualizarApp());
  if (ordenHistorial) ordenHistorial.addEventListener('change', () => window.actualizarApp());

  window.actualizarDashboard = function() {
    actualizarFiltroAnos();
    const anoSel = filtroAno ? filtroAno.value : 'todos';
    const mesSel = filtroMes ? filtroMes.value : 'todos';
    const catSel = filtroCategoria ? filtroCategoria.value : 'todas';
    const metodoSel = filtroMetodo ? filtroMetodo.value : 'todos';

    let gastosFiltrados = gastos.filter(g => {
      if (!g.fecha) return true;
      const partes = g.fecha.split('-');
      const partesAno = partes[0];
      const partesMes = partes[1];
      
      const cumpleAno = (anoSel === 'todos' || partesAno === anoSel);
      const cumpleMes = (mesSel === 'todos' || partesMes === mesSel);
      const cumpleCat = (catSel === 'todas' || g.categoria === catSel);
      const cumpleMetodo = (metodoSel === 'todos' || g.metodoPago === metodoSel);

      return cumpleAno && cumpleMes && cumpleCat && cumpleMetodo;
    });

    let ingresosFiltrados = ingresos.filter(i => {
      if (!i.fecha) return true;
      const partes = i.fecha.split('-');
      const cumpleAno = (anoSel === 'todos' || partes[0] === anoSel);
      const cumpleMes = (mesSel === 'todos' || partes[1] === mesSel);
      return cumpleAno && cumpleMes;
    });

    const totalFiltradoVal = gastosFiltrados.reduce((acc, g) => acc + parseFloat(g.importe), 0);
    const totalIngresosFiltradoVal = ingresosFiltrados.reduce((acc, i) => acc + parseFloat(i.importe), 0);

    if (resumenAnual) resumenAnual.textContent = totalFiltradoVal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + monedaActual;
    if (resumenIngresosFiltrado) resumenIngresosFiltrado.textContent = totalIngresosFiltradoVal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + monedaActual;

    const paletaPastelClara = [
      'rgba(247, 215, 178, 0.85)',
      'rgba(232, 163, 143, 0.8)',
      'rgba(215, 184, 156, 0.85)',
      'rgba(177, 194, 161, 0.8)',
      'rgba(245, 203, 152, 0.85)',
      'rgba(225, 190, 175, 0.8)',
      'rgba(201, 214, 188, 0.85)'
    ];

    const nombresMeses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    // 1. Ingresos vs. Gastos (Colores pastel unificados)
    const elGraficoIngGastos = document.getElementById('graficoIngresosGastos');
    if (elGraficoIngGastos && typeof Chart !== 'undefined') {
      const ctxIG = elGraficoIngGastos.getContext('2d');
      
      let labelsGrafico = [];
      let valoresGastosMeses = [];
      let valoresIngresosMeses = [];

      if (mesSel === 'todos') {
        labelsGrafico = nombresMeses;
        valoresGastosMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        valoresIngresosMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        gastosFiltrados.forEach(g => {
          if (g.fecha) {
            const mIndex = parseInt(g.fecha.split('-')[1], 10) - 1;
            if (mIndex >= 0 && mIndex <= 11) valoresGastosMeses[mIndex] += parseFloat(g.importe);
          }
        });

        ingresosFiltrados.forEach(i => {
          if (i.fecha) {
            const mIndex = parseInt(i.fecha.split('-')[1], 10) - 1;
            if (mIndex >= 0 && mIndex <= 11) valoresIngresosMeses[mIndex] += parseFloat(i.importe);
          }
        });
      } else {
        const idxMes = parseInt(mesSel, 10) - 1;
        labelsGrafico = [nombresMeses[idxMes]];
        valoresGastosMeses = [totalFiltradoVal];
        valoresIngresosMeses = [totalIngresosFiltradoVal];
      }

      if (graficoIngresosGastosInstance) graficoIngresosGastosInstance.destroy();
      graficoIngresosGastosInstance = new Chart(ctxIG, {
        type: 'bar',
        data: {
          labels: labelsGrafico,
          datasets: [
            {
              label: `Ingresos (${monedaActual})`,
              data: valoresIngresosMeses,
              backgroundColor: 'rgba(177, 194, 161, 0.85)', // Verde pastel unificado
              borderRadius: 6,
              borderWidth: 1,
              borderColor: 'rgba(155, 174, 139, 1)'
            },
            {
              label: `Gastos (${monedaActual})`,
              data: valoresGastosMeses,
              backgroundColor: 'rgba(232, 163, 143, 0.85)', // Melocotón pastel unificado
              borderRadius: 6,
              borderWidth: 1,
              borderColor: 'rgba(210, 135, 115, 1)'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: { grid: { display: false } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // 2. Distribución ingresos (Colores pastel unificados usando la misma paleta)
    const elGraficoFuentesIng = document.getElementById('graficoFuentesIngresos');
    if (elGraficoFuentesIng && typeof Chart !== 'undefined') {
      const ctxFI = elGraficoFuentesIng.getContext('2d');
      const porIngCat = {};
      ingresosFiltrados.forEach(i => {
        porIngCat[i.categoria] = (porIngCat[i.categoria] || 0) + parseFloat(i.importe);
      });

      if (graficoFuentesIngresosInstance) graficoFuentesIngresosInstance.destroy();
      graficoFuentesIngresosInstance = new Chart(ctxFI, {
        type: 'doughnut',
        data: {
          labels: Object.keys(porIngCat),
          datasets: [{
            data: Object.values(porIngCat),
            backgroundColor: paletaPastelClara.slice(0, Object.keys(porIngCat).length),
            borderWidth: 2,
            borderColor: document.documentElement.getAttribute('data-theme') === 'dark' ? '#292320' : '#faf7f2'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                  return ` ${label}: ${value.toLocaleString('es-ES', { minimumFractionDigits: 2 })} ${monedaActual} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }

    // 3. Distribución gastos
    const elGraficoCat = document.getElementById('graficoCategorias');
    if (elGraficoCat && typeof Chart !== 'undefined') {
      const ctxCat = elGraficoCat.getContext('2d');
      const porCat = {};
      gastosFiltrados.forEach(g => {
        porCat[g.categoria] = (porCat[g.categoria] || 0) + parseFloat(g.importe);
      });

      if (graficoCategoriasInstance) graficoCategoriasInstance.destroy();
      graficoCategoriasInstance = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
          labels: Object.keys(porCat),
          datasets: [{ 
            data: Object.values(porCat), 
            backgroundColor: paletaPastelClara.slice(0, Object.keys(porCat).length),
            borderWidth: 2,
            borderColor: document.documentElement.getAttribute('data-theme') === 'dark' ? '#292320' : '#faf7f2'
          }]
        },
        options: { 
          responsive: true,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                  return ` ${label}: ${value.toLocaleString('es-ES', { minimumFractionDigits: 2 })} ${monedaActual} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }

    // 4. Subcategorías gastos
    const elGraficoSub = document.getElementById('graficoSubcategorias');
    if (elGraficoSub && typeof Chart !== 'undefined') {
      const ctxSub = elGraficoSub.getContext('2d');
      const porSub = {};
      gastosFiltrados.forEach(g => {
        const subKey = g.subcategoria;
        porSub[subKey] = (porSub[subKey] || 0) + parseFloat(g.importe);
      });

      if (graficoSubcategoriasInstance) graficoSubcategoriasInstance.destroy();
      graficoSubcategoriasInstance = new Chart(ctxSub, {
        type: 'bar',
        data: {
          labels: Object.keys(porSub),
          datasets: [{
            label: `Gasto (${monedaActual})`,
            data: Object.values(porSub),
            backgroundColor: 'rgba(177, 194, 161, 0.85)',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: 'rgba(155, 174, 139, 1)'
          }]
        },
        options: { 
          responsive: true, 
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { display: false } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // 5. Método pago
    const elGraficoMet = document.getElementById('graficoMetodos');
    if (elGraficoMet && typeof Chart !== 'undefined') {
      const ctxMet = elGraficoMet.getContext('2d');
      const porMetodo = {};
      gastosFiltrados.forEach(g => {
        const metodoKey = g.metodoPago || 'No especificado';
        porMetodo[metodoKey] = (porMetodo[metodoKey] || 0) + parseFloat(g.importe);
      });

      if (graficoMetodosInstance) graficoMetodosInstance.destroy();
      graficoMetodosInstance = new Chart(ctxMet, {
        type: 'doughnut',
        data: {
          labels: Object.keys(porMetodo),
          datasets: [{
            data: Object.values(porMetodo),
            backgroundColor: paletaPastelClara.slice(0, Object.keys(porMetodo).length),
            borderWidth: 2,
            borderColor: document.documentElement.getAttribute('data-theme') === 'dark' ? '#292320' : '#faf7f2'
          }]
        },
        options: { 
          responsive: true, 
          plugins: { 
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                  return ` ${label}: ${value.toLocaleString('es-ES', { minimumFractionDigits: 2 })} ${monedaActual} (${percentage}%)`;
                }
              }
            }
          } 
        }
      });
    }
  };

  window.actualizarApp = function() {
    actualizarFiltroHistorialMeses();
    if (!listaGastos) return;
    listaGastos.innerHTML = '';
    let total = 0;

    const mesHistorialSeleccionado = filtroHistorialMes ? filtroHistorialMes.value : 'todos';
    const textoBusqueda = buscadorHistorial ? buscadorHistorial.value.toLowerCase().trim() : '';
    const criterioOrden = ordenHistorial ? ordenHistorial.value : 'recientes';

    let gastosMostrados = gastos.filter(g => {
      const cumpleMes = (mesHistorialSeleccionado === 'todos' || (g.fecha && g.fecha.startsWith(mesHistorialSeleccionado)));
      const cumpleBusqueda = (!textoBusqueda || (g.descripcion && g.descripcion.toLowerCase().includes(textoBusqueda)));
      return cumpleMes && cumpleBusqueda;
    });

    gastosMostrados.sort((a, b) => {
      if (criterioOrden === 'recientes') {
        return new Date(b.fecha) - new Date(a.fecha);
      } else if (criterioOrden === 'antiguos') {
        return new Date(a.fecha) - new Date(b.fecha);
      } else if (criterioOrden === 'mayor-importe') {
        return parseFloat(b.importe) - parseFloat(a.importe);
      } else if (criterioOrden === 'menor-importe') {
        return parseFloat(a.importe) - parseFloat(b.importe);
      }
      return 0;
    });

    gastosMostrados.forEach((gasto) => {
      const indexReal = gastos.indexOf(gasto);
      total += parseFloat(gasto.importe);

      let fechaBonita = '';
      if (gasto.fecha) {
        const partes = gasto.fecha.split('-');
        fechaBonita = `${partes[2]}/${partes[1]}/${partes[0]}`;
      }

      const iconoCat = iconosCategorias[gasto.categoria] || '📌';
      const iconoPago = iconosMetodosPago[gasto.metodoPago] || '💳';
      const metodoPagoTxt = gasto.metodoPago ? ` • ${iconoPago} ${gasto.metodoPago}` : '';

      let botonTicketHtml = '';
      if (gasto.fotoTicket) {
        botonTicketHtml = `<button onclick="verTicket('${gasto.fotoTicket}')" style="background: #b1c2a1; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;" title="Ver Ticket">🧾</button>`;
      }

      const li = document.createElement('li');
      li.className = 'item-gasto';
      li.innerHTML = `
        <div class="item-info">
          <strong>${gasto.descripcion}</strong>
          <small>${fechaBonita} - ${iconoCat} ${gasto.categoria} › ${gasto.subcategoria}${metodoPagoTxt}</small>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="item-importe">-${Number(gasto.importe).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${monedaActual}</span>
          ${botonTicketHtml}
          <button onclick="prepararEdicion(${indexReal})" style="background: #e5b060; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">✏️</button>
          <button onclick="eliminarGasto(${indexReal})" style="background: #e8a38f; width: auto; padding: 5px 8px; margin: 0; font-size: 0.8rem; border-radius: 6px; border: none; color: white; cursor: pointer;">🗑️</button>
        </div>
      `;
      listaGastos.appendChild(li);
    });

    if (totalImporte) totalImporte.textContent = total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + monedaActual;
    if (totalRegistros) totalRegistros.textContent = gastosMostrados.length;
    localStorage.setItem('gastos', JSON.stringify(gastos));
    actualizarFiltroAnos();
  };

  window.prepararEdicion = function(index) {
    const gasto = gastos[index];
    modoEdicionIndex = index;

    if (fechaInput) fechaInput.value = gasto.fecha;
    if (descripcionInput) descripcionInput.value = gasto.descripcion;
    if (importeInput) importeInput.value = gasto.importe;
    if (metodoPagoInput) metodoPagoInput.value = gasto.metodoPago || '';
    if (categoriaInput) categoriaInput.value = gasto.categoria;
    
    cargarSubcategorias(categoriaInput, subcategoriaInput, grupoOtraSub, otraSubcategoriaInput, gasto.categoria, gasto.subcategoria);

    imagenTicketBase64 = gasto.fotoTicket || null;
    if (imagenTicketBase64) {
      if (previewTicketImg) previewTicketImg.src = imagenTicketBase64;
      if (previewTicketContainer) previewTicketContainer.style.display = 'flex';
    } else {
      if (fotoTicketInput) fotoTicketInput.value = '';
      if (previewTicketContainer) previewTicketContainer.style.display = 'none';
      if (previewTicketImg) previewTicketImg.src = '';
    }

    if (btnSubmitForm) btnSubmitForm.textContent = 'Guardar Cambios';
    if (btnCancelarEdicion) btnCancelarEdicion.style.display = 'block';

    window.cambiarPestana('registro');
  };

  function resetearFormulario() {
    modoEdicionIndex = null;
    if (descripcionInput) descripcionInput.value = '';
    if (importeInput) importeInput.value = '';
    if (fechaInput) fechaInput.value = new Date().toISOString().split('T')[0];
    if (metodoPagoInput) metodoPagoInput.selectedIndex = 0;
    if (categoriaInput) categoriaInput.selectedIndex = 0;
    if (subcategoriaInput) subcategoriaInput.innerHTML = '<option value="" disabled selected>Primero selecciona una categoría</option>';
    if (grupoOtraSub) grupoOtraSub.style.display = 'none';
    if (otraSubcategoriaInput) otraSubcategoriaInput.value = '';
    
    imagenTicketBase64 = null;
    if (fotoTicketInput) fotoTicketInput.value = '';
    if (previewTicketContainer) previewTicketContainer.style.display = 'none';
    if (previewTicketImg) previewTicketImg.src = '';

    if (btnSubmitForm) btnSubmitForm.textContent = 'Añadir Gasto';
    if (btnCancelarEdicion) btnCancelarEdicion.style.display = 'none';
  }

  if (btnCancelarEdicion) btnCancelarEdicion.addEventListener('click', resetearFormulario);

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let subcatFinal = subcategoriaInput ? subcategoriaInput.value : '';
      if (subcatFinal === "Otra" && otraSubcategoriaInput) {
        subcatFinal = otraSubcategoriaInput.value.trim();
      }

      const gastoData = {
        fecha: fechaInput ? fechaInput.value : '',
        descripcion: descripcionInput ? descripcionInput.value : '',
        importe: importeInput ? importeInput.value : '0',
        metodoPago: metodoPagoInput ? metodoPagoInput.value : '',
        categoria: categoriaInput ? categoriaInput.value : '',
        subcategoria: subcatFinal,
        fotoTicket: imagenTicketBase64
      };

      if (modoEdicionIndex !== null) {
        gastos[modoEdicionIndex] = gastoData;
      } else {
        gastos.push(gastoData);
      }

      resetearFormulario();
      window.actualizarApp();
      window.cambiarPestana('historial');
    });
  }

  window.eliminarGasto = function(index) {
    gastos.splice(index, 1);
    window.actualizarApp();
  };

  // Inicializar
  window.actualizarPresupuestoUI();
  window.actualizarRecurrentesUI();
  window.actualizarIngresosUI();
  comprobarRevisionSemanal();
  window.cambiarPestana('ingresos');
});
