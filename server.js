var http = require('http');
var fs = require('fs');


//create port object
var port = process.env.port || 8080;
//create a server object:

const extension = {
    'js' : 'application/javascript',
    'css' : 'text/css',
    'html' : 'text/html',
    'ico' : 'image/x-icon'
}

var server = http.createServer(function (request, response) {
    // read file from file system
    const url = request.url;

    if(url === '/'){
        fs.readFile('./public/index.html', function (err, data) {
            if (err) {
                response.statusCode = 500;
                response.end(`Error getting the file: ${err}.`);
            } else {
                // if the file is found, set Content-type and send data
                response.writeHead(200, {'Content-type': 'text/html'});
                response.end(data);
            }
        });
    }else{
        fs.readFile('./'+url, function (err, data) {
            if (err) {
                response.statusCode = 500;
                response.end(`Error getting the file: ${err}.`);
            } else {
                // if the file is found, set Content-type and send data
                var type = url.match('\.(js|css|html|icon)$')[1];
                response.writeHead(200, {'Content-type': 
                                            type === '' ? 'text/plain' 
                                            : extension[type]});
                response.end(data);
            }
        });
    }
    
});

//the server object listens on port 8080
server.listen(port, function (err) {
    if(err) throw err;
    const host = 'localhost';
    console.log('server listening at http://%s:%s', 
                host, port);
});