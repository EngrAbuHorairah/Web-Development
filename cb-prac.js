const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const tim = fs.readFileSync('timer-js.html');
const webp  = fs.readFileSync('Web-project-1.html');


const server = http.createServer((req, res)=>{
    console.log(res.url);
    let url = req.url;
    
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(url)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });