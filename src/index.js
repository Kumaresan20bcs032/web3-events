const express = require("express");

const app = express(); //Initilize express framework here

//Declare middlewares here
app.use(express.json())//Parse incoming json data

app.get('/', (req, res) => {
    return res.json({ message: 'Application is running' });
})
//Take port number in environment file
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/`);
})