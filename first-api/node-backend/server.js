var http = require('http');
var os = require("os");
var hostname = os.hostname();

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        Hostname: hostname,
        Time: new Date()
    }
    res.write(JSON.stringify(salida))
    res.end();
}).listen(8080);