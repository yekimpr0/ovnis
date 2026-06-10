document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-ovni');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const panelVacio = document.getElementById('panel-vacio');
    const resultadoContenedor = document.getElementById('resultado-contenedor');
    
    const resClasificacion = document.getElementById('resultado-clasificacion');
    const resPuntos = document.getElementById('resultado-puntos');
    const resNombre = document.getElementById('resumen-nombre');
    const resLugar = document.getElementById('resumen-lugar');
    const resRecomendacion = document.getElementById('resultado-recomendacion');
    const recomendacionCaja = document.getElementById('recomendacion-caja');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Lectura de valores de los inputs
        const nombre = document.getElementById('nombre-reporte').value.trim();
        const lugar = document.getElementById('lugar').value.trim();
        const puntosTestigos = parseInt(document.getElementById('testigos').value, 10);

        const tieneVideo = document.getElementById('tiene-video').checked;
        const tieneImagen = document.getElementById('tiene-imagen').checked;
        const detectadoRadar = document.getElementById('detectado-radar').checked;
        const explicacionCientifica = document.querySelector('input[name="explicacion-cientifica"]:checked').value;

        // Algoritmo matemático implícito
        let puntajeTotal = 0;
        puntajeTotal += puntosTestigos;

        if (tieneVideo) puntajeTotal += 5;
        if (tieneImagen) puntajeTotal += 3;
        if (detectadoRadar) puntajeTotal += 8;
        if (explicacionCientifica === 'si') puntajeTotal -= 6;

        if (puntajeTotal < 0) puntajeTotal = 0;

        // Evaluación de Rangos
        let clasificacion = "";
        let claseColor = "";
        let recomendacion = "";

        if (puntajeTotal <= 5) {
            clasificacion = "EVIDENCIA INSUFICIENTE (BAJA CONFIABILIDAD)";
            claseColor = "debil";
            recomendacion = "El material suministrado carece de trazas de soporte sólidas o presenta altas correlaciones con eventos ordinarios. El reporte se transfiere al archivo de baja prioridad.";
        } else if (puntajeTotal > 5 && puntajeTotal <= 14) {
            clasificacion = "ANOMALÍA ANALÍTICA MODERADA";
            claseColor = "moderada";
            recomendacion = "Registros con correlación multimedia parcial de testigos. Se sugiere activar protocolos de triangulación de datos satelitales en el teatro de operaciones.";
        } else {
            clasificacion = "ALERTA CRÍTICA - EVIDENCIA REGISTRADA FUERTE";
            claseColor = "fuerte";
            recomendacion = "Múltiples instrumentos de defensa enlazados confirman la traza técnica. Despachar de inmediato el informe analítico completo al mando central estratégico de la AARO.";
        }

        // Inyección dinámica de textos (DOM)
        resNombre.textContent = nombre;
        resLugar.textContent = lugar;
        resPuntos.textContent = `${puntajeTotal} Unidades`;
        resClasificacion.textContent = clasificacion;
        resRecomendacion.textContent = recomendacion;

        // Modificación de clases visuales usando JavaScript
        resClasificacion.className = "status-badge";
        recomendacionCaja.className = "protocol-box";
        
        // Manejo estético de colores según el puntaje obtenido
        resClasificacion.classList.add(`bg-${claseColor}`);
        recomendacionCaja.classList.add(`border-${claseColor}`);

        // Ocultar consola vacía y mostrar informe
        panelVacio.classList.add('hidden');
        resultadoContenedor.classList.remove('hidden');
    });

    // Evento para reiniciar el formulario por completo
    btnReiniciar.addEventListener('click', () => {
        form.reset();
        resultadoContenedor.classList.add('hidden');
        panelVacio.classList.remove('hidden');
    });
})