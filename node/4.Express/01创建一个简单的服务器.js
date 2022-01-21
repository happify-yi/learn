//1.导入express
const express = require('express')

//2.创建web服务器
const app = express()


// app.get('请求url', (req, res) => { 处理函数 }) //req: 请求对象（包含请求相关的属性和方法）  res：相应对象
// app.post('请求url', (req, res) => { 处理函数 })

//4.监听客户的get请求和post请求
app.get('/user', (req, res) => {
	//调用express的res.send()方法，向客户端响应数据
	res.send({ name: 'zhangsan', age: 20 })
})

app.post('/index', (req, res) => {
	//调用express提供的res.send方法，向客户端响应一个文本字符串
	res.send('请求成功')
	//浏览器不显示的原因是：浏览器不能直接发送post请求
})

app.get('/', (req, res) => {
	//通过req.query可以获取到客户端发送过来的 查询参数
	//默认情况下，res.query是一个空对象
	console.log(req.query)
	res.send(req.query)
})

app.get('/user/:id', (req, res) => {
	//这里的id为一个动态参数，使用：匹配
	//req.params是动态匹配到的URL参数，默认也是一个空对象
	console.log(req.params)
	res.send(req.params)
})
//3.启动web服务器
app.listen(80, () => {
	console.log('serve runing..')
})
