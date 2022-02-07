const db = require('../db/index')

exports.getUserinfo = (req, res) => {

  const sqlStr = 'select id, username, nickname, email, user_pic from ev_users where id=?'
  db.query(sqlStr, req.user.id, (err, result) => {
    if (err) return res.cc(err)
    if (result.length !== 1) return res.cc('获取用户信息失败！')
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: result[0],
    })
  })
}

exports.updateUserinfo = (req, res) => {
  const sqlStr = `update ev_users set ? where id=?`
  console.log(req.user, 'req')
  db.query(sqlStr, [req.body, req.body.id], (err, result) => {
    if (err) return res.cc(err)
    if (result.affectedRows !== 1) return res.cc('更新失败')
    return res.cc('修改用户基本信息成功！', 0)
  })
}