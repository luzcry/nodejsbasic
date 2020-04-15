const fs = require("fs");
//el modulo firesystem permite poder trabajar con los archivos del sistema operativo

//crear nuevo archivo

fs.writeFile("./texto.txt", "linea uno", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Archivo creado");
});
console.log("ultima linea de codigo");


//un callback es una funcion que se ejecuta cuando termina el proceso