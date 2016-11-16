//express 도입
//express란, web application 프레임워크
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/


//위 소스를 풀어서 설명
var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>node js Sever</h1> <hr>\n');
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
