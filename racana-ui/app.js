"use strict"

const server = require('./src/config/server'),
    auth = require('./src/config/auth'),
    template = require('./src/config/template')

const express = require('express')
const app = express()
const path = require("path")

app.use('/public', express.static(path.resolve(__dirname, 'dist')))

template.init(app)

// app.get('/signin', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/signin.html')))
// app.get('*', auth, (req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')))

app.get('*', (req, res) => res.render('index'))

server.init(app)
