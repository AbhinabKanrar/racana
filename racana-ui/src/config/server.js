"use strict"

var ENV = process.env.NODE_ENV || 'dev',
    PORT = process.env.PORT || 8080,
    CPUS = require('os').cpus().length

const cluster = require('cluster')

module.exports = {
    init: function (app) {
        if (cluster.isMaster) {
            for (var i = 0; i < CPUS; i++) {
                cluster.fork();
            }
            app.listen(PORT, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log('server started at port ' + PORT)
            })
            cluster.on('exit', (worker, code, signal) => {
                console.log(`worker ${worker.process.pid} died`)
            })
        }
    }
}