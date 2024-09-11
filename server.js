const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

// Funzione per leggere norrisDb.js
const readNorrisJSON = () => {
    const filePath = path.join(__dirname,'norrisDb.json');
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

// Funzione per scrivere dentro norrisDb.js
const writeNorrisJSON = (newData) => {
    const filePath = path.join(__dirname, 'norrisDb.json');
    const fileString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileString);
}

const server = http.createServer(async (req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);

    const norrisDB = readNorrisJSON();

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return
    }

    const phrase  = await axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
        return response.data.value;
    }); 
    
    res.end(`<h1>${phrase}</h1>`);
})

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
})
