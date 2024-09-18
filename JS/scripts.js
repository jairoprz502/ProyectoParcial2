// scripts.js

function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);

    if (isNaN(distancia) || isNaN(tiempo) || tiempo === 0) {
        document.getElementById('resultado-velocidad').textContent = "Por favor ingresa valores válidos.";
    } else {
        const velocidad = distancia / tiempo;
        document.getElementById('resultado-velocidad').textContent = `La velocidad es: ${velocidad.toFixed(2)} m/s`;
    }
}

function calcularDistancia() {
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    const tiempo = parseFloat(document.getElementById('tiempo2').value);

    if (isNaN(velocidad) || isNaN(tiempo)) {
        document.getElementById('resultado-distancia').textContent = "Por favor ingresa valores válidos.";
    } else {
        const distancia = velocidad * tiempo;
        document.getElementById('resultado-distancia').textContent = `La distancia es: ${distancia.toFixed(2)} metros`;
    }
}

function calcularTiempo() {
    const distancia = parseFloat(document.getElementById('distancia2').value);
    const velocidad = parseFloat(document.getElementById('velocidad2').value);

    if (isNaN(distancia) || isNaN(velocidad) || velocidad === 0) {
        document.getElementById('resultado-tiempo').textContent = "Por favor ingresa valores válidos.";
    } else {
        const tiempo = distancia / velocidad;
        document.getElementById('resultado-tiempo').textContent = `El tiempo es: ${tiempo.toFixed(2)} segundos`;
    }
}

// FORMULAS PARA EL MRUV

function calcularVelocidadFinal() {
    const v0 = parseFloat(document.getElementById('v0').value);
    const aceleracion = parseFloat(document.getElementById('aceleracion').value);
    const tiempo = parseFloat(document.getElementById('tiempo-mruv').value);

    if (isNaN(v0) || isNaN(aceleracion) || isNaN(tiempo)) {
        document.getElementById('resultado-velocidad-final').textContent = "Por favor ingresa valores válidos.";
    } else {
        const vf = v0 + (aceleracion * tiempo);
        document.getElementById('resultado-velocidad-final').textContent = `La velocidad final es: ${vf.toFixed(2)} m/s`;
    }
}

function calcularAceleracion() {
    const vf = parseFloat(document.getElementById('v_final').value);
    const v0 = parseFloat(document.getElementById('v_inicial').value);
    const tiempo = parseFloat(document.getElementById('tiempo-aceleracion').value);

    if (isNaN(vf) || isNaN(v0) || isNaN(tiempo) || tiempo === 0) {
        document.getElementById('resultado-aceleracion').textContent = "Por favor ingresa valores válidos.";
    } else {
        const a = (vf - v0) / tiempo;
        document.getElementById('resultado-aceleracion').textContent = `La aceleración es: ${a.toFixed(2)} m/s²`;
    }
}

function calcularPosicion() {
    const v0 = parseFloat(document.getElementById('v0-posicion').value);
    const aceleracion = parseFloat(document.getElementById('aceleracion-posicion').value);
    const tiempo = parseFloat(document.getElementById('tiempo-posicion').value);

    if (isNaN(v0) || isNaN(aceleracion) || isNaN(tiempo)) {
        document.getElementById('resultado-posicion').textContent = "Por favor ingresa valores válidos.";
    } else {
        const posicion = (v0 * tiempo) + (0.5 * aceleracion * tiempo * tiempo);
        document.getElementById('resultado-posicion').textContent = `La posición es: ${posicion.toFixed(2)} metros`;
    }
}
