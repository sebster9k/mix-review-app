const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const axios = require('axios');



app.get('/api/home', (req, res) => {
    res.json({ message: 'Hello World!' });
})


app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})