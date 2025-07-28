const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser')

require('dotenv').config();

const swaggerDocument = require('./swagger.json');
const router = require("./routers");

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
const port = process.env.PORT;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
