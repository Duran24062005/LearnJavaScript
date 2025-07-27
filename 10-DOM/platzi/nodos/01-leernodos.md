# Cómo Leer Nodos con JavaScript

## Introducción

Los nodos en JavaScript representan elementos del DOM (Document Object Model) que forman la estructura de una página web. Cada elemento HTML, atributo, texto y comentario es un nodo que puede ser accedido y manipulado mediante JavaScript.

## Tipos de Nodos

### Principales tipos de nodos:
- **Element Node (Tipo 1)**: Elementos HTML como `<div>`, `<p>`, `<span>`
- **Text Node (Tipo 3)**: Contenido de texto dentro de elementos
- **Comment Node (Tipo 8)**: Comentarios HTML
- **Document Node (Tipo 9)**: El documento completo
- **Attribute Node (Tipo 2)**: Atributos de elementos

## Métodos para Seleccionar Nodos

### 1. getElementById()
Selecciona un elemento por su ID único.

```javascript
const elemento = document.getElementById('miId');
console.log(elemento.textContent);
```

### 2. getElementsByClassName()
Selecciona elementos por su clase CSS.

```javascript
const elementos = document.getElementsByClassName('miClase');
// Retorna una HTMLCollection (similar a un array)
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].textContent);
}
```

### 3. getElementsByTagName()
Selecciona elementos por su etiqueta HTML.

```javascript
const parrafos = document.getElementsByTagName('p');
Array.from(parrafos).forEach(p => {
    console.log(p.innerHTML);
});
```

### 4. querySelector()
Selecciona el primer elemento que coincida con un selector CSS.

```javascript
const primerDiv = document.querySelector('div');
const elemento = document.querySelector('.miClase');
const elementoPorId = document.querySelector('#miId');
```

### 5. querySelectorAll()
Selecciona todos los elementos que coincidan con un selector CSS.

```javascript
const todosLosDiv = document.querySelectorAll('div');
const elementosClase = document.querySelectorAll('.miClase');

todosLosDiv.forEach(div => {
    console.log(div.textContent);
});
```

## Propiedades de los Nodos

### Propiedades de contenido:
```javascript
const elemento = document.getElementById('miElemento');

// Obtener/establecer contenido de texto
console.log(elemento.textContent);
elemento.textContent = 'Nuevo texto';

// Obtener/establecer contenido HTML
console.log(elemento.innerHTML);
elemento.innerHTML = '<strong>Texto en negrita</strong>';

// Obtener solo texto (sin elementos hijos)
console.log(elemento.innerText);
```

### Propiedades de navegación:
```javascript
const elemento = document.getElementById('miElemento');

// Nodos padre e hijos
console.log(elemento.parentNode);        // Nodo padre
console.log(elemento.childNodes);        // Todos los nodos hijos
console.log(elemento.children);          // Solo elementos hijos
console.log(elemento.firstChild);        // Primer nodo hijo
console.log(elemento.lastChild);         // Último nodo hijo
console.log(elemento.firstElementChild); // Primer elemento hijo
console.log(elemento.lastElementChild);  // Último elemento hijo

// Nodos hermanos
console.log(elemento.nextSibling);        // Siguiente nodo hermano
console.log(elemento.previousSibling);   // Nodo hermano anterior
console.log(elemento.nextElementSibling); // Siguiente elemento hermano
console.log(elemento.previousElementSibling); // Elemento hermano anterior
```

### Propiedades de información:
```javascript
const elemento = document.getElementById('miElemento');

console.log(elemento.nodeName);    // Nombre del nodo (en mayúsculas)
console.log(elemento.nodeType);    // Tipo de nodo (número)
console.log(elemento.nodeValue);   // Valor del nodo
console.log(elemento.tagName);     // Nombre de la etiqueta
```

## Trabajando con Atributos

### Leer atributos:
```javascript
const elemento = document.getElementById('miElemento');

// Método getAttribute()
const clase = elemento.getAttribute('class');
const id = elemento.getAttribute('id');

// Acceso directo a propiedades
console.log(elemento.className);
console.log(elemento.id);
console.log(elemento.src);  // Para imágenes
console.log(elemento.href); // Para enlaces
```

### Verificar existencia de atributos:
```javascript
if (elemento.hasAttribute('class')) {
    console.log('El elemento tiene clase');
}

// Obtener todos los atributos
const atributos = elemento.attributes;
for (let i = 0; i < atributos.length; i++) {
    console.log(atributos[i].name + ': ' + atributos[i].value);
}
```

## Ejemplos Prácticos

### Ejemplo 1: Leer contenido de una lista
```javascript
const lista = document.getElementById('miLista');
const items = lista.getElementsByTagName('li');

console.log(`La lista tiene ${items.length} elementos:`);
Array.from(items).forEach((item, index) => {
    console.log(`${index + 1}. ${item.textContent}`);
});
```

### Ejemplo 2: Extraer información de una tabla
```javascript
const tabla = document.querySelector('table');
const filas = tabla.querySelectorAll('tr');

filas.forEach((fila, indice) => {
    const celdas = fila.querySelectorAll('td, th');
    const contenidoFila = Array.from(celdas).map(celda => celda.textContent);
    console.log(`Fila ${indice}:`, contenidoFila);
});
```

### Ejemplo 3: Leer datos de un formulario
```javascript
const formulario = document.getElementById('miFormulario');
const campos = formulario.querySelectorAll('input, select, textarea');

const datos = {};
campos.forEach(campo => {
    if (campo.name) {
        datos[campo.name] = campo.value;
    }
});

console.log('Datos del formulario:', datos);
```

### Ejemplo 4: Recorrer todos los nodos de un elemento
```javascript
function recorrerNodos(nodo, nivel = 0) {
    const indentacion = '  '.repeat(nivel);
    
    if (nodo.nodeType === Node.ELEMENT_NODE) {
        console.log(`${indentacion}Elemento: ${nodo.tagName}`);
    } else if (nodo.nodeType === Node.TEXT_NODE) {
        const texto = nodo.textContent.trim();
        if (texto) {
            console.log(`${indentacion}Texto: "${texto}"`);
        }
    }
    
    // Recorrer nodos hijos
    nodo.childNodes.forEach(hijo => {
        recorrerNodos(hijo, nivel + 1);
    });
}

// Usar la función
const contenedor = document.getElementById('contenedor');
recorrerNodos(contenedor);
```

## Consideraciones de Rendimiento

### Mejores prácticas:
1. **Cache las referencias**: Guarda las referencias a nodos frecuentemente usados
```javascript
const elemento = document.getElementById('miElemento'); // Una sola vez
// Usar 'elemento' en lugar de volver a seleccionarlo
```

2. **Usa querySelectorAll con moderación**: Es más lento que métodos específicos
```javascript
// Más rápido
const elemento = document.getElementById('miId');

// Más lento
const elemento = document.querySelector('#miId');
```

3. **Minimiza accesos al DOM**: Agrupa operaciones de lectura
```javascript
// Menos eficiente
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].textContent);
    console.log(elementos[i].className);
}

// Más eficiente
elementos.forEach(elemento => {
    const texto = elemento.textContent;
    const clase = elemento.className;
    console.log(texto, clase);
});
```

## Manejo de Errores

Siempre verifica que los elementos existan antes de intentar leerlos:

```javascript
const elemento = document.getElementById('miElemento');

if (elemento) {
    console.log(elemento.textContent);
} else {
    console.log('Elemento no encontrado');
}

// O usando optional chaining (ES2020+)
console.log(elemento?.textContent ?? 'Elemento no encontrado');
```

## Conclusión

Leer nodos con JavaScript es fundamental para la manipulación del DOM. Los métodos y propiedades mostrados te permiten acceder y extraer información de cualquier elemento en una página web de manera eficiente. Recuerda siempre considerar el rendimiento y manejar casos donde los elementos puedan no existir.