require('dotenv').config();
const express = require("express")

//create an instance of express = achieved by storing it into a variable
const app = express()

app.get('/getRestaurants', (req, res) => {
  res.json({
    status: 'success',
    restaurant: "mcdonalds",
  }) 
})

//via .env the port number is called and process.env.PORT calls that number
//use || as a backup in case the first port number is being used
const port = process.env.PORT || 8008
app.listen(port, () => {
  console.log(`Server is up and listening on ${port}`);
});