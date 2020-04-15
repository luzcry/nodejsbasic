//el modulo http permite hacer peticiones al server para responder la pagina web
const http = require("http");
//cuando creo un servidor tenemos que recibir la informacion de los navegadores (request) y cuando reciba la info tiene que responder (response)
const handleServer = function (req, res) {
  res.writeHead(404, {
    "Content-type": "text/html",
  });
  res.write("<h1>Hola mundo</h1>");
  res.end();
};

const server = http.createServer(handleServer);
server.listen(3000, function () {
  console.log("server on port 3000");
});
//el metodo listen le dice a que puerto va a escuchar mi servidor
//una vez inicializado el servidor toma solo el codigo antes de iniciar, hay que reiniciar para que tome los cambios
