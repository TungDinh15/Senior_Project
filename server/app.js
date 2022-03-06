// ALL DEPENDENCIES
const express = require('express');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
});

// SERVER RUN
app.listen(3001, () => {
    console.log("Server is running")
})