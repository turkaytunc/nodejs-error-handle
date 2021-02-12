const express = require('express');
const app = express();
require('dotenv').config();

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  console.warn(`Server listen http://localhost:${PORT}`);
});
