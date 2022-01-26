//1.导入express
const express = require('express')
//2.创建路由对象
const router = express.Router()
//3.挂载具体的路由

router.get('/', (req, res) => {
	res.send('首页')
})
router.post('/about', (req, res) => {
	res.send('关于')
})
//4.向外到处路由对象
module.exports = router