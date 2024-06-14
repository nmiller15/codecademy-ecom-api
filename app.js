const express = require('express');

const app = express();
const PORT = '8080'

app.get('/', (req, res) => {
    res.json('test ok');
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});