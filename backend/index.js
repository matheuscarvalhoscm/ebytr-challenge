const bodyParser = require('body-parser');
const express = require('express');
const taskRouter = require('./routes/taskRouter');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/', taskRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
