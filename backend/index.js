const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(bodyParser.json());
app.use('/', taskRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
