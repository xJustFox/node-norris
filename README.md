<h1>node-norris</h1>
Esercizio Sfruttando l’api https://api.chucknorris.io/jokes/random creare un applicazione che scarica una battuta random, la aggiunge ad un file json norrisDb.json e la mostra all’utente.<br>
Il file json quindi dovrà contenere la lista di tutte le battute scaricate nell’arco del tempo.<br>
Per evitare che nodemon riavvii il server ogni volta che questo file viene modificato, aggiungete la seguente configurazione nel file package.json: <br>
<body>

    "nodemonConfig": {
        "ignore": ["norrisDb.json"]
    }
<body>
E ricordate, con Chuck Norris le API non hanno il coraggio di ritornare un errore, per paura che Chuck le punisca.
<h3>BONUS:</h3>
Quando viene scaricata una battuta, controllare che questa non sia già presente nel file json locale. Se lo è, caricare un altra battuta.
