//使用require加载模块，导入自定模块的时候，得到的成员，就是modules.exports中导出的对象
//require()导入方法时，导入结果，永远以module.exports指向的对象为准：
//即导入模块的module.exports指向一个新对象，那么导入的就是这个新对象
const obj = require('./hello.js')
console.log(obj)


//模块作用域：定义的变量、方法，只能在当前模块内进行访问
