const axios = require('axios').default;
const fs = require('fs');
const path = require('path');

// Funzione per leggere norrisDb.js
const readNorrisJSON = () => {
    const filePath = path.join(__dirname, 'db', 'norrisDb.json');
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

// Funzione per scrivere dentro norrisDb.js
const writeNorrisJSON = (newData) => {
    const filePath = path.join(__dirname,'db', 'norrisDb.json');
    const fileString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileString);
}

// Funzione che chiama l'API
const getApi = async () => {    
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');

        let newPhrase = response.data.value;

        const norrisDB = readNorrisJSON();
    
    
        // Controllo se la frase è già presente dentro norrisDb.json
        if (norrisDB.includes(newPhrase)) {
            console.log(`${newPhrase} | è già presente`);
            await getApi();
        }    
    
        // Se la frase non è presente viene aggiunta al file e viene restituita
        await writeNorrisJSON([...norrisDB, newPhrase]);
        console.log(`${newPhrase} | è stata aggiunta`);
        return response.data.value;

    } catch (error) {
        console.log(`Error message: ${error.message}`);
        return "";
    } 
}

module.exports = getApi