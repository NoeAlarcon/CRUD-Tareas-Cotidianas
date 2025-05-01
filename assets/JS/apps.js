// 1.- Arreglo que almacena las tareas de mi CRUD
let tareas = ["Casa", "Trabajo", "Estudio", "Ejercicio"];

// 2.- Vincular el HTML con el JS (DOM)
const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");

// 3.- Mostrar tolas las tareas en la pantalla
function mostrarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tareasDeLaListaDelArreglo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${tareasDeLaListaDelArreglo}</span>
      <div>
        <button class="btn btn-warning btn-sm me-2" onclick="editarTarea(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">Borrar</button>
      </div>
    `;
    listaTareas.appendChild(li);
  });
}

mostrarTareas();
  