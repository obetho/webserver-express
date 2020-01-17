const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Obeth',
            edad: 37,
            url: 'localhost:8080' + req.url;
        }

        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchando en puerto 8080');