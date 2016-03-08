/* 
PARAM PAM PAM
Exercise 6 of 8

Create an Express.js server that processes PUT '/message/:id' requests.

For instance:

    PUT /message/526aa677a8ceb64569c9d4fb

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:

    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
*/

var url = require('url')
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res) {
    
    var id = url.parse(req.path).path.slice(9)
    console.log(req.params)
    res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex'))
})
app.listen(process.argv[2])

/* 
// Official solution
    var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])
    
*/