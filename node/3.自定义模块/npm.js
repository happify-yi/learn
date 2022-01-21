// node_modules用来存放多有已安装到项目的包
// package-lock.json配置文件用来记录node_modules目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。
// 包的版本号：
// 第1位数字：大版本（需要进行底层重构）
// 第2位数字：功能版本
// 第3位数字：bug修复版本
// 包管理配置文件：
// package.json  包管理配置文件
// dependencies:记录使用npm install安装了哪些包
// devDecpendencies 仅仅只要开发时候使用
// 问题：package.json和package.lock.json的区别


//模块的加载机制
//默认从缓存中加载
//加载顺序：1.确切的文件名进行加载>.js拓展名>.json>.node 都没有则加载失败