//创建web服务器的基本步骤：
//1.导入http模块
const http = require('http')

//2.创建web服务器实例
const server = http.createServer()
//3.为服务器绑定request请求，监听客户端的请求
//req是请求对象，包含了与客户端相关的数据与属性
server.on('request', (req, res) => {
	const str = `请求的url地址是${req.url},请求的类型是 ${req.method}`
	//调用res.setHeader()方法，设置Content-Type，解决中文乱码的方法
	res.setHeader('Content-Type', 'text/html;charset=utf-8')
	//res.end将内容相应给客户端
	res.end(str)
})
//4.启动服务器
server.listen(80, () => {
	console.log('serve running')
})
