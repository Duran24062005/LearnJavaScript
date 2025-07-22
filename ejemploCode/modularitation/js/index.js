// CRUD - Simple e JavaScript
import createProduct from "./CRUD/create.js";
import readProduct from "./CRUD/read.js";
import deleteProduct from "./CRUD/delete.js";
import updateProduct from "./CRUD/update.js";

function main() {
    /* 
        Funcion de entrada a el programa
    */

    let program = true;
    alert(`
    ===============================
    === Bienvenido a VerdeFruta ===
    ===============================
    `);

    while (program) {
        let userData = prompt(`
        ===============================
        === Bienvenido a VerdeFruta ===
        ===============================
        Elige una opción para continuar:
            1. agregar una nueva fruta o verdura.
            2. Ver todo el stock.
            3. acrtualizar el stock.
            4. eliminar un producto.
            5. Salir
        ===============================
        `);
        switch (userData) {
            case '1':
                alert('agregar una nueva fruta o verdura.');
                createProduct();
                break;

            case '2':
                alert('Ver todo el stock.')
                readProduct();
                break;

            case '3':
                alert('acrtualizar el stock.')
                updateProduct();
                break;

            case '4':
                alert('eliminar un producto.')
                deleteProduct();
                break;

            case '5':
                alert('Saliendo');
                program = false;
                break;
        
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
};

main();