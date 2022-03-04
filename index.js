const express = require('express');
const app = express();
app.use(express.json());

app.get('/', async (request, response) => {
    return response.json({status: "OK"});
});

app.listen(3333, ()=> {
    console.log('🚀 Back-end started!');
});
