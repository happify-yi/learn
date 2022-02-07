//在这里定义所有路由的处理函数
const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
//注册用户的处理函数
exports.regUser = (req, res) => {
    //获取客户端提交到服务器的用户信息
    const userinfo = req.body
    //对表单中的数据，进行合法性的校验
    // if (!userinfo.username || !userinfo.password) {
    //     // res.send({
    //     //     status: 1,
    //     //     message: '用户名或密码不能为空'
    //     // })
    //     res.cc('用户名或密码不能为空')
    // }

    //检测用户名是否被占用
    const sqlStr = `select * from ev_users where username=?`
    db.query(sqlStr, [userinfo.username], (err, result) => {
        if (err) {
            // return res.send({status:1,messageg:err.message})
            return res.cc(err)
        }

        if (result.length > 0) {
            console.log(result, 'res')
            // return res.send({ status: 1, message: '用户名已被占用' })
            return res.cc('用户名已被占用')
        }

        //对密码进行加密,返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql = 'insert into ev_users set ?'
        db.query(sql, userinfo, (err, result) => {
            if (err) {
                // return res.send({ status: 1, message: err.message })
                return res.cc(err)
            }
            if (result.affectedRows !== 1) {
                // return res.send({ status: 1, massage: '注册用户失败' })
                return res.cc('注册用户失败')
            }
            // res.send({ status: 0, message: '注册用户成功' })
            res.cc('注册成功', 0)
        })
    })
    // res.send('regUser OK')
}

//登录的处理函数
exports.login = (req, res) => {
    //接受表单的数据
    const userinfo = req.body
    //定义sql语句
    const sqlStr = `select * from ev_users where username=?`
    db.query(sqlStr, [userinfo.username], (err, result) => {
        if (err) return res.cc(err)
        if (result.length !== 1) return res.cc('登录失败')
        //判断sql中的账号密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, result[0].password)
        if (!compareResult) return res.cc('密码错误')

        const user = { ...result[0], password: '', user_pic: '' }
        //在服务器端生成token字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h'
        })
        res.send({
            status: 0,
            message: '登录成功',
            //为了方便客户端使用token，在服务器端直接拼接上Bearer的前缀
            token: 'Bearer ' + tokenStr
        })


    })
}