"use strict"

const server = require('./src/config/server')

const express = require('express')
const app = express()
const path = require("path")

app.use('/public', express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')))

server.init(app)
