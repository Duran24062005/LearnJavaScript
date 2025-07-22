// import db_prueba from "./db/datos.js";


//let nombre = prompt("Por favor, diga su nombre");
//let number = parseInt(prompt("Por favor, diga su edad"));

//console.log(nombre);
//console.log(typeof nombre);
//console.log(number);
//console.log(typeof number);


const db_prueba = [
    {
        "id": 1,
        "fecha": "2020-01-18",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 28495
    },
    {
        "id": 2,
        "fecha": "2020-01-06",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 14786
    },
    {
        "id": 3,
        "fecha": "2020-01-05",
        "categoria": "comida",
        "descripcion": "desayuno",
        "monto": 14045
    },
    {
        "id": 4,
        "fecha": "2020-02-28",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 26138
    },
    {
        "id": 5,
        "fecha": "2020-02-02",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 3708
    },
    {
        "id": 6,
        "fecha": "2020-02-09",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 26976
    },
    {
        "id": 7,
        "fecha": "2020-03-03",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 6238
    },
    {
        "id": 8,
        "fecha": "2020-03-24",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 10656
    },
    {
        "id": 9,
        "fecha": "2020-03-16",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 27059
    },
    {
        "id": 10,
        "fecha": "2020-04-03",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 17330
    },
    {
        "id": 11,
        "fecha": "2020-04-18",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 17700
    },
    {
        "id": 12,
        "fecha": "2020-04-25",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 24298
    },
    {
        "id": 13,
        "fecha": "2020-05-13",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 19339
    },
    {
        "id": 14,
        "fecha": "2020-05-01",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 24243
    },
    {
        "id": 15,
        "fecha": "2020-05-10",
        "categoria": "ocio",
        "descripcion": "película",
        "monto": 14494
    },
    {
        "id": 16,
        "fecha": "2020-06-12",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 16797
    },
    {
        "id": 17,
        "fecha": "2020-06-17",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 15663
    },
    {
        "id": 18,
        "fecha": "2020-06-21",
        "categoria": "comida",
        "descripcion": "desayuno",
        "monto": 13867
    },
    {
        "id": 19,
        "fecha": "2020-07-26",
        "categoria": "ocio",
        "descripcion": "streaming",
        "monto": 11695
    },
    {
        "id": 20,
        "fecha": "2020-07-19",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 27010
    },
    {
        "id": 21,
        "fecha": "2020-07-02",
        "categoria": "ocio",
        "descripcion": "streaming",
        "monto": 28570
    },
    {
        "id": 22,
        "fecha": "2020-08-03",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 18513
    },
    {
        "id": 23,
        "fecha": "2020-08-06",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 27047
    },
    {
        "id": 24,
        "fecha": "2020-08-21",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 25572
    },
    {
        "id": 25,
        "fecha": "2020-09-25",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 10270
    },
    {
        "id": 26,
        "fecha": "2020-09-10",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 11905
    },
    {
        "id": 27,
        "fecha": "2020-09-07",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 13681
    },
    {
        "id": 28,
        "fecha": "2020-10-12",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 24508
    },
    {
        "id": 29,
        "fecha": "2020-10-26",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 22050
    },
    {
        "id": 30,
        "fecha": "2020-10-15",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 8494
    },
    {
        "id": 31,
        "fecha": "2020-11-03",
        "categoria": "ocio",
        "descripcion": "película",
        "monto": 29670
    },
    {
        "id": 32,
        "fecha": "2020-11-15",
        "categoria": "ocio",
        "descripcion": "streaming",
        "monto": 24075
    },
    {
        "id": 33,
        "fecha": "2020-11-22",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 15148
    },
    {
        "id": 34,
        "fecha": "2020-12-16",
        "categoria": "ocio",
        "descripcion": "película",
        "monto": 28286
    },
    {
        "id": 35,
        "fecha": "2020-12-09",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 12734
    },
    {
        "id": 36,
        "fecha": "2020-12-28",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 8847
    },
    {
        "id": 37,
        "fecha": "2021-01-23",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 27844
    },
    {
        "id": 38,
        "fecha": "2021-01-19",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 25806
    },
    {
        "id": 39,
        "fecha": "2021-01-11",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 29930
    },
    {
        "id": 40,
        "fecha": "2021-02-23",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 26188
    },
    {
        "id": 41,
        "fecha": "2021-02-23",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 27007
    },
    {
        "id": 42,
        "fecha": "2021-02-13",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 5977
    },
    {
        "id": 43,
        "fecha": "2021-03-10",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 12648
    },
    {
        "id": 44,
        "fecha": "2021-03-12",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 17236
    },
    {
        "id": 45,
        "fecha": "2021-03-19",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 9588
    },
    {
        "id": 46,
        "fecha": "2021-04-26",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 23170
    },
    {
        "id": 47,
        "fecha": "2021-04-20",
        "categoria": "hogar",
        "descripcion": "agua",
        "monto": 19831
    },
    {
        "id": 48,
        "fecha": "2021-04-08",
        "categoria": "hogar",
        "descripcion": "agua",
        "monto": 14439
    },
    {
        "id": 49,
        "fecha": "2021-05-11",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 13372
    },
    {
        "id": 50,
        "fecha": "2021-05-13",
        "categoria": "hogar",
        "descripcion": "agua",
        "monto": 8295
    },
    {
        "id": 51,
        "fecha": "2021-05-01",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 18173
    },
    {
        "id": 52,
        "fecha": "2021-06-14",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 16670
    },
    {
        "id": 53,
        "fecha": "2021-06-27",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 20682
    },
    {
        "id": 54,
        "fecha": "2021-06-18",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 13272
    },
    {
        "id": 55,
        "fecha": "2021-07-01",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 6889
    },
    {
        "id": 56,
        "fecha": "2021-07-16",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 18699
    },
    {
        "id": 57,
        "fecha": "2021-07-05",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 17199
    },
    {
        "id": 58,
        "fecha": "2021-08-15",
        "categoria": "hogar",
        "descripcion": "agua",
        "monto": 12618
    },
    {
        "id": 59,
        "fecha": "2021-08-21",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 19753
    },
    {
        "id": 60,
        "fecha": "2021-08-09",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 9810
    },
    {
        "id": 61,
        "fecha": "2021-09-25",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 18752
    },
    {
        "id": 62,
        "fecha": "2021-09-13",
        "categoria": "ocio",
        "descripcion": "teatro",
        "monto": 8000
    },
    {
        "id": 63,
        "fecha": "2021-09-20",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 15601
    },
    {
        "id": 64,
        "fecha": "2021-10-01",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 13048
    },
    {
        "id": 65,
        "fecha": "2021-10-03",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 19565
    },
    {
        "id": 66,
        "fecha": "2021-10-17",
        "categoria": "ocio",
        "descripcion": "teatro",
        "monto": 8544
    },
    {
        "id": 67,
        "fecha": "2021-11-16",
        "categoria": "transporte",
        "descripcion": "bus",
        "monto": 21382
    },
    {
        "id": 68,
        "fecha": "2021-11-15",
        "categoria": "ocio",
        "descripcion": "teatro",
        "monto": 21314
    },
    {
        "id": 69,
        "fecha": "2021-11-19",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 24844
    },
    {
        "id": 70,
        "fecha": "2021-12-02",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 10522
    },
    {
        "id": 71,
        "fecha": "2021-12-16",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 17571
    },
    {
        "id": 72,
        "fecha": "2021-12-01",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 22722
    },
    {
        "id": 73,
        "fecha": "2022-01-23",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 28755
    },
    {
        "id": 74,
        "fecha": "2022-01-22",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 28232
    },
    {
        "id": 75,
        "fecha": "2022-01-09",
        "categoria": "ocio",
        "descripcion": "teatro",
        "monto": 8584
    },
    {
        "id": 76,
        "fecha": "2022-02-28",
        "categoria": "ocio",
        "descripcion": "evento",
        "monto": 4404
    },
    {
        "id": 77,
        "fecha": "2022-02-21",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 25155
    },
    {
        "id": 78,
        "fecha": "2022-02-09",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 16029
    },
    {
        "id": 79,
        "fecha": "2022-03-05",
        "categoria": "comida",
        "descripcion": "desayuno",
        "monto": 22601
    },
    {
        "id": 80,
        "fecha": "2022-03-27",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 29830
    },
    {
        "id": 81,
        "fecha": "2022-03-20",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 14287
    },
    {
        "id": 82,
        "fecha": "2022-04-23",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 18225
    },
    {
        "id": 83,
        "fecha": "2022-04-27",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 4196
    },
    {
        "id": 84,
        "fecha": "2022-04-26",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 15843
    },
    {
        "id": 85,
        "fecha": "2022-05-04",
        "categoria": "transporte",
        "descripcion": "bus",
        "monto": 17452
    },
    {
        "id": 86,
        "fecha": "2022-05-12",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 2918
    },
    {
        "id": 87,
        "fecha": "2022-05-23",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 14822
    },
    {
        "id": 88,
        "fecha": "2022-06-13",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 14671
    },
    {
        "id": 89,
        "fecha": "2022-06-25",
        "categoria": "salud",
        "descripcion": "medicinas",
        "monto": 13437
    },
    {
        "id": 90,
        "fecha": "2022-06-28",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 5895
    },
    {
        "id": 91,
        "fecha": "2022-07-14",
        "categoria": "hogar",
        "descripcion": "agua",
        "monto": 14915
    },
    {
        "id": 92,
        "fecha": "2022-07-03",
        "categoria": "transporte",
        "descripcion": "bus",
        "monto": 11187
    },
    {
        "id": 93,
        "fecha": "2022-07-13",
        "categoria": "ocio",
        "descripcion": "teatro",
        "monto": 4029
    },
    {
        "id": 94,
        "fecha": "2022-08-07",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 9908
    },
    {
        "id": 95,
        "fecha": "2022-08-08",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 28479
    },
    {
        "id": 96,
        "fecha": "2022-08-01",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 28383
    },
    {
        "id": 97,
        "fecha": "2022-09-01",
        "categoria": "ocio",
        "descripcion": "película",
        "monto": 8984
    },
    {
        "id": 98,
        "fecha": "2022-09-26",
        "categoria": "ocio",
        "descripcion": "película",
        "monto": 6578
    },
    {
        "id": 99,
        "fecha": "2022-09-06",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 4539
    },
    {
        "id": 100,
        "fecha": "2022-10-09",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 28037
    },
    {
        "id": 101,
        "fecha": "2022-10-28",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 14229
    },
    {
        "id": 102,
        "fecha": "2022-10-05",
        "categoria": "transporte",
        "descripcion": "metro",
        "monto": 8509
    },
    {
        "id": 103,
        "fecha": "2022-11-07",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 14388
    },
    {
        "id": 104,
        "fecha": "2022-11-08",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 15904
    },
    {
        "id": 105,
        "fecha": "2022-11-21",
        "categoria": "transporte",
        "descripcion": "taxi",
        "monto": 22171
    },
    {
        "id": 106,
        "fecha": "2022-12-26",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 22712
    },
    {
        "id": 107,
        "fecha": "2022-12-07",
        "categoria": "comida",
        "descripcion": "almuerzo",
        "monto": 21457
    },
    {
        "id": 108,
        "fecha": "2022-12-09",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 8400
    },
    {
        "id": 109,
        "fecha": "2023-01-06",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 10226
    },
    {
        "id": 110,
        "fecha": "2023-01-07",
        "categoria": "hogar",
        "descripcion": "gas",
        "monto": 3623
    },
    {
        "id": 111,
        "fecha": "2023-01-09",
        "categoria": "salud",
        "descripcion": "dentista",
        "monto": 7398
    },
    {
        "id": 112,
        "fecha": "2023-02-03",
        "categoria": "salud",
        "descripcion": "control médico",
        "monto": 27608
    },
    {
        "id": 113,
        "fecha": "2023-02-26",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 15992
    },
    {
        "id": 114,
        "fecha": "2023-02-24",
        "categoria": "comida",
        "descripcion": "cena",
        "monto": 18979
    },
    {
        "id": 115,
        "fecha": "2023-03-16",
        "categoria": "hogar",
        "descripcion": "electricidad",
        "monto": 2393
    },]

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