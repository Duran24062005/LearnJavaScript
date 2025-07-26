// import db_prueba from "./db/datos.js";


//let nombre = prompt("Por favor, diga su nombre");
//let number = parseInt(prompt("Por favor, diga su edad"));

//console.log(nombre);
//console.log(typeof nombre);
//console.log(number);
//console.log(typeof number);


import db_prueba from "./db/datos.js";

    console.log(typeof db_prueba);
    console.log(db_prueba[0].id)

    db_prueba.push(
        {
            "id": 555,
            "fecha": "2028-07-18",
            "categoria": "Yurena",
            "descripcion": "electricidad",
            "monto": 2393
        }
    ); 
    
    for (let i = 0; i < db_prueba.length; i++) {
        console.table(db_prueba[i]);
    }

    console.log(db_prueba[db_prueba.length -1].id);