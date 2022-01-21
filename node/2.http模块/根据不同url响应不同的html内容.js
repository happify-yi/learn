const http = require('http')

const serve = http.createServer()
serve.on('request', (req, res) => {
	const url = req.url
	let content = '<p>404 not found！</>'
	if (url == '/' || url == '/index') {
		content = '<p>首页</p>'
	} else if (url == '/about') {
		content = '<p>关于页面</p>'
	}
	res.setHeader('Content-Type', 'text/html;charset=utf-8')
	res.end(content)
})

serve.listen(80, () => {
	console.log('serve runing...')
})