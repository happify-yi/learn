//在一个自定义模块钟，默认情况下，modele.exports={}  为一个空对象

module.exports.username = 'zhangsahn'
module.exports.sayHello = () => {
	console.log('hello')
}


//指向的新对象
module.exports = {
	age: '18',
	hello() {
		console.log('nihao')
	}
}
//Node提供exports对象    exports和modules.exports指向的是同一个对象(最开始的那个空对象)
//若后面有其中一个改变指针，则两个指向的对象不相等

console.log(module.exports)
console.log(exports)
console.log(module.exports === exports)


//CommonJS规定：每个模块内部,module表示当前模块。module变量是一个对象，他的exports属性是对外的接口
//加载某个模块，其实是加载模块的module.exports属性
