// CRUD - Simple e JavaScript
import createProduct from "./CRUD/create";
import readProduct from "./CRUD/read";
import deleteProduct from "./CRUD/delete";
import updateProduct from "./CRUD/update";

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
                alert('agregar una nueva fruta o verdura.')
                break;

            case '2':
                alert('Ver todo el stock.')
                break;

            case '3':
                alert('acrtualizar el stock.')
                break;

            case '4':
                alert('eliminar un producto.')
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