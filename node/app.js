const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  
    console.log("reqeust arrived: " + Date.now().toString())

    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});


    // Send back a response and end the connection
    res.end(JSON.stringify(req.headers));

});

// Start the server on port 3000
app.listen(3008, '127.0.0.1');
console.log('Node server running on port 3008');  