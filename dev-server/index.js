const
    http = require('http'),
    serveStatic = require('serve-static');

const port = 3000;
const serve = serveStatic('./');

const server = http.createServer((req, res) => {
    serve(req, res);
});

console.log(`Listening on port ${port}`);

server.listen(port);
