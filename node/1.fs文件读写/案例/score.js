const fs = require('fs')

fs.readFile('score.txt', 'utf-8', (err, data) => {
	if (err) {
		return console.log('文件读取失败', err)
	}
	console.log('文件读取成功', data)
	let array = data.split(' ')

	let newArr = []
	array.forEach((item) => {
		newArr.push(item.replace('=', ':'))
	})
	let str = newArr.join('\r\n')

	fs.writeFile('scoreOk.txt', str, (err) => {
		if (err) {
			console.log('失败！！！')
		} else {
			console.log('写入文件成功')
		}
	})
})

