"use strict"

const server = require('./src/config/server')

const express = require('express')
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, 'dist')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('*', (req, res) => res.render('/dist/login'))

server.init(app)
