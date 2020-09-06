const express = require('express');
const cors = require('cors');
const debug = require('debug')('app:app');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan')
const HomeRouter = require('./resources/routes/HomeRouter')
const signUpRouter = require('./resources/routes/signUpRouter')


const app = express()
const Port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', HomeRouter);
app.use('/signup', signUpRouter);


app.listen(Port, () => {
  debug(chalk.blue(`app listen on port ${chalk.greenBright(Port)}`))
})