# 证书
- 阿里云下载其它类证书
- 私钥xxxxx.key 重命名为 private.key 和 证书xxxxx.pem重命名为 file.crt。（注：xxxx是一串数字）
- 删除下载项中的其它无用文件
- 进行如下配置
```
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('./cert/private.key', 'utf8'),
      certificate = fs.readFileSync('./cert/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
var SSLPort = 443;
httpsServer.listen(SSLPort, function() {
    console.log('OneLib https is running', SSLPort);
});

作者：Mike的读书季
链接：https://www.jianshu.com/p/9c475f897db1
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```

# 流程
- 在GridManager 修改代码
- GridManager 项目中 执行 npm run build
- GridManager 项目中 执行 npm publish build 发布测试版本
- gmTest 项目中执行 npm install  获取最新的测试代码


