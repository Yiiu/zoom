const rollup = require('rollup')
const watch = require('rollup-watch')
const fp = require('path')
const open = require('open')
const express =  require('express')
const app =  express()
const livereload = require('livereload')
const lrserver = livereload.createServer()

const config = require('./rollup.config')

const PORT = process.env.PORT || 3000

function relative (path) {
    return fp.join(__dirname, path)
}

app.use(express.static(relative('../demo')))
app.use('/dist', express.static(relative('../dist')))

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
    open('http://localhost:3000/')
})

const watcherDefault = watch(rollup, config)

const eventHandler = (event, filename) => {
    switch (event.code) {
        case 'STARTING':
            break
        case 'BUILD_START':
            console.log(`bundling ${filename}...`)
            break
        case 'BUILD_END':
            console.log(`${filename} bundled in ${event.duration}ms. Watching for changes...`)
            break
        case 'ERROR':
            console.error('error: ' + event.error)
            break
        default:
            console.log('unknown event', event)
  }
}


watcherDefault.on('event', event => eventHandler(event, config.dest))
lrserver.watch([relative('../dist'), relative('../demo')])