const express = require('express')
const app = express()
const joi = require('@hapi/joi')

//导入跨域
const cors = require('cors')
app.use(cors())
//导入字符串解析中间件
app.use(express.urlencoded({ extended: false }))

//一定要在路由之前，封装res.cc函数
app.use((req, res, next) => {
    //status默认值是1，表示失败的情况
    //err的值，可能是一个错误对象，也可能是一个字符串
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({
    secret: config.jwtSecretKey,
    algorithms: ['HS256']
}).unless({ path: [/^\/api\//] }))

//导入路由
const userRouter = require('./router/user')
app.use('/api', userRouter)
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

//启动服务器
app.listen(80, () => {
    console.log('api serve runing in http://172.0.0.1:80/')
})

// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})