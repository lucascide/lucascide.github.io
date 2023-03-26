require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const MongoStore = require('connect-mongo');

const routes = require('./routes')
const path = require('path')
const session = require('express-session');




app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session( {
    secret: 'asdjdsfjajdffnvfdgdfgdfgdggdfgdg',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }

} )

app.use(sessionOptions);



app.use(routes);



app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acessar http://localhost:3001')
        console.log('Servidor executando na porta 3001')
    });
})

