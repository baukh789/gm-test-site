var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

// 静态文件
app.use(express.static(__dirname));

var privateKey  = fs.readFileSync('./cert/private.key', 'utf8'),
    certificate = fs.readFileSync('./cert/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

https.createServer(credentials, app).listen(4003);

app.listen(8003, function () {
    console.log('http Server running at :' + 8003);
});

// TODO 这个子服务虽然成功开启了https服务，但是并无法通过develop.lovejavascript.com进行正常访问，原因在于baukhZone项目中的跳转问题