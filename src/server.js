const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ status: "On" });
});

app.listen(3333, () => {
    console.log("Server running on port 3333!");
});

