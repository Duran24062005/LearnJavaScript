import { products } from "../db/products.js"

export default function createProduct() {
    let data = parseInt(prompt(`
        ===============================
        === Bienvenido a VerdeFruta ===
        ===============================
        Elige una opción para continuar:
            1. Ver stock completo.
            2. Ver todo el stock.
            3. Salir
        ===============================
        `));
    switch (data) {
        case 1:
            alert(JSON.stringify(products, null, 2));
            break;
        
        case 2:
            for (let index = 0; index < products.length; index++) {
                let tatalDate = `
                name: ${products[index].name},
                description: ${products[i].description},
                price: ${products[i].price}
                `;
            };
            alert(JSON.stringify(tatalDate, null, 2));
            break;
        
        case 3:
            alert(`Gracias por ver.`);
            break;
    
        default:
            alert(`Por favor ingresa una opción valida.`);
            break;
    }
};