"use strict"

var auth = (req, res, next) => {
    return new Promise((resolve, reject) => {
        if (req.headers['ws-access-token'] === 'abcd') {
            next()
        } else {
            return res.redirect('/signin')
        }
    })
}

module.exports = auth