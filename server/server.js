const express = require("express")

//create an instance of express = achieved by storing it into a variable
const app = express()

const port = 8008
app.listen(8008, () => {
  console.log(`Server is up and listening on ${port}`);
});