const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

const tacos = [
  { id: 1, name: 'carne asada', spiciness: 3 },
  { id: 2, name: 'al pastor', spiciness: 4 },
  { id: 3, name: 'shrimp', spiciness: 1 },
  { id: 4, name: 'brisket', spiciness: 1 },
  { id: 5, name: 'jamaican habanero', spiciness: 8 },
  { id: 6, name: 'lengua', spiciness: 2 },
  { id: 7, name: 'chicken', spiciness: 12 },
];

/**
 * @desc middleware
 */
app.use(bodyParser.json());

app.get('/tacos', function (req, res) {
  res.status(200).json(tacos);
});

app.post('/tacos', function (req, res) {
  tacos.push(req.body);
  
  res.status(201).json(tacos);
});

app.delete('/tacos/:id', function (req, res) {
  const index = tacos.findIndex(taco => taco.id === parseInt(req.params.id));
  tacos.splice(index, 1);

  res.status(200).json(tacos);
});

app.listen(port, function () {
  console.log(`gettin jiggy on port: ${port}`);
});

