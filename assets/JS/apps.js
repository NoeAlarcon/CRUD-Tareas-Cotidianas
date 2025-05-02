// 1.- Arreglo que almacena las tareas de mi CRUD
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

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

// 4.- Agregar una nueva tarea (Primero vamos a crear la función para recuperar el valor del input)
function agregarTarea() {
  const tarea = inputTarea.value.trim();
  if (tarea === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  inputTarea.value = "";
  mostrarTareas();
}

// 5.- Borrar una tarea
function borrarTarea(index) {
  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
}

// 6.- Editar una tarea, cuando le de clic, el valor se va al input, el botón debe cambiar a "Actualizar" y al dar clic se actualiza la tarea
function editarTarea(index) {
  inputTarea.value = tareas[index];
  btnAgregar.innerText = "Actualizar";
  btnAgregar.onclick = function () {
    const tareaActualizada = inputTarea.value.trim();
    if (tareaActualizada === "") {
      alert("Por favor, ingresa una tarea.");
      return;
    }
    tareas[index] = tareaActualizada;
    localStorage.setItem("tareas", JSON.stringify(tareas));
    inputTarea.value = "";
    btnAgregar.innerText = "Agregar";
    btnAgregar.onclick = agregarTarea;
    mostrarTareas();
  };
}
// Quiero que al escribir siempre inicie con MAyusculas 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
inputTarea.addEventListener("input", function () {
  inputTarea.value = capitalizeFirstLetter(inputTarea.value);
});


mostrarTareas();