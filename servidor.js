const http = require("http");
const { Script } = require("vm");

function sitioweb(req, res){
    res.writeHead(200, {"Content-type": "text/plain"} );
    res.end("Mi primer servidor");
}

let servidor = http.createServer(sitioweb);

servidor.listen(6969, "192.168.0.2");

console.log("Servidor corriendo en el puerto 6969");

