const express=require('express')
//配置mysql模块
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',//数据库的IP地址
    user:'root',//登录数据库的账号
    password:'123456',//登录数据库的密码
    database:'user'//指定数据库的名称
})

//调用db.query函数，指定要执行的SQL语句，通过回调函数拿到执行的结果
//测试mysql模块是否正常工作
// db.query('select 1',(err,result)=>{
//     if(err) return console.log(err.message)
//     console.log(result)
// })

//查询数据
// const sqlStr='select * from user'
// db.query(sqlStr,(err,res)=>{
//     if(err) return console.log(erer.message)

//     //如果执行的是select语句，执行结果是一个对象数组
//     console.log(res)
// })

//插入数据
// const user={username:'wangwu',password:'123456'}
// const sqlStr='insert into user (username,password) VALUES (?,?)'

// db.query(sqlStr,[user.username,user.password],(err,res)=>{
//     if(err) return console.log(err.message)
//   //根据res.affectedRcow值来判断是否插入数据成功
//   //执行insert语句，res返回的是一个对象  
//    if(res.affectedRows===1){ console.log("插入数据成功")}
// })

//简便方式
// const user={username:'nihao',password:'123456'}
// //？为占位符
// const sqlStr='insert into user SET ?'
// db.query(sqlStr,user,(err,res)=>{
//     if(err) return console.log(err.message)
//     if(res.affectedRows===1){console.log('插入成功')}
// })



//更新数据
// const user={id:6,username:'liuliu',password:'abc'}
// const sqlStr='update user SET username=?,password=? where id=?'
// db.query(sqlStr,[user.username,user.password,user.id],(err,res)=>{
//     if(err) return console.log(err.message)
//     if(res.affectedRows===1) {console.log('更新数据成功')}
// })
//便捷方式
// const user={id:5,username:'wuwuwuw',password:'abc'}
// const sqlStr='update user SET ? where id=?'
// db.query(sqlStr,[user,user.id],(err,res)=>{
//     if(err) return console.log(err.message)
//     if(res.affectedRows===1) {console.log('更新数据成功')}
// })



//删除元素
const sqlStr='delete from user where id=?'
db.query(sqlStr,3,(err,res)=>{
if(err) return console.log(err.message)
if(res.affectRows===1) {console.log('删除成功')}    
})


const app=express()
app.listen(80,()=>{
    console.log('serve runing...')
})

