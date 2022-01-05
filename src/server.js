// eslint-disable-next-line @typescript-eslint/no-var-requires
var express = require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)