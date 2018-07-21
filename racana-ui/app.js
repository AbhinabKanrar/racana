"use strict"

const server = require('./src/config/server')

const express = require('express')
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')))

server.init(app)

