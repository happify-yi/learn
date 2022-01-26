const express = require('express')
const app = express()


//导入路由模块
const router = require('./router')
//调用路由
app.use('/api', router)
//  /api 路由前缀
//app.use()函数的作用：注册全局中间件

app.listen(80, () => {
	console.log('serve runing...')
})