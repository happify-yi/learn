const express = require('express')
const app = express()

// 全局中间件 重复部分抽离，不用每个组件单独处理
app.use((req, res, next) => {
	const time = Date.now()
	req.startTime = time
	next()
})
app.get('/', (req, res) => {
	res.send('首页' + req.startTime)
})
app.get('/user', (req, res) => {
	console.log("这是用户组件")
	res.send('用户' + req.startTime)
})

app.listen(80, () => {
	console.log('serve runing...')
})