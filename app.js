const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const methodOverride = require('method-override')
app.use(methodOverride('_method'))


var printReqLog = function (req, res, next) {
  let date = new Date()
  let day = date.toJSON().split('T')[0]
  let time = date.toJSON().split('T')[1].split('.')[0]

  console.log(`${day} ${time} | ${req.method} from ${req.url}`)
  next()
}

app.use(printReqLog)


app.get('/', (req, res) => {
  res.render('index', { message: '列出全部 Todo' })
})

app.get('/new', (req, res) => {
  res.render('index', { message: '新增 Todo 頁面' })
})


app.get('/:id', (req, res) => {
  res.render('index', { message: '顯示一筆 Todo' })
})


app.post('/', (req, res) => {
  res.render('index', { message: '新增一筆  Todo' })
})

app.delete('/:id/delete', (req, res) => {
  res.render('index', { message: '刪除 Todo' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})