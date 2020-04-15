const fs = require('fs');
//leer archivos
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});