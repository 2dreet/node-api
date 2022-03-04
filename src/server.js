const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ status: "On" });
});

app.get('/users', (request, response) => {
    const users = fs.readFileSync(`users.json`, {encoding:'utf8', flag:'r'});
    return response.json(JSON.parse(users));
});

app.listen(3333, () => {
    console.log("Server running on port 3333!");
});

