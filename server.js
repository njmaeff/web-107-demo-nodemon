var http = require('http');
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<body><h1>Hello World</h1></body>');

}).listen(8080);