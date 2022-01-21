//1.导入fs模块，来操作文件
const fs=require('fs')

//2.调用fs.readFile()方法读取文件
//参数1：读取文件的存放路径
//参数2:读取文件的编码格式，一般未utf-8
//回调函数,拿到读取失败和成功的结果
fs.readFile('1.txt','utf-8',function(err,data){
	if(err){
	return	console.log('读取文件失败'+'err.message')
	}
	console.log('读取文件成功'+data)
})


//调用fs.writeFile(file,data,[option],callback)
//第三个参数未可选参数，标识以什么格式写入，一般未utf-8
fs.writeFile('2.txt','nihaonihao',function(err){
	if(err){
	return	console.log('写入数据失败',err)
	}
	console.log('写入文件成功')
})
