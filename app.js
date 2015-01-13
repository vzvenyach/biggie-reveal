var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/reveal'));

app.listen(process.env.PORT || 3000);