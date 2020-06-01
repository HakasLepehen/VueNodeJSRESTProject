const express = require('express');
const PATH = require('path');
const app = express();



app.use(express.static(PATH.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(PATH.resolve(__dirname, 'client', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server has been started...');
})