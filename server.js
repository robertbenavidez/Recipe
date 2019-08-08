const express = require('express');
const server = express();




server.get('/', (req, res) => {
    const name = req.query;
    console.log(name);
    res.status(200).json({api: 'up and running'});
})


module.exports = server