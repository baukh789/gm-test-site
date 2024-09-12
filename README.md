# GridManager 测试站点

## 注意
http://jsrun.net/NPaKp/edit 网址上所使用gm均为develop.lovejavascript.com上的资源，不需要每次去更新。

## 流程
- 在GridManager 修改代码
- GridManager 项目中 执行 npm run build
- GridManager 项目中 执行 npm publish dist 发布测试版本
- gmTest 项目中执行 npm run build  获取最新的测试代码
- 手动压缩gridmanager.zip包
- 在服务器gmTest目录下解压`unzip gridmanager.zip`


