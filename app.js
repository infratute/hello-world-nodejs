var http = require('http');


function onRequest(request, respose){
    respose.writeHead(200, {'Content-Type':'text/plain'});
    respose.write("Hello World - Docker Training - Infratute IT Labs");
    respose.end();
}

http.createServer(onRequest).listen(5000);