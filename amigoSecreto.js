// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que el nombre contenga solo letras (mayúsculas o minúsculas, con espacios permitidos)
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!soloLetras.test(nombre)) {
        alert("Use unicamente letras para el nombre.");
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Limpiar campo de texto
    input.value = "";

    // Actualizar lista
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

