const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

router.get('*', async (ctx, next) => {
  let page = fs.readFileSync(path.join(__dirname, '../../frontend/build/index.html')).toString()
  
  page = cheerio.load(page)

  page('head').append(`<script>var uid = ${ctx.session.uid}</script>`)
  
  ctx.body = page.html();
})

module.exports = router
