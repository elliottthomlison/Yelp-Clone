require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
//create an instance of express = achieved by storing it into a variable
const app = express()

app.use(express.json)

//get grabs multiple restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: ["mcdonalds", 'wendys'],
    }
  }); 
});
 
//get a single restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params)

  res.status(200).json({
    status: 'success',
  })
})

//create restaurant
app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
})

//update restaurants
//by putting 'id' it allows express know what restaurant we want to update 
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id)
})

//delete restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.status(204).json({
    status: 'success'
  });
});

//via .env the port number is called and process.env.PORT calls that number
//use || as a backup in case the first port number is being used
const port = process.env.PORT || 8008
app.listen(port, () => {
  console.log(`Server is up and listening on ${port}`);
});