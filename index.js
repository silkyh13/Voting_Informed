require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');//????
const MySQLStore = require('express-mysql-session')(session);//????
const path = require('path');
const app = express()
const port = 8080;
const User = require("./routes/user");
const passport = require('./passport');//functions includes: authenticate requests and sessions
const createConnections = require("./sockets/index.js");
//needs to know database in order to create session

const options = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
const sessionStore = new MySQLStore(options);
console.log(process.env.DB_NAME)
app.use(
  session({
    secret: process.env.DB_TOKEN_SECRET,
    resave: false,//Forces the session to be saved back to the session store, even session nvr modified
    saveUninitialized: false,//Forces a session that is "uninitialized" to be saved to the store.
    cookie: { secure: false, maxAge: 259200000},
    store: sessionStore
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());//Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

app.use("/api", User);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

createConnections(server);