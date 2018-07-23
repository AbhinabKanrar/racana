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
// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')))


app.get('*', (req, res) => {
    const content = require('react-dom/server').renderToNodeStream(require('./views/index'))
    res.setHeader('Content-Type', 'text/html')
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="robots" content="noindex, nofollow" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="manifest.json" />
            <link rel="shortcut icon" href="favicon.ico" />
            <link crossorigin="anonymous" media="all" rel="stylesheet" href="/public/stylesheet/w3.css" />
            <title>Racana</title>
        </head>
        <body>
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
            <div id="racana">${content}</div>
        </body>
        </html>
    `)
})

{/* <script type="text/jsx" src="/public/scripts/bundle.js" type="module"></script> */}

server.init(app)
