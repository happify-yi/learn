//导入express
const express = require('express')

//创建服务器实例
const app = express()


//必须在配置cors中间件之前，配置JSONP的接口

app.get('/api/jsonp', (req, res) => {
	//定义JSONP接口的实现过程
	// 1.获取客户端发送过来的回调函数名字
	const functionName = req.query.callback
	// 2.定义要发送给客户端的数据对象
	const data = { name: 'zs', age: 22 }
	// 3.拼接出一个函数调用的字符串
	const scriptStr = `${functionName}(${JSON.stringify(data)})`
	// 4.把上一步拼接得到的字符串，响应给客户端的<Script>标签进行解析执行
	res.send(scriptStr)
})

//在路由之前俺，配置解析数据中间件
app.use(express.urlencoded({ extended: false }))

//一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题
const cors = require('cors')
app.use(cors())

const router = require('./apiRouter')
app.use('/api', router)


app.listen(80, () => {
	console.log('serving runing...')
})