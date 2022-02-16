const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const error = require('./middlewares/errorMiddleware');

const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use(router);

app.use(error);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
