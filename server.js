const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const getApi = require('./utils.js');

const server = http.createServer(async (req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);

    const phrase = await getApi();

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return
    }  
    
    res.end(`<h1>${phrase}</h1>`);
})

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
})
