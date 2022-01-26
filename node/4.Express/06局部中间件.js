const express = require('express')
const app = express()

//编写一个简单的中间件函数
const mw = (req, res, next) => {
	console.log('这是最简单的中间件函数')
	next()
}

//只在局部生效：相当于过滤器
app.get('/', mw, (req, res) => {
	console.log('这是首页组件')
	res.send('首页')
})
app.get('/user', (req, res) => {
	console.log("这是用户组件")
	res.send('用户')
})

app.listen(80, () => {
	console.log('serve runing...')
})


//中间件的分类
//1.应用级别的中间件  绑定到app实例上的中间件 app.use app.get
//2.路由             绑定到router实例上
//3.错误             （err,req,res,next)  err---捕获整个项目的异常错误，防止程序的崩溃
//   错误中间件必须注册在所有路由之后！ 其余都需要定义在路由前面！！
//4.express内置中间件
//  express.static  快速托管静态资源
//  express.json    解析JSON格式的请求体
//  挂载   app.use(experss.json())
//  express.urlencoded    解析URL-encoded格式的请求体数据
//  挂载  app.use(express.urlencoded({extended:false}))    默认写法
//5.第三方中间件