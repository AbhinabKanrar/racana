"use strict"

const server = require('./src/config/server')

const express = require('express')
const app = express()

server.init(app)

