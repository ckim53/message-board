const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')

app.use('/', indexRouter);

PORT = 3000;
app.listen(PORT);