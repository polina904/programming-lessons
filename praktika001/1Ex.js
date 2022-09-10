const express = require('express');
const app = express();

let vyzov = [];

app.get('/call', (req, res) => {
    vyzov.push(req.query);
    res.send('Regisraziya challenge');
});

app.get('/calls', (req, res) => {
    res.send(vyzov.map(el => JSON.stringify(el)).join('<br />'));
});

app.get('/send', (req, res) => {
    vyzov = vyzov.filter(el => el.name !== req.query.name);
    res.send('Gruppa send');
});

app.listen(3000, () => console.log("Port 3000, listening"));


