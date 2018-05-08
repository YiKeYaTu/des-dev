/**
 * 重新构建前端静态资源
 */
const childProcess = require('child_process')

module.exports = () => {
  return new Promise((resolve, reject) => {
    childProcess.exec('cd ../../frontend && npm run build', (err, stdout, stdin) => {
      err && reject(err)
      resolve()
    });
  })
}

module.exports()