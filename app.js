const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var printReqLog = function (req, res, next) {
  let date = new Date()
  let day = date.toJSON().split('T')[0]
  let time = date.toJSON().split('T')[1].split('.')[0]

  console.log(day + ' ' + time + ' | ' + req.method + ' from ' + req.url)
  next()
}

app.use(printReqLog)

// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})