// Crear un nuevo elemento de párrafo
let el = document.createElement('p');

// Asignar el texto a este nuevo párrafo
el.innerText = 'Luis Oliva';

// Resaltar el texto con un color de fondo distinto al rojo
el.style.backgroundColor = 'yellow'; // Cambiar por cualquier color menos el rojo
el.style.fontWeight = 'bold'; // Hacer el texto en negrita

// Agregar el nuevo elemento al documento
document.body.append(el);