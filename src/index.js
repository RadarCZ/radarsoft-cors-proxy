const app = require('./app')

const server = app.listen(8880, () => {
    console.log(`App is running at http://localhost:8880 in ${app.get('env')} mode`)
  
    console.log('Press CTRL-C to stop')
})

module.exports = server