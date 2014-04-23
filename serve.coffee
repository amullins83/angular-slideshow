# Module dependencies.

express = require('express')
http = require('http')
path = require('path')
favicon = require('static-favicon')
app = express()


# all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(favicon(
  path.join(__dirname, 'public/images/favicon.ico')))

app.use(express.static(path.join(__dirname, 'public')))

app.get '/', (req, res)->
  res.redirect "index.html"

http.createServer(app).listen app.get('port'), ->
  console.log 'Serving slides on port ' + app.get('port')
