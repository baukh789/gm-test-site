var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

// 静态文件
app.use(express.static(__dirname));
// app.listen(8003, function () {
//     console.log('Server running at :' + 8003);
// });
var privateKey  = fs.readFileSync('./cert/private.key', 'utf8'),
    certificate = fs.readFileSync('./cert/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

https.createServer(credentials, app).listen(4003);

app.listen(8003, function () {
    console.log('Server running at :' + 8003);
});