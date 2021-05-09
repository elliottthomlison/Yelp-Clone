require('dotenv').config();
const express = require("express")

//create an instance of express = achieved by storing it into a variable
const app = express()

//via .env the port number is called and process.env.PORT calls that number
const port = process.env.PORT
app.listen(8008, () => {
  console.log(`Server is up and listening on ${port}`);
});