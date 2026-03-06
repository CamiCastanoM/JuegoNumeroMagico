let numeroMagico;
let intentos = 10;
let listaIntentos = [];
const maxIntentos = 10;

function iniciarJuego() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    intentos = maxIntentos;
    listaIntentos = [];

    document.getElementById("contador").textContent = intentos;
    document.getElementById("mensaje").textContent = "¡Comienza a jugar!";
    document.getElementById("listaIntentos").innerHTML = "";
    document.getElementById("numeroInput").disabled = false;
    document.getElementById("btnAdivinar").disabled = false;
    document.getElementById("btnReiniciar").classList.add("oculto");

    actualizarBarra();
}

function verificarNumero() {
    const input = document.getElementById("numeroInput");
    const numeroUsuario = Number(input.value);
    const mensaje = document.getElementById("mensaje");

    if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "Ingresa un número válido entre 1 y 100.";
        return;
    }

    listaIntentos.push(numeroUsuario);
    agregarBurbuja(numeroUsuario);

    intentos--;
    document.getElementById("contador").textContent = intentos;
    actualizarBarra();

    if (numeroUsuario === numeroMagico) {
        mensaje.textContent = "🎉 ¡Correcto! Has acertado.";
        terminarJuego();
    } 
    else if (intentos === 0) {
        mensaje.textContent = `💔 Se acabaron los intentos. Era ${numeroMagico}.`;
        terminarJuego();
    } 
    else if (numeroUsuario < numeroMagico) {
        mensaje.textContent = `Tu número (${numeroUsuario}) es muy bajo.`;
    } 
    else {
        mensaje.textContent = `Tu número (${numeroUsuario}) es muy alto.`;
    }

    input.value = "";
}

function agregarBurbuja(numero) {
    const div = document.createElement("div");
    div.classList.add("burbuja");
    div.textContent = numero;
    document.getElementById("listaIntentos").appendChild(div);
}

function actualizarBarra() {
    const porcentaje = (intentos / maxIntentos) * 100;
    document.getElementById("barraProgreso").style.width = porcentaje + "%";
}

function terminarJuego() {
    document.getElementById("numeroInput").disabled = true;
    document.getElementById("btnAdivinar").disabled = true;
    document.getElementById("btnReiniciar").classList.remove("oculto");
}

document.getElementById("btnAdivinar").addEventListener("click", verificarNumero);
document.getElementById("btnReiniciar").addEventListener("click", iniciarJuego);

iniciarJuego();