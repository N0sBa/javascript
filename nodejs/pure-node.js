const http = require('http');

const server = http.createServer((request, response)=>{
    // response.setHeader('Content-Type', 'text/plain');
    let body = [];
    // console.log(request.method, request.url);
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', ()=>{
        body = Buffer.concat(body).toString();
        let userName = "Unknow";
        if (body.split('=')[1])  userName =  body.split('=')[1];
        // console.log(body);
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>${userName}</h1><form method="POST" action="/"><input name="username" type="text" /><button type="Submit">Submit</button></form>`);
        response.end();
    });

});

server.listen(3000);