// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";
    
    // Recorrer el array y agregar cada nombre como un <li> con botón de eliminar
    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado y mostrar el resultado
    document.getElementById("resultado").innerHTML = `<p>🎉 ${amigos[indiceAleatorio]} es el amigo secreto! 🎉</p>`;
}
