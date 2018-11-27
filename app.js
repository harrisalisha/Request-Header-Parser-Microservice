var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());



var api = 'api/whoami';
app.get(api, function(req, res){
    var language= req.acceptsLanguanges();
    var software = "OS:"+ req.useragent.os + ", Browser:"+ req.user;
    var ipaddress= req.ip;

    res.json({'ipaddress': ipaddress, 'software': software, 'language': language[0]})
});

//static text response
/*app.get('/', function(req, res) { 
    res.send('<p>Visit <a href="#">/whoami</a> to get the IP address, language and operating system for your browser.</p>');
  });

 //initialzing to send back response to the browser
  app.get('/whoami', function(req, res) { 
    var result = {};
    result.ipaddress = req.headers['x-forwarded-for'].split(',')[0];


    //89.123.123.123,::ffff:10.20.30.123,::ffff:127.0.0.1,10.10.10.22,::ffff:182.27.0.1
    result.language = req.headers['accept-language'].split(',')[0];

    var ua = req.headers['user-agent'];
    ua = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')')); 
    result.software = ua;  
    //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36
    

    res.send(result);
  });*/


  app.listen(3000, function() {
    console.log('App listening on port 3000');
});
