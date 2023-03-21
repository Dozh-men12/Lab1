var http=require ('http');
fs=require('fs');

http.createServer(function(solicitud,respuesta){
    fs.readFile('./acme.html',function(error,html){
        respuesta.write(html);
        respuesta.end();
    });
}).listen(8080)