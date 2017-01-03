let connect = require('connect')
let path = require('path')
let comiler = require('connect-compiler')
let livereload = require('livereload')
let static = require('serve-static')

let server = connect()
let lrserver = livereload.createServer()

server.use(static(__dirname))

server.listen(3000)

lrserver.watch([__dirname + "/dist", __dirname + "/demo"])
