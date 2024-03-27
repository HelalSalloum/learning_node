const { log } = require('console');
const http = require('http');

const server = http.createServer((req , res) => {
    if(req.url === "/") {
        res.end("home page");
    } else if(req.url == "/about") {
        res.end("about page");
    } else {
        res.end(`<h1> Error </h1>
        <h3> something went wrong </h3> `);
    }
})

//server.listen(5000);

const _ = require('lodash');
const arr = [1 , [2 , [3 , 4]]];
console.log(_.flattenDeep(arr));
