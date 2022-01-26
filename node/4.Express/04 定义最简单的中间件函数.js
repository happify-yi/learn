const express = require('express')
const app = express()

//编写一个简单的中间件函数
const mw = (req, res, next) => {
	console.log('这是最简单的中间件函数')
	next()
}
//为全局挂载中间件函数，每次请求都会先调用
app.use(mw)


// 全局中间件的简化形式
// app.use((req, res, next) => {
// 	console.log('这是一个最简单的中间件函数')
// 	next()
// })
app.get('/', (req, res) => {
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