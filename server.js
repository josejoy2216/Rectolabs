if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const indexRouter = require('./routes/index');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    console.log('Connected to Mongoose !')
});

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(3030, () => {
    console.log('Ready To Go!')
})