const { log, clear } = require('console');

const http = require('http')

const fs = require('fs')

const port = 8080

const html = fs.readFileSync('./index.html')

clear()

http.createServer( ( request, response ) => {

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(html)
    response.end()
})
.listen( port );

log(`listening on ${port}`)