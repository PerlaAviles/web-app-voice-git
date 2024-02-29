// Espera a que se cargue el documento
document.addEventListener('DOMContentLoaded', function() {
    const btnIdentificar = document.getElementById('btnIdentificar');
    const inputOrden = document.getElementById('orden');
    const resultado = document.getElementById('resultado');

    // Agrega un event listener al botón de identificar orden
    btnIdentificar.addEventListener('click', function() {
        // Captura la orden ingresada por voz
        const orden = inputOrden.value.trim();

        // Aquí puedes agregar la lógica para identificar la orden
        // Por ejemplo, puedes enviarla a un servidor para procesarla
        // y recibir la respuesta para mostrarla en el resultado
        resultado.textContent = `La orden ingresada es: ${orden}`;
    });

    // Configurar el reconocimiento de voz
    const reconocimientoVoz = new webkitSpeechRecognition() || new SpeechRecognition();
    reconocimientoVoz.lang = 'es-ES';

    // Evento que se dispara cuando se obtiene un resultado del reconocimiento de voz
    reconocimientoVoz.onresult = function(event) {
        const resultadoVoz = event.results[0][0].transcript;
        inputOrden.value = resultadoVoz;
    };

    // Evento que se dispara cuando se detecta un error en el reconocimiento de voz
    reconocimientoVoz.onerror = function(event) {
        console.error('Error en el reconocimiento de voz:', event.error);
    };

    // Agregar evento de clic al input para iniciar el reconocimiento de voz
    inputOrden.addEventListener('click', function() {
        reconocimientoVoz.start();
    });
});