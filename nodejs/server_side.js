const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log('server running at http://${hostname}: ${port}/')
});
