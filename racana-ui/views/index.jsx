"use strict"

const React = require('react')

class DefaultLayout extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                    <title>Racana</title>
                    <link rel="stylesheet" type="text/css" href="/public/stylesheet/w3.css" />
                    <link rel="stylesheet" type="text/css" href="/public/stylesheet/font-awesome.css" />
                    <link rel="stylesheet" type="text/css" href="/public/stylesheet/style.css" />
                </head>
                <body>{this.props.children}</body>
                <script src="/public/scripts/jquery.js" />
            </html>
        )
    }
}

module.exports = DefaultLayout