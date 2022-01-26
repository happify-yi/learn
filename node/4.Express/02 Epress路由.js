//路由是指客户端的请求与服务器处理函数之间的映射关系
//Express中的路由：请求类型，请求的URL地址、处理函数
//app.METHOD(PATh，HANDLE)


const express = require('express')
const app = express()

//挂载路由
app.get('/index', (req, res) => {
	res.send('首页')
})

app.listen(81, () => {
	console.log('serve runing...')
})