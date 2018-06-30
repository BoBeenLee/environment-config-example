const express = require('express')
const app = express()
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });


app.get('/', (req, res) => res.send(`Hello World! ${process.env.API_URL}`))

app.listen(3000, () => console.log('Example app listening on port 3000!'));
