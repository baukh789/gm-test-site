var express = require('express');
var app = express();

// 静态文件
app.use(express.static(__dirname));
app.listen(8003, function () {
    console.log('Server running at :' + 8003);
});