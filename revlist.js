// Lista de tareas con estados
let tareas = [
    { nombre: "Estudiar JavaScript", estado: "pendiente" },
    { nombre: "Hacer ejercicio", estado: "completada" },
    { nombre: "Aprender Node.js", estado: "enProceso" }
];

// Función para mostrar todas las tareas
function mostrarTareas() {
    console.log("=== Lista de tareas ===");
    for (let tarea of tareas) {
        let estadoTexto = "";
        if (tarea.estado === "completada") {
            estadoTexto = "✅ Completada";
        } else if (tarea.estado === "enProceso") {
            estadoTexto = "⏳ En proceso";
        } else {
            estadoTexto = "❌ Pendiente";
        }
        console.log(`${tarea.nombre} - ${estadoTexto}`);
    }
}

// Función para agregar tarea con estado
function agregarTarea(nombreTarea, estado = "pendiente") {
    tareas.push({ nombre: nombreTarea, estado: estado });
    console.log(`Tarea "${nombreTarea}" agregada con estado "${estado}".`);
}

// Función para actualizar el estado de una tarea
function actualizarEstado(nombreTarea, nuevoEstado) {
    for (let tarea of tareas) {
        if (tarea.nombre === nombreTarea) {
            tarea.estado = nuevoEstado;
            console.log(`Tarea "${nombreTarea}" actualizada a "${nuevoEstado}".`);
            return;
        }
    }
    console.log(`No se encontró la tarea "${nombreTarea}".`);
}

function eliminartareas (nombreTarea){
    for (let i = 0; i < tareas.length; i++ ) {
        if (tareas[i].nombre === nombreTarea){
            tareas.splice(i,1)
            console.log(`Tarea "${nombreTarea}" eliminada con exito"`)
            return;
        }
    }
    console.log(`No se encontró la tarea "${nombreTarea}".`)
}

// --- Probamos las funciones ---
mostrarTareas();
agregarTarea("Hacer proyecto backend", "enProceso");
actualizarEstado("Estudiar JavaScript", "completada");
eliminartareas("Hacer proyecto backend");

module.exports = { tareas, agregarTarea, mostrarTareas, actualizarEstado, eliminartareas };
