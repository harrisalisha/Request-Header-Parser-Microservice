var express = require('express');
var app = express();

//static text response
app.get('/', function(req, res) { 
    res.send('<p>Visit <a href="whoami">/whoami</a> to get the IP address, language and operating system for your browser.</p>');
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
  });


  app.listen(8080, function() {
    console.log('App listening on port 8080');
});
