var http = require('http'),
    faye = require('faye');

// create a messages server on a certain uri
var server = http.createServer(),
    msgserver = new faye.NodeAdapter({mount: '/messages', timeout: 30});

// run server (listen on port 10000)
msgserver.attach(server);
server.listen(10000);
