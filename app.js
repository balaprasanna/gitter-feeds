var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json({api_version: '1',
                    url: 'www.google.com'
          });
});

app.listen(3000);