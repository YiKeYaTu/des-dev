const fs = require('fs')
const path = require('path')
const db = require('../service/connectDB')

const router = require('koa-router')({
  prefix: '/api'
})

router.get('/getTemplate', async (ctx, next) => {
  const { id, uid } = ctx.query

  try {
    let row

    if (!id && !uid) {
      row = await db.query('SELECT * FROM template')
    } else {
      row = await db.query('SELECT * FROM template WHERE template_user_id = ? OR template_id = ?', [ uid, id ])
    }

    return ctx.body = {
      status: 200,
      data: row
    }
  } catch (e) {
    return ctx.body = {
      status: 500, 
      msg: e
    }
  }
})

router.get('/getComponentList', async (ctx) => {
  const list = fs.readdirSync(path.join(__dirname, '../../frontend/src/main/element'))

  return ctx.body = {
    status: 200,
    data: list.filter(item => item.match(/\.js$/)).map(item => item.split('.')[0])
  }
})

router.get('/getComponent', async (ctx) => {
  const { name } = ctx.query

  try {
    const js = fs.readFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.js`)
    ).toString()
    const json = fs.readFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.json`)
    ).toString()

    return ctx.body = {
      status: 200,
      data: { js, json }
    }
  } catch (e) {
    return ctx.body = {
      status: 500,
      msg: e
    }
  }
})

router.post('/addComponent', async (ctx, next) => {
  const { name } = ctx.request.body

  try {
    const isExit = fs.existsSync(path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.js`))

    if (isExit) {
      throw ('该组件已经存在')
    }

    fs.writeFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.js`), 
      fs.readFileSync(path.join(__dirname, '../componentExample/test.ui.index.js'))
    )
    fs.writeFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.json`),
      fs.readFileSync(path.join(__dirname, '../componentExample/test.ui.index.json'))
    )

    ctx.body = {
      status: 200
    }
  } catch (e) {
    ctx.body = {
      status: 400,
      msg: e
    }
  }
})

router.post('/deleteComponent', async (ctx, next) => {
  const { name } = ctx.request.body
  try {
    fs.unlinkSync(path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.js`))
    fs.unlinkSync(path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.json`))
  } catch (e) {
    ctx.body = {
      status: 500,
      msg: e
    }
  }

  ctx.body = {
    status: 200,
    msg: '删除成功'
  }
})

router.post('/updateComponent', async (ctx, next) => {
  const { js, json, name } = ctx.request.body

  try {
    fs.writeFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.js`), 
      js
    )
    fs.writeFileSync(
      path.join(__dirname, `../../frontend/src/main/element/${name}.ui.index.json`),
      json
    )
    return ctx.body = {
      status: 200
    }
  } catch (e) {
    ctx.body = {
      status: 500,
      msg: e
    }
  }
})

router.post('/deleteTemplate', async (ctx) => {
  const { id } = ctx.request.body

  try {
    await db.query('DELETE FROM template WHERE template_id = ?', [ id ])
    return ctx.body = {
      status: 200
    }
  } catch (e) {
    return ctx.body = {
      status: 500,
      msg: e
    }
  }
})

router.post('/saveTemplate', async (ctx, next) => {
  const { json, name } = ctx.request.body
  
  try {
    await db.query('INSERT INTO `template` VALUES(null, ?, ?, ?)', [ json, ctx.session.uid, 'test' + Math.random() ])
    return ctx.body = {
      status: 200
    }
  } catch (e) {
    return ctx.body = {
      status: 500, 
      msg: e
    }
  }
})

router.get('/logout', async (ctx) => {
  ctx.session.uid = null   

  ctx.response.status = 301
  ctx.response.set('Location', '/login')

  return ctx.body = {
    status: 200
  }
})

router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  
  if (ctx.session.uid) {
    return ctx.body = {
      status: 400,
      msg: '你已经登陆过了'
    }
  }

  const row = await db
    .query('SELECT * FROM `user` WHERE user_name = ? AND user_password = ?', [ username, password ])

  if (row.length > 0) {
    ctx.session.uid = row[0].user_id

    return ctx.body = {
      status: 200,
      msg: '登陆成功'
    }  
  } else {
    return ctx.body = {
      status: 400,
      msg: '账号或者密码错误'
    }  
  }
})
router.post('/register', async (ctx) => {
  const { username, password, repeatPassword } = ctx.request.body

  if (password !== repeatPassword) {
    return ctx.body = {
      status: 400,
      msg: '密码不一致'
    }  
  }

  const row = await db
    .query('SELECT * FROM `user` WHERE user_name = ?', [ username ])

  if (row.length !== 0) {
    return ctx.body = {
      status: 400,
      msg: '该用户名已被使用'
    }  
  } else {
    try {
      await db.query('INSERT INTO user VALUES(null, ?, ?)', [ username, password ])
      return ctx.body = {
        status: 200,
        msg: '注册成功'
      }
    } catch (e) {
      return ctx.body = {
        status: 500,
        msg: e
      }
    }
  }
})

module.exports = router
