const express = require('express')

const app = express()

//解析表单数据的中间件
app.use((req, res, next) => {
	//定义中间具体的业务逻辑
})

app.listen(80, () => {

})