const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const causeRoute = require('./src/routes/causesRoute');


const app = express();
const PORT = process.env.port || 5000;


app.use(cors());
app.use(express.json());

app.use("/", causeRoute);


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})