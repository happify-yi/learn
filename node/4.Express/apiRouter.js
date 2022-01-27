const express = require('express');
const router = express.Router()

router.get('/get', (req, res) => {
	const query = req.query
	res.send({
		status: 0,  //状态描述
		msg: 'GET请求成功',
		data: query
	})
})

//post请求必须配置解析数据的中间件 
router.post('/post', (req, res) => {
	let body = req.body
	res.send({
		status: 0,
		msg: 'POST请求成功',
		data: body
	})
})
module.exports = router
