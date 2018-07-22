"use strict"

import { render } from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import {Signin} from "./auth/Signin"

const React = require('react')

class App extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="manifest" href="manifest.json" />
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link crossOrigin="anonymous" media="all" rel="stylesheet" href="/public/stylesheet/w3.css" />
                    <title>Racana</title>
                </head>
                <body>
                    <noscript>
                        You need to enable JavaScript to run this app.
                    </noscript>
                    <Router>
                        
                    </Router>
                </body>
            </html>
        )
    }
}

module.exports = App