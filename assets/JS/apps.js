// 1.- Arreglo que almacena las tareas de mi CRUD
let tareas = JSON.parse(localStorage.getItem("tareas")) || []; // Recupera las tareas del localStorage o inicializa un arreglo vacío si no hay tareas guardadas

// 2.- Vincular el HTML con el JS (DOM)
const inputTarea = document.getElementById("nueva-tarea"); // input 
const btnAgregar = document.getElementById("btn-agregar"); // botón
const listaTareas = document.getElementById("lista-tareas"); // lista

// 3.- Mostrar tolas las tareas en la pantalla
function mostrarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tareasDeLaListaDelArreglo, index) => {
    const li = document.createElement("li"); // Crear un nuevo elemento <li>
    li.className =
      "list-group-item d-flex justify-content-between align-items-center"; // Asignar clases de Bootstrap para el estilo
    li.innerHTML = `
      <span>${tareasDeLaListaDelArreglo}</span>
      <div>
        <button class="btn btn-warning btn-sm me-2" onclick="editarTarea(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">Borrar</button>
      </div>
    `; // Asignar el contenido HTML al <li>
    listaTareas.appendChild(li); // Agregar el <li> a la lista de tareas
  }); // Recorrer el arreglo de tareas y crear un <li> para cada tarea
}

// 4.- Agregar una nueva tarea (Primero vamos a crear la función para recuperar el valor del input)
function agregarTarea() {
  const tarea = inputTarea.value.trim(); // Recupera el valor del input y elimina los espacios en blanco al inicio y al final
  if (tarea === "") {
    alert("Por favor, ingresa una tarea.");   // Verifica si el input está vacío y muestra un mensaje de alerta
    return;   // Si está vacío, sale de la función
  }
  tareas.push(tarea); // Agrega la nueva tarea al arreglo de tareas
  localStorage.setItem("tareas", JSON.stringify(tareas)); // Guarda el arreglo de tareas en el localStorage
  inputTarea.value = ""; // Limpia el input después de agregar la tarea
  mostrarTareas(); // Muestra la lista actualizada de tareas
}

// 5.- Borrar una tarea
function borrarTarea(index) {
  tareas.splice(index, 1); // Elimina la tarea del arreglo de tareas usando el índice
  localStorage.setItem("tareas", JSON.stringify(tareas)); // Actualiza el localStorage con el nuevo arreglo de tareas
  mostrarTareas(); // Muestra la lista actualizada de tareas después de borrar una tarea
}

// 6.- Editar una tarea, cuando le de clic, el valor se va al input, el botón debe cambiar a "Actualizar" y al dar clic se actualiza la tarea
function editarTarea(index) {
  inputTarea.value = tareas[index]; // Coloca el valor de la tarea en el input
  btnAgregar.innerText = "Actualizar"; // Cambia el texto del botón a "Actualizar"
  btnAgregar.onclick = function () { // Cambia la función del botón a actualizar
    const tareaActualizada = inputTarea.value.trim(); // Recupera el valor del input
    if (tareaActualizada === "") { // Verifica si el input está vacío
      alert("Por favor, ingresa una tarea."); // Si está vacío, muestra un mensaje de alerta
      return; // Y sale de la función
    }
    tareas[index] = tareaActualizada;
    localStorage.setItem("tareas", JSON.stringify(tareas));   // Actualiza el localStorage con el nuevo arreglo de tareas
    inputTarea.value = ""; // Limpia el input después de actualizar la tarea
    btnAgregar.innerText = "Agregar"; // Cambia el texto del botón de vuelta a "Agregar"
    btnAgregar.onclick = agregarTarea;  // Restaura la función original del botón
    mostrarTareas(); // Muestra la lista actualizada de tareas después de editar
  };
}
// Quiero que al escribir siempre inicie con Mayusculas 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1); // Convierte la primera letra de la cadena a mayúscula y devuelve la cadena modificada
}
inputTarea.addEventListener("input", function () {
  inputTarea.value = capitalizeFirstLetter(inputTarea.value); // Agrega un evento al input para que cada vez que se escriba, la primera letra se convierta a mayúscula
});

 // 7.- Quiero que  el imput sea trasparente y el borde en azul tenue
inputTarea.style.backgroundColor = "transparent"; // Cambia el color de fondo del input a transparente
inputTarea.style.border = "1px solid rgba(94, 255, 0, 0.5)"; // Cambia el color del borde del input a azul tenue
inputTarea.style.color = "White"; // Cambia el color del texto del input a blanco
inputTarea.style.borderRadius = "10px";   // Cambia el radio del borde del input a 10px para que tenga bordes redondeados

// 8.- Quiero que el botón de agregar tarea transparente con los bordes azul y el texto en negro
btnAgregar.style.backgroundColor = "transparent"; // Cambia el color de fondo del botón a transparente
btnAgregar.style.border = "1px solid rgba(94, 255, 0, 0.5)"; // Cambia el color del borde del botón a azul tenue
btnAgregar.style.color = "black"; // Cambia el color del texto del botón
btnAgregar.style.borderRadius = "5px"; // Cambia el radio del borde del botón a 5px para que tenga bordes redondeados






mostrarTareas();